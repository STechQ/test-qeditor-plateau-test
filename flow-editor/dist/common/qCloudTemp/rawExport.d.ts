import { IStudioInfoExport } from "./studioInfoExport";
/**
 * Raw export paketi: Studio modelleri id çevirisi yapılmadan, storage'daki halleriyle.
 * Bu dosya paket formatının tek kaynağıdır; ileride yazılacak import işi de buradan okur.
 */
export declare const RAW_EXPORT_FORMAT: "studio-raw-export";
export declare const RAW_EXPORT_FORMAT_VERSION: 1;
/**
 * Paketteki `db/<collection>.jsonl` dosyaları (boş olabilir). Kayıtlar Studio ID'leriyle yazılır; Mongo'nun kendi `_id` alanı
 * taşınmaz. Yalnızca uygulamanın sahibi olduğu modüller pakete alınır; başka bir uygulamadan ya da organizasyondan import edilmiş
 * modüller IRawExportManifest.excludedModules'ta listelenir.
 * - Applications, Modules, ModelInfos: her zaman yazılır. Modules uygulamanın sahibi olduğu modüller, ModelInfos uygulamanın ve bu
 *   modüllerin güncel modelleridir (ownerItem).
 * - ModuleVersions, ModelHistoryInfos (+ `history/`): yalnızca includeHistory true iken vardır. ModuleVersions sahip olunan modüllerin
 *   tüm versiyonlarıdır. ModelHistoryInfos, pakete alınan modellerin ve bu versiyonların işaret ettiği modellerin
 *   (ModuleVersions.relatedModelHistories; release'ten sonra silinenler dahil) tüm (silme dışı) history'sidir. Yalnızca uygulamanın
 *   ya da sahip olduğu modüllerin kayıtları (ownerItem) alınır: versiyonların pin'lediği, iç içe import edilmiş modüllerin kayıtları
 *   pakete girmez. Her kayıt bir kez yer alır.
 * - Global'e açılmış (shareScope "Global") sahip olunan modüller Modules ve ModelInfos'ta son kaydedilmiş halleriyle yer alır;
 *   history açık olsa da versiyonları ve history kayıtları pakete girmez.
 */
export type RawExportCollection = "Applications" | "Modules" | "ModuleVersions" | "ModelInfos" | "ModelHistoryInfos";
export declare const RawExportPaths: {
    manifest: string;
    dbFolder: string;
    dbFile: (collection: RawExportCollection) => string;
    modelBody: (modelInfoId: string, key: string) => string;
    historyBody: (historyInfoId: string, key: string) => string;
};
/** Silme kayıtlarının sürümü ve body'si yok; pakete alınmazlar. */
export declare const RAW_EXPORT_EXCLUDED_HISTORY_TYPES: readonly ["delete", "ownerItemDelete"];
export interface IRawExportMissingBody {
    kind: "model" | "history";
    infoId: string;
    reason: string;
}
/** Değeri olmayan alanlar yazılmaz. */
export interface IRawExportExcludedModule {
    ID: string;
    name: string;
    /** Modülün bu uygulamayla relatedApplications ilişkisinden. */
    importedVersion?: string;
    /** Modülün bu uygulamayla relatedApplications ilişkisinden. */
    updateStrategy?: string;
    mainOwner?: string;
    /** Başka organizasyondan import edilmişse o organizasyon (ownerOrg.orgId). */
    ownerOrgId?: string;
    /** Modülün bu uygulamayla relatedApplications ilişkisinden: iç içe import edildiyse içine import edildiği modül. */
    parentModuleID?: string;
}
/** Değeri olmayan alanlar yazılmaz. */
export interface IRawExportExternalReference {
    /** Paket dışındaki hedefin ID'si (çoğunlukla model ID'si; `<<module:id>>` referansında modül ID'si). */
    targetId: string;
    targetName?: string;
    targetModelType?: string;
    /** Hedef modelin sahibi olan ve pakete alınmamış modül (excludedModules içindeki ID). */
    ownerModuleId?: string;
    /** Hedef kaynak organizasyonda bulunamadı: silinmiş ya da kırık referans, ya da ID olmayan bir değer (örn. `<<settings:anahtar>>`). */
    unresolved?: true;
}
export interface IRawExportManifest {
    format: typeof RAW_EXPORT_FORMAT;
    formatVersion: typeof RAW_EXPORT_FORMAT_VERSION;
    createdAt: string;
    exporterVersion: string;
    source: {
        /** Paketin export edildiği Studio ortamının adı (jobs'taki `ENVIRONMENT` env değişkeni, örn. prod, mango, isb). Tanımlı değilse alan yoktur. */
        environment?: string;
        /** Export'un istendiği Studio adresinin host'u (örn. studio.onplateau.com); port ve şema yok. Bilinmiyorsa alan yoktur. */
        host?: string;
        organization: IStudioInfoExport["organization"];
        application: IStudioInfoExport["application"];
    };
    /**
     * Model history'si istendi mi. false iken paket yalnızca güncel kayıtlı hali içerir: ModuleVersions, ModelHistoryInfos
     * ve `history/` yoktur (bkz. RawExportCollection).
     */
    includeHistory: boolean;
    /**
     * Import tarafı paketin eksiksiz açıldığını bu sayılarla doğrular: koleksiyon başına JSONL satır sayısı,
     * modelBodies/historyBodies ise `models/` ve `history/` altına yazılan dosya sayısı. includeHistory false iken ModuleVersions,
     * ModelHistoryInfos ve historyBodies 0'dır.
     */
    counts: Record<RawExportCollection, number> & {
        modelBodies: number;
        historyBodies: number;
    };
    /**
     * Uygulamanın kullandığı ama sahibi olmadığı (başka bir uygulamadan ya da organizasyondan import edilmiş) modüller.
     * Bu modüllerin kayıtları ve modelleri pakette yoktur; import tarafı bunları hedefte bağımlılık olarak çözmelidir.
     */
    excludedModules: Array<IRawExportExcludedModule>;
    /** Storage'da blob'u bulunamayan kayıtlar. */
    missingBodies: Array<IRawExportMissingBody>;
    /**
     * Paketteki modellerin paket dışına verdiği referansların hedefleri; hedef başına bir kayıt. Yalnızca güncel modellerden
     * (ModelInfos ve `models/`) hesaplanır, history'den değil. Kaynaklar Studio'nun kayıtta hesapladığı ModelInfos.dependentModels ve
     * body'lerde `<<tür:id>>` olarak geçen ham metin referanslarıdır (yorum satırında kalmış olabilir). Paketin içindekiler (uygulama,
     * sahip olunan modüller, paketteki modellerin ID ve modelID'leri) listelenmez; hedefler çoğunlukla excludedModules'ın modelleridir.
     * Import tarafı, paketi içeri almadan önce bu hedeflerin hedef ortamda bulunduğunu doğrulamalıdır. targetId'ye göre sıralıdır.
     */
    externalReferences: Array<IRawExportExternalReference>;
}
/**
 * Export isteğinin geldiği Studio adresinin host'u: tarayıcının gönderdiği Origin, yoksa proxy'nin x-forwarded-host'u, o da yoksa host
 * başlığı. Port ve şema atılır; kullanılabilir bir değer yoksa undefined.
 */
export declare function rawExportSourceHost(headers: {
    origin?: string;
    "x-forwarded-host"?: string;
    host?: string;
}): string | undefined;
//# sourceMappingURL=rawExport.d.ts.map