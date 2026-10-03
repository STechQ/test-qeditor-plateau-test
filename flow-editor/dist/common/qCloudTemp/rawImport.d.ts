import { StatusType } from "./exporter";
import { IRawExportManifest, RawExportCollection } from "./rawExport";
/**
 * Raw export paketinin (rawExport.ts) import sözleşmesi. Import jobs'ta çalışır (spec §4): UI zip'i rawimport/upload'a yükler, API zip'i
 * org storage'ına (imports/<importId>.zip) yazar ve bir check job'u açar; kullanıcının kararıyla aynı zip üzerinden apply job'u çalışır.
 * Sonuçlar Jobs kayıtlarının rawImport alanında durur.
 */
/** Import'un okuyabildiği paket formatı sürümleri (IRawExportManifest.formatVersion). */
export declare const RAW_IMPORT_SUPPORTED_FORMAT_VERSIONS: ReadonlyArray<number>;
/** Yüklenen (sıkıştırılmış) paketin üst sınırı. */
export declare const RAW_IMPORT_MAX_PACKAGE_BYTES: number;
/** Zip içindeki tek bir dosyanın açılmış boyutunun üst sınırı (zip bombasına karşı). */
export declare const RAW_IMPORT_MAX_ENTRY_BYTES: number;
/** Zip içindeki tüm dosyaların açılmış boyutları toplamının üst sınırı (zip bombasına karşı). */
export declare const RAW_IMPORT_MAX_UNZIPPED_BYTES: number;
/** UI'ın yükleme (rawimport/upload) isteğinde beklediği süre; 200 MB'lık paketin yüklenmesine yetmeli. */
export declare const RAW_IMPORT_REQUEST_TIMEOUT_MS: number;
/** Multipart parça adları. Sıra önemlidir: önce organizationId, en son package. */
export declare const RawImportParts: {
    readonly organizationId: "organizationId";
    readonly package: "package";
};
export type RawImportBlockerCode = "notRawPackage" | "unsupportedFormatVersion" | "missingBodies" | "corruptPackage" | "appNameTaken" | "unknownModelType" | "storageNotConfigured" | "sourceOrganizationHere" | "packageTooLarge";
export type RawImportNoticeCode = "historyNotIncluded" | "globalModulesDemoted" | "checkoutsCleared" | "appEnvironmentFieldsDropped";
export type RawImportWarningCode = "missingModule" | "missingModuleVersion" | "missingReferenceTargets" | "deletedAtSource" | "newerSourceVersion";
/** Kontrolün bulduğu bir durum. items boşsa alan yazılmaz; job kaydında en fazla RAW_IMPORT_STORED_LIST_LIMIT öğe ve sonda "… and N more" tutar. */
export interface IRawImportIssue<TCode extends string = string> {
    code: TCode;
    /** Kullanıcıya gösterilen İngilizce açıklama. */
    message: string;
    items?: Array<string>;
}
/** Hedefte aynı ID ile duran kayıt. sameOwner false ise kayıt hedefte başka bir öğeye (uygulama ya da modül) ait. */
export interface IRawImportConflict {
    collection: RawExportCollection;
    ID: string;
    name?: string;
    version?: string;
    sameOwner: boolean;
}
/** Çakışan kayıtlar için karar. Şimdilik yalnızca "skip"; ileride "override" ve kayıt bazında seçim eklenecek. */
export type RawImportConflictPolicy = "skip";
export interface IRawImportSummary {
    source: IRawExportManifest["source"];
    createdAt: string;
    exporterVersion: string;
    includeHistory: boolean;
    counts: IRawExportManifest["counts"];
    /** Paketteki uygulama (aynı ID ile) hedefte zaten var mı. */
    targetAppExists: boolean;
}
/** Çalışan bir migration'ın sonucu: değişen kayıt ve body sayısı. */
export interface IRawImportMigrationResult {
    version: string;
    description: string;
    records: number;
    bodies: number;
    durationMs: number;
}
export interface IRawImportCheckResult {
    /** Paket raw export paketi olarak okunamazsa yoktur. */
    summary?: IRawImportSummary;
    blockers: Array<IRawImportIssue<RawImportBlockerCode>>;
    notices: Array<IRawImportIssue<RawImportNoticeCode>>;
    warnings: Array<IRawImportIssue<RawImportWarningCode>>;
    conflicts: Array<IRawImportConflict>;
    /** Saklanan sonuç kısaltıldıysa çakışmaların toplamı ve koleksiyon bazında sayıları; conflicts yalnızca ilk kayıtları tutar. */
    conflictTotals?: {
        total: number;
        byCollection: Partial<Record<RawExportCollection, number>>;
    };
    /** Paket migrate edildiyse, sırayla çalışan migration'lar. */
    migrations?: Array<IRawImportMigrationResult>;
}
export interface IRawImportApplyOptions {
    /** Çakışma varsa zorunlu. */
    conflictPolicy?: RawImportConflictPolicy;
}
export interface IRawImportModuleRelation {
    moduleID: string;
    name: string;
    importedVersion?: string;
}
export interface IRawImportApplyResult {
    application: {
        id: string;
        name: string;
    };
    /** Paketin export edildiği ortam, org ve app (audit log'u "kimin, hangi kaynaktan, neyi" import ettiğini yazar). */
    source: IRawExportManifest["source"];
    inserted: Record<RawExportCollection, number>;
    skipped: Record<RawExportCollection, number>;
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
/** Job adımları: paket indirilir, gerekiyorsa migrate edilir (yoksa adım atlanır), sonra check ya da apply. */
export declare const RAW_IMPORT_STEPS: {
    readonly download: "Download Package";
    readonly migrate: "Migrate Package";
    readonly check: "Check Package";
    readonly apply: "Import Package";
};
/** Kontrolü biten import'un karar beklediği süre (check job'unun createDate'inden). */
export declare const RAW_IMPORT_DECISION_TTL_MS: number;
/** Bu süreden uzun "waiting" ya da "running" kalan rawImport job'u takılmış sayılır ve süpürücü onu bitirir (createDate'inden). */
export declare const RAW_IMPORT_STALE_RUNNING_MS: number;
/** Import sekmesinde listelenen son import sayısı. */
export declare const RAW_IMPORT_LIST_LIMIT = 10;
/** Job kaydına yazılan çakışma listesi ve sorun öğeleri listelerinin üst sınırı (kayıt 16 MB'a yaklaşmasın, her yenileme küçük kalsın). */
export declare const RAW_IMPORT_STORED_LIST_LIMIT = 200;
/** Süpürücünün sonucu kaydedilmeden takılan job'a yazdığı hata (job kendi hatasını yazdıysa o kalır). */
export declare const RAW_IMPORT_INTERRUPTED_ERROR = "interrupted";
export type RawImportMode = "check" | "apply";
export type RawImportState = "checking" | "checkFailed" | "blocked" | "awaitingDecision" | "rejected" | "expired" | "importing" | "done" | "importFailed";
/** Org'da aynı anda bu durumlardan yalnızca birinde tek import olabilir. */
export declare const RAW_IMPORT_ACTIVE_STATES: ReadonlyArray<RawImportState>;
export interface IRawImportDecision {
    value: "apply" | "reject" | "expired";
    /** Kararı veren kullanıcının e-postası; süpürücünün "expired" kararında yoktur. */
    by?: string;
    date: Date;
}
/**
 * Jobs kaydındaki rawImport alanı. check/apply/error'u jobs yazar; sonucu ve hatası olmadan takılan job'un error'unu süpürücü yazar.
 * decision'ı (yalnızca check job'unda) API ya da süpürücü yazar.
 */
export interface IRawImportJobRecord {
    check?: IRawImportCheckResult;
    apply?: IRawImportApplyResult;
    error?: string;
    decision?: IRawImportDecision;
}
/** type, AllJobDataTypes'taki diğer job data'larla uyum için (kod job.jobData.type okuyor). */
export interface IRawImportCheckJobData {
    type: "rawImport";
    mode: "check";
    importId: string;
    fileName: string;
    size: number;
}
export interface IRawImportApplyJobData {
    type: "rawImport";
    mode: "apply";
    importId: string;
    conflictPolicy?: RawImportConflictPolicy;
}
export type RawImportJobData = IRawImportCheckJobData | IRawImportApplyJobData;
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
/** rawimport/list'in bir satırı: check ve (varsa) apply job'u, türetilmiş durum ve sonuçlar. */
export interface IRawImportListItem {
    importId: string;
    fileName: string;
    size: number;
    state: RawImportState;
    createDate: Date;
    createdBy: string;
    check: IRawImportJobView;
    apply?: IRawImportJobView & {
        conflictPolicy?: RawImportConflictPolicy;
    };
    checkResult?: IRawImportCheckResult;
    applyResult?: IRawImportApplyResult;
    /** Apply job'u varsa onun, yoksa check job'unun hatası. */
    error?: string;
    decision?: IRawImportDecision;
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
export interface IRawImportApplyRequest extends IRawImportOrganizationRequest {
    importId: string;
    /** Çakışma varsa zorunlu. */
    conflictPolicy?: RawImportConflictPolicy;
}
export interface IRawImportApplyResponse {
    jobID: string;
}
export interface IRawImportRejectRequest extends IRawImportOrganizationRequest {
    importId: string;
}
//# sourceMappingURL=rawImport.d.ts.map