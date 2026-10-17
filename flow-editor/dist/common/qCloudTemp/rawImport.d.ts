import { StatusType } from "./exporter";
import { IRawExportManifest, RawExportCollection } from "./rawExport";
/**
 * Raw export paketinin (rawExport.ts) import sözleşmesi. Import jobs'ta çalışır: kullanıcı yüklemeden önce çakışma kararını (reject/skip)
 * verir, UI zip'i rawimport/upload'a yükler, API zip'i org storage'ına (imports/<importId>.zip) yazar ve tek bir rawImport job'u açar.
 * Job paketi kontrol eder, durur ya da devam eder, migrate eder ve yazar. Sonuçlar Jobs kaydının rawImport alanında durur.
 */
/** Import'un okuyabildiği paket formatı sürümleri (IRawExportManifest.formatVersion). */
export declare const RAW_IMPORT_SUPPORTED_FORMAT_VERSIONS: ReadonlyArray<number>;
/** Yüklenen (sıkıştırılmış) paketin üst sınırı. */
export declare const RAW_IMPORT_MAX_PACKAGE_BYTES: number;
/** Zip içindeki tek bir dosyanın açılmış boyutunun üst sınırı (zip bombasına karşı). */
export declare const RAW_IMPORT_MAX_ENTRY_BYTES: number;
/** Zip içindeki tüm dosyaların açılmış boyutları toplamının üst sınırı (zip bombasına karşı). */
export declare const RAW_IMPORT_MAX_UNZIPPED_BYTES: number;
/** UI'ın yükleme (rawimport/upload) isteğinde beklediği süre; yavaş bağlantıda da 200 MB'lık paketin yüklenmesine yetmeli. */
export declare const RAW_IMPORT_REQUEST_TIMEOUT_MS: number;
/** API: bu süre boyunca paketten hiç veri gelmezse yükleme iptal edilir (yavaş ama ilerleyen yükleme kesilmez). */
export declare const RAW_IMPORT_UPLOAD_IDLE_TIMEOUT_MS: number;
/** API: yüklemenin toplam süre sınırı; UI'ın beklediği süreden biraz uzun, önce UI kendi mesajını gösterir. */
export declare const RAW_IMPORT_UPLOAD_MAX_DURATION_MS: number;
/** Hedefte aynı ID'li kayıt varsa import'un ne yapacağı: reject hiçbir şey yazmadan durur, skip o kayıtları atlayıp devam eder. */
export type RawImportConflictPolicy = "reject" | "skip";
/** Multipart parça adları. Sıra önemlidir: önce organizationId, sonra conflictPolicy, en son package. */
export declare const RawImportParts: {
    readonly organizationId: "organizationId";
    readonly conflictPolicy: "conflictPolicy";
    readonly package: "package";
};
export type RawImportBlockerCode = "notRawPackage" | "unsupportedFormatVersion" | "corruptPackage" | "appNameTaken" | "unknownModelType" | "storageNotConfigured" | "sourceOrganizationHere" | "packageTooLarge";
export type RawImportNoticeCode = "historyNotIncluded" | "globalModulesDemoted" | "checkoutsCleared" | "appEnvironmentFieldsDropped";
export type RawImportWarningCode = "missingBodies" | "moduleImportedHere" | "missingModule" | "missingModuleVersion" | "missingReferenceTargets" | "deletedAtSource" | "newerSourceVersion";
/** Kontrolün bulduğu bir durum. items boşsa alan yazılmaz; job kaydında en fazla RAW_IMPORT_STORED_LIST_LIMIT öğe ve sonda "… and N more" tutar. */
export interface IRawImportIssue<TCode extends string = string> {
    code: TCode;
    /** Kullanıcıya gösterilen İngilizce açıklama. */
    message: string;
    items?: Array<string>;
}
export interface IRawImportSummary {
    source: IRawExportManifest["source"];
    createdAt: string;
    exporterVersion: string;
    includeHistory: boolean;
    counts: IRawExportManifest["counts"];
    /** Paketteki uygulama (aynı ID ile) hedefte zaten var mı. */
    targetAppExists: boolean;
}
/** Paketteki db koleksiyonları; kontrol, migration ve yazma bu sırayla gezer. */
export declare const RAW_IMPORT_COLLECTIONS: ReadonlyArray<RawExportCollection>;
/** Migration'ların pakette silip eklediği: koleksiyon başına kayıt ve klasör başına body dosyası. Sıfırlar yazılmaz. */
export type RawImportRemovedCounts = Partial<Record<RawExportCollection | "modelBodies" | "historyBodies", number>>;
/** Çalışan bir migration'ın sonucu: değişen kayıt ve body sayısı, silinenler ve eklenenler. */
export interface IRawImportMigrationResult {
    version: string;
    /** Sürüm içindeki ad (örn. "001-delete-orphaned-model-infos"); yeni sonuçlarda hep vardır, eski job sonuçlarında yoktur. */
    id?: string;
    description: string;
    records: number;
    bodies: number;
    /** Yalnızca bir şey silindiyse. */
    removed?: RawImportRemovedCounts;
    /** Yalnızca bir şey eklendiyse (eklenen kayıtlar ve kopyalanan body dosyaları). */
    added?: RawImportRemovedCounts;
    durationMs: number;
}
/** Ön analizin (kontrolün) sonucu. Çakışan kayıtların listesi saklanmaz; durma sebebi IRawImportStop'ta, atlananların sayısı apply raporundadır. */
export interface IRawImportCheckResult {
    /** Paket raw export paketi olarak okunamazsa yoktur. */
    summary?: IRawImportSummary;
    blockers: Array<IRawImportIssue<RawImportBlockerCode>>;
    notices: Array<IRawImportIssue<RawImportNoticeCode>>;
    warnings: Array<IRawImportIssue<RawImportWarningCode>>;
    /** Paket migrate edildiyse, sırayla çalışan migration'lar. */
    migrations?: Array<IRawImportMigrationResult>;
}
export interface IRawImportApplyOptions {
    /** Reject (ya da verilmezse): hedefte aynı ID'li kayıt varsa hiçbir şey yazılmaz. Skip: o kayıtlar atlanır. */
    conflictPolicy?: RawImportConflictPolicy;
    /** Migration'ların paketten sildikleri; yazmadan önceki analiz manifest sayılarından bunları düşer. */
    removedByMigrations?: RawImportRemovedCounts;
    /** Migration'ların pakete ekledikleri; yazmadan önceki analiz manifest sayılarına bunları ekler. */
    addedByMigrations?: RawImportRemovedCounts;
}
export interface IRawImportModuleRelation {
    moduleID: string;
    name: string;
    importedVersion?: string;
}
/** Hedefte zaten olduğu için yazılmayan paket kaydı; kullanıcıya ne atlandığını anlatmak için. */
export interface IRawImportSkippedRecord {
    collection: RawExportCollection;
    ID: string;
    name?: string;
    /** Model ve history kayıtlarının klasör yolu. */
    path?: string;
    /** History ve modül sürümü kayıtlarında. */
    version?: string;
    /** Kaydın paketteki sahibi: uygulama ya da modül adı. */
    ownerName?: string;
}
export interface IRawImportApplyResult {
    application: {
        id: string;
        name: string;
    };
    /** Paketin export edildiği ortam, org ve app; import'un kaynağı job kaydında tutulur (importId ile eşleşir). */
    source: IRawExportManifest["source"];
    inserted: Record<RawExportCollection, number>;
    skipped: Record<RawExportCollection, number>;
    /** İçeriği export sırasında bulunamadığı için hiç yazılmayan kayıtların sayısı (yalnızca böyle kayıt varsa); inserted ve skipped'e girmez. */
    notImported?: Record<RawExportCollection, number>;
    /** Atlanan kayıtlar (yalnızca atlanan varsa); job kaydında ilk RAW_IMPORT_STORED_LIST_LIMIT tanesi tutulur, toplam `skipped`tadır. */
    skippedRecords?: Array<IRawImportSkippedRecord>;
    bodies: number;
    moduleRelations: Array<IRawImportModuleRelation>;
    notices: IRawImportCheckResult["notices"];
    warnings: IRawImportCheckResult["warnings"];
    durationMs: number;
    /** Paket migrate edildiyse, sırayla çalışan migration'lar. */
    migrations?: Array<IRawImportMigrationResult>;
}
/** Yüklenen zip'in container'ı; zip org storage'ında imports/<importId>.zip olarak durur. */
export declare const RAW_IMPORT_CONTAINER = "imports";
export declare function rawImportZipPath(importId: string): string;
/** jobs'un work root'u altındaki import klasörü: <workRoot>/raw_imports/<jobID>/. */
export declare const RAW_IMPORT_WORK_FOLDER = "raw_imports";
/** Job adımları: paket indirilir, kontrol edilir (engel ya da Reject'te çakışma varsa burada durur), gerekiyorsa migrate edilir (yoksa adım atlanır), sonra yazılır. */
export declare const RAW_IMPORT_STEPS: {
    readonly download: "Download Package";
    readonly check: "Check Package";
    readonly migrate: "Migrate Package";
    readonly apply: "Import Package";
};
/** Bu süreden uzun "waiting" ya da "running" kalan rawImport job'u takılmış sayılır ve süpürücü onu bitirir (createDate'inden). */
export declare const RAW_IMPORT_STALE_RUNNING_MS: number;
/** Import sekmesinde listelenen son import sayısı. */
export declare const RAW_IMPORT_LIST_LIMIT = 10;
/** Job kaydına yazılan sorun öğeleri listelerinin üst sınırı (kayıt 16 MB'a yaklaşmasın, her yenileme küçük kalsın). */
export declare const RAW_IMPORT_STORED_LIST_LIMIT = 200;
/** Süpürücünün sonucu kaydedilmeden takılan job'a yazdığı hata (job kendi hatasını yazdıysa o kalır). */
export declare const RAW_IMPORT_INTERRUPTED_ERROR = "interrupted";
/** Import'un durumu (spec §4); durumu deriveRawImportState türetir. stopped: kontrol durdurdu, hiçbir şey yazılmadı. failed: beklenmeyen hata. */
export type RawImportState = "waiting" | "running" | "done" | "stopped" | "failed";
/** Org'da aynı anda bu durumlardan yalnızca birinde tek import olabilir. */
export declare const RAW_IMPORT_ACTIVE_STATES: ReadonlyArray<RawImportState>;
/** Kontrol import'u yazmadan durdurdu: engel ya da (Reject'te) hedefte aynı ID'li kayıt. */
export interface IRawImportStop {
    reason: "blockers" | "conflicts";
    /** Kullanıcıya gösterilen İngilizce açıklama; çakışmada ilk bulunan kaydı yazar. */
    message: string;
}
/**
 * Jobs kaydındaki rawImport alanı. check/stopped/apply/error'u jobs yazar; sonucu ve hatası olmadan takılan job'un error'unu süpürücü
 * yazar. Kontrol durdurduysa job failed biter ve stopped yazılır.
 */
