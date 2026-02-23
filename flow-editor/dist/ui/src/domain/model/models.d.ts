import { IPromiseData } from "@stechquick/algae/lib/helpers/createPromiseData";
import { IAppCloud } from "../../../../common/qCloudTemp/application";
import { IUserMainInfo, IUser_SUSI } from "../../../../common/qCloudTemp/authentication";
import { IRole } from "../../../../common/qCloudTemp/authorization";
import { IArtifactInfoDBItem, IArtifactMinioDetails, IQcloudJob } from "../../../../common/qCloudTemp/exporter";
import { IOrganization } from "../../../../common/qCloudTemp/membership";
import { ExtensionType, IApplicationLogoInfo, IEntityDesignerAddtionals, IModelBodyObject, IModelInfo, IModuleOwnerOrgInfo, IModuleRelatedApplicationItem, IModuleRelatedModelItem, IProcessWizardAdditionals, IQJsonAdditionals, ITreeviewItem, ModelAdditionals, ModuleShareType, ObjectID, UsageType } from "../../../../common/qCloudTemp/quickCloud";
import { ICopyApp, IGetOrganizaionGroupDetailsByUserTypeResponse, IListInvitationsResponseItem, ISignInResponse, IUpdateMobileUsage } from "../../../../common/qCloudTemp/symDtoObjects";
import { IUserPreferences } from "../../../../common/qCloudTemp/userPreference";
import { ICloudObject, IObject } from "./IObject";
import { IStudioUIModelBase, ModelType } from "../../../../common/everything/studio/ui/IStudioUIModelBase";
import { ITagValue } from "../../../../common/qCloudTemp/tags";
import { IModelOrigInfo, IModuleOrigInfo } from "../../../../common/qCloudTemp/applicationCopy";
export type QJsonType = "qjson" | "template" | "pageTemplate" | "quickComponent";
export type IItemType = ModelType | IModule["objectType"] | IApplication["objectType"];
export interface IModelModifyInfo {
    state?: boolean;
    model?: boolean;
}
interface IModelCtorInitials {
    ID: IModel["ID"];
    name: IModel["name"];
    synced: IModel["synced"];
    owner: IModel["owner"];
    modelType: IModel["modelType"];
    createdBy?: IModel["createdBy"];
    createDate?: IModel["createDate"];
    updateDate?: IModel["updateDate"];
    updatedBy?: IModel["updatedBy"];
    extension?: IModel["extension"];
    usageType?: IModel["usageType"];
    additionals?: IModel["additionals"];
    key?: IModel["key"];
    migrated?: IModel["migrated"];
    modified: IModel["modified"];
    state?: IModel["state"];
    checkedOut?: IModel["checkedOut"];
    checkoutInfo?: IModel["checkoutInfo"];
    version?: IModel["version"];
    size?: IModel["size"];
    isUnmodifiable?: IModel["isUnmodifiable"];
    isUnmodifiableFileType?: IModel["isUnmodifiableFileType"];
    dependentModels?: IModel["dependentModels"];
    path: IModel["path"];
    modelBody?: IModel["modelBody"];
    overridden?: IModel['overridden'];
    overriddenModel?: IModel['overriddenModel'];
    history?: IModel["history"];
    selectedHistoryVersion?: IModel["selectedHistoryVersion"];
    origInfo?: IModel["origInfo"];
}
export interface ISetModelBodyOptions {
    time?: Date | "skip";
    overrideOriginal?: boolean;
    setModelModifyState?: boolean;
}
declare const modelProtection = "i promise, i will call this function via IModelUseCase, not directly";
export declare class Model implements IModel, IStudioUIModelBase {
    objectType: "model";
    ID: IModel["ID"];
    name: IModel["name"];
    synced: IModel["synced"];
    owner: IModel["owner"];
    modelType: IModel["modelType"];
    path: IModel["path"];
    createdBy?: IModel["createdBy"];
    createDate?: IModel["createDate"];
    updateDate?: IModel["updateDate"];
    updatedBy?: IModel["updatedBy"];
    extension?: IModel["extension"];
    usageType?: IModel["usageType"];
    additionals?: IModel["additionals"];
    modified: IModel["modified"];
    state?: IModel["state"];
    checkedOut?: IModel["checkedOut"];
    checkoutInfo?: IModel["checkoutInfo"];
    version?: IModel["version"];
    size?: IModel["size"];
    isUnmodifiable?: IModel["isUnmodifiable"];
    isUnmodifiableFileType?: IModel["isUnmodifiableFileType"];
    dependentModels?: IModel["dependentModels"];
    overridden?: IModel["overridden"];
    overriddenModel: IModel["overriddenModel"];
    history?: IModel["history"];
    selectedHistoryVersion?: IModel["selectedHistoryVersion"];
    key: IModel["key"];
    migrated?: IModel["migrated"];
    origInfo?: IModel["origInfo"];
    constructor(initials: IModelCtorInitials);
    copyFrom(model: IModel): void;
    private ctor;
    private _modelBodyOriginal?;
    get modelBodyOriginal(): IModelBodyObject[] | undefined;
    private _cacheInfo?;
    get cacheInfo(): IModelCacheInfoResolved | IModelCacheInfoResolving | undefined;
    private _queueInfo?;
    get isQueued(): boolean;
    get isUnmodifiableTotal(): boolean | undefined;
    private _modelBody?;
    get modelBody(): IModel["modelBody"];
    setModelBody(value: NonNullable<IModel["modelBody"]>, { time, overrideOriginal, setModelModifyState }: ISetModelBodyOptions, protection: typeof modelProtection): void;
    setModelBodyOriginal(value: NonNullable<IModel["modelBody"]>, protection: typeof modelProtection): void;
    notModifiableByOthers(): boolean;
    revertModelBody(protection: typeof modelProtection): boolean;
    onPrepareModelBodyRetrieve(): void;
    onDiscardModelBodyRetrieve(): void;
    onBeforeModelBodyRetrieve(): void;
    onAfterModelBodyRetrieve(): void;
    onFailModelBodyRetrieve(err: Error): void;
}
export interface IFolder {
    ID: IObject["ID"];
    objectType: "folder";
    name: IObject["name"];
    path: string;
    owner: IApplication | IModule;
}
export interface IModelCacheInfoResolved {
    type: "resolved";
    time: Date;
}
export interface IModelCacheInfoResolving {
    type: "resolving";
    promData: IPromiseData<IModel>;
}
export interface IModel extends IObject, IStudioUIModelBase {
    revertModelBody(protection: typeof modelProtection): boolean;
    onPrepareModelBodyRetrieve(): void;
    onDiscardModelBodyRetrieve(): void;
    onAfterModelBodyRetrieve(): void;
    onBeforeModelBodyRetrieve(): void;
    onFailModelBodyRetrieve(err: Error): void;
    setModelBody(value: NonNullable<IModel["modelBody"]>, options: ISetModelBodyOptions, protection: typeof modelProtection): void;
    setModelBodyOriginal(value: NonNullable<IModel["modelBody"]>, protection: typeof modelProtection): void;
    copyFrom(model: IModel): void;
    notModifiableByOthers(): boolean;
    objectType: "model";
    owner: IApplication | IModule;
    readonly modelBody?: Array<IModelBodyObject>;
    readonly modelBodyOriginal?: Array<IModelBodyObject>;
    readonly cacheInfo?: IModelCacheInfoResolved | IModelCacheInfoResolving;
    readonly isQueued: boolean;
    extension?: ExtensionType;
    usageType?: ITreeviewItem["usageType"];
    additionals?: ModelAdditionals;
    key?: string;
    migrated?: boolean;
    sourceLink?: IModelLink;
    modified: IModelModifyInfo;
    state?: any;
    checkedOut?: boolean;
    checkoutInfo?: ICheckoutInfo;
    version?: string;
    size?: number;
    isUnmodifiable?: boolean;
    isUnmodifiableFileType?: boolean;
    isUnmodifiableTotal?: boolean;
    dependentModels?: IModelInfo["dependentModels"];
    overridden?: boolean;
    overriddenModel: IModelInfo["overriddenModel"];
    history?: ITreeviewItem["history"];
    selectedHistoryVersion?: string;
    origInfo?: IModelOrigInfo;
}
export interface IModelLink {
    model: IModel;
    sourceType: "store" | "module";
}
export interface ICheckoutInfo {
    user: IUserMainInfo;
    date: NonNullable<IModelCheckout["date"]>;
}
export interface IModule extends IObject {
    objectType: "module";
    description?: string;
    prefix?: string;
    owner: IApplication;
    children: Array<IModel>;
    relatedApplications: Array<IModuleRelatedApplicationItem>;
    mainOwner?: IApplication["ID"];
    shareType?: ModuleShareType;
    currentVersion?: string;
    relatedModelHistories?: IModuleVersion["relatedModelHistories"];
    lastReleasedVersion?: string;
    ownerOrg?: IModuleOwnerOrgInfo;
    origInfo?: IModuleOrigInfo;
    modifyDate?: Date;
}
export interface IGetModuleResponse extends IModule {
    versionID?: IModuleVersion["ID"];
    version?: IModuleVersion["version"];
    relatedModelHistories?: IModuleVersion["relatedModelHistories"];
}
export interface IModuleVersion extends ICloudObject {
    moduleID: ObjectID;
    version: string;
    relatedApplications?: Array<IModuleRelatedApplicationItem>;
    relatedModelHistories: Array<IModuleRelatedModelItem>;
    description?: string;
}
export interface IApplicationDetails {
    moduleCount: number;
    pageCount: number;
    pageTemplateCount: number;
    templateCount: number;
    processCount: number;
    entityCount: number;
}
export interface IUploadedFile {
    name: string;
    content: string;
}
export interface IApplication extends IObject {
    objectType: "application";
    publishmentId?: string;
    logoInfo?: IApplicationLogoInfo;
    color?: string;
    description?: string;
    details?: IApplicationDetails;
    cloud?: IAppCloud;
    mobileUsage?: IUpdateMobileUsage;
    lastReleasedVersion?: string;
    modifyDate?: Date;
    firstPublishDate?: Date;
    lastPublishDate?: Date;
    tags?: Array<ITagValue>;
    copyApp?: ICopyApp;
}
export interface IApplicationExtended extends IApplication {
    uiPageCalc: {
        count: number;
        size: number;
        noSharedModuleCount?: number;
        noSharedModuleSize?: number;
        estimatedTempCount?: number;
        estimatedTempSize?: number;
    };
    organizationName?: string;
    licensed?: boolean;
    oldTags?: string[];
}
export interface ILoggedInUser {
    userId: string;
    authorization?: string;
    email: string;
    name?: string;
    lastName?: string;
    role?: string;
    organizations: ISignInResponse["organizations"];
    organizationGroups?: ISignInResponse["organizationGroups"];
    selectedOrganization?: IOrganization;
    selectedOrganizationGroup?: IGetOrganizaionGroupDetailsByUserTypeResponse;
    isSystemUser?: boolean;
    invitations: Array<IListInvitationsResponseItem & {
        organizationName: string;
    }>;
    preferences?: {
        emailConsent: IUserPreferences["emailConsent"];
    };
    userRoles?: Array<IRole>;
    standAloneInfo?: IUser_SUSI["standAloneInfo"];
    mobileUsage?: IUser_SUSI["mobileUsage"];
}
export type ModuleType = "basic";
export interface IModelVersionItem {
    text: string;
    value: string;
}
export interface IModelVersion {
    modelID: string;
    version: string;
    type: ModelType;
    path: string;
}
export interface IAppVersion extends ICloudObject {
    appID: string;
    version: string;
    description?: string;
    models: Array<IModelVersion>;
}
export interface IExportViewItem {
    id: string;
    parentId?: string;
    name: string;
    usageType?: UsageType;
    modelType?: string;
    priority: number;
    shortName?: string;
    modelAdditionals?: IQJsonAdditionals | IProcessWizardAdditionals | IEntityDesignerAddtionals;
    children?: Array<IExportViewItem>;
    isSelected?: boolean;
    versions?: Array<IModelVersionItem>;
    selectedVersion?: string;
    type: IItemType;
    size?: number;
    key?: string;
}
export type StatusType = "waiting" | "running" | "success" | "failed" | "skipped";
export interface IExportJobItem extends IQcloudJob {
    objectType: "exportjobItem";
    status: StatusType;
    grabbed: boolean;
    synced: boolean;
    steps?: Array<IExportJobStepItem>;
    artifacts?: Array<IExportJobArtifactInfoItem>;
}
export interface IExportJobStepItem {
    objectType: "exportjobStepItem";
    ID: string;
    jobID: string;
    name: string;
    startTime?: string;
    timeElapsed?: number;
    logs?: Array<string>;
    status: StatusType;
}
export interface IExportJobArtifactInfoItem {
    objectType: "exportjobArtifactInfoItem";
    ID: string;
    name: string;
    type: IArtifactInfoDBItem["type"];
    source: "minio";
    details: IArtifactMinioDetails;
}
export type ModelHistoryType = "update" | "delete" | "checkin" | "publish" | "ownerItemDelete" | "fix";
export interface IModelCheckout {
    user: string;
    date: Date;
}
export interface IModelHistoryInfo extends ICloudObject {
    modelID: string;
    historyType: ModelHistoryType;
    version?: string;
    shortComment?: string;
    comment?: string;
    ownerItem: string;
    ownerType: "application" | "module" | "model";
    modelType: ModelType;
    modelAdditionals: IQJsonAdditionals | IProcessWizardAdditionals | IEntityDesignerAddtionals;
    checkouts?: Array<IModelCheckout>;
    usageType?: UsageType;
    dependentModels?: IModelInfo["dependentModels"];
}
export interface IExtendedModuleItem extends IModule {
    ownerApp?: string;
    relatedAppNames?: string;
}
export interface IWorkflowExportItem {
    ID: string;
    version: string;
}
export {};
//# sourceMappingURL=models.d.ts.map