export interface IRawImportJobRecord {
    check?: IRawImportCheckResult;
    stopped?: IRawImportStop;
    apply?: IRawImportApplyResult;
    error?: string;
}
/** Bir import'un tek job'u; jobID = importId. type, AllJobDataTypes'taki diğer job data'larla uyum için (kod job.jobData.type okuyor). */
export interface IRawImportJobData {
    type: "rawImport";
    importId: string;
    fileName: string;
    size: number;
    conflictPolicy: RawImportConflictPolicy;
}
/** Eski akışın (check + apply job'ları) verileri: yalnızca eski kayıtları listelemek ve kuyrukta kalanı reddetmek için. */
export interface IRawImportLegacyCheckJobData {
    type: "rawImport";
    mode: "check";
    importId: string;
    fileName: string;
    size: number;
}
export interface IRawImportLegacyApplyJobData {
    type: "rawImport";
    mode: "apply";
    importId: string;
    conflictPolicy?: "skip";
}
export type RawImportJobData = IRawImportJobData | IRawImportLegacyCheckJobData | IRawImportLegacyApplyJobData;
export declare function isLegacyRawImportJobData(data: RawImportJobData): data is IRawImportLegacyCheckJobData | IRawImportLegacyApplyJobData;
/** Kuyrukta kalmış eski biçimli job'a yazılan hata. */
export declare const RAW_IMPORT_LEGACY_JOB_ERROR = "This import was created by an earlier version of Studio. Upload the package again.";
export interface IRawImportStep {
    name: string;
    status: StatusType;
    startTime?: Date;
    timeElapsed?: number;
}
export interface IRawImportJobView {
    jobID: string;
    status: StatusType;
    createDate: Date;
    createdBy: string;
    steps: Array<IRawImportStep>;
}
/** rawimport/list'in bir satırı. Eski kayıtlarda job eski check job'udur; varsa apply job'u legacyApply'dadır. */
export interface IRawImportListItem {
    importId: string;
    fileName: string;
    size: number;
    state: RawImportState;
    createDate: Date;
    createdBy: string;
    conflictPolicy?: RawImportConflictPolicy;
    job: IRawImportJobView;
    legacyApply?: IRawImportJobView;
    checkResult?: IRawImportCheckResult;
    stopped?: IRawImportStop;
    applyResult?: IRawImportApplyResult;
    /** Yeni satırlarda job'un hatası; eski satırlarda varsa eski apply job'unun hatası, yoksa check job'unun hatası. */
    error?: string;
}
export interface IRawImportOrganizationRequest {
    organizationId: string;
}
export interface IRawImportListResponse {
    imports: Array<IRawImportListItem>;
}
export interface IRawImportUploadResponse {
    importId: string;
}
//# sourceMappingURL=rawImport.d.ts.map