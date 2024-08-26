import { ObjectID } from "../everything/dataType/runtimemodels/types";
import { IOrganization, IOrganizationFeatures, IEditorTypes, IOrganizationCloud } from "./membership";
import { IAppCloud } from "./application";
import { ContentType, ModelType } from "../everything/studio/ui/IStudioUIModelBase";
export declare const DEPENDED_MODEL_KEYS: string[];
export declare const DEPENDED_IMAGE_KEYS: string[];
export declare const APP_ITEM_CONTENT_TYPES: string[];
export { ObjectID };
export type AuthenticationType = "QCLOUDAUTH" | "ADFS";
export type ModelHistoryType = "update" | "delete" | "checkin" | "publish" | "ownerItemDelete";
export type DomainObjectType = "domain";
export type OrgGroupObjectType = "orgGroup";
export type ApplicationObjectType = "application";
export type ModuleObjectType = "module";
export type FolderObjectType = "folder";
export type ModelObjectType = "model";
export type AppSettingsObjectType = "appSettings";
export type AppAssetObjectType = "appAssetList";
export type QJsonType = "qjson" | "template" | "pageTemplate" | "quickComponent";
export type ModelResponseType = "info" | "body" | "full";
export type UsageType = AppSettingsObjectType | AppAssetObjectType;
export type ModuleType = "basic";
export type AllCreateObjectTypes = ModelType | FolderObjectType | ModuleObjectType;
export type AppSettingsModelKeys = "settings" | "componentList" | "containerServices" | "pipeline" | "alert" | "loading" | "globalLocalization" | "localProxy" | "style" | "rootqjson" | "asset" | "appSettings";
export type ExtensionType = "png" | "jpg" | "jpeg" | "svg" | "gif" | "json" | "woff" | "woff2" | "ttf" | "otf";
export type ModuleShareType = 'reference' | 'version';
export declare const UISettingsType: {
    readonly alert: "Alert Component";
    readonly pipeline: "Pipeline";
    readonly loading: "Loading Component";
    readonly settings: "Settings File";
    readonly localProxy: "Local Proxy File";
    readonly contSvc: "Container Services File";
    readonly css: "Style File";
    readonly compList: "Component List";
    readonly globalLocalization: "Global Localization";
    readonly assetList: "Asset List";
    readonly appSettings: "App Settings";
};
export type UISettingsType = typeof UISettingsType[keyof typeof UISettingsType];
export interface ICloudObject {
    ID: ObjectID;
    name: string;
    ownerUser: ObjectID;
    createDate: Date;
    createdBy: ObjectID;
    updateDate?: Date;
    updatedBy?: ObjectID;
    isPermanent?: boolean;
    priority?: number;
}
export interface IMicroserviceDefinition {
    name: string;
    version: string;
}
export interface IApplicationDetails {
    moduleCount: number;
    pageCount: number;
    pageTemplateCount: number;
    templateCount: number;
    processCount: number;
    entityCount: number;
    uiSettingsCount: number;
}
export interface IApplicationExportSettings {
    selectedType: "download" | "fileSystem";
}
export interface IApplicationLogoInfo {
    hostUrl: string;
    path: string;
    updateDate: Date;
}
export interface IApplication extends ICloudObject {
    /**
     * This is the RESERVED ID which should be used for publishments.
     */
    publishmentId?: ObjectID;
    objectType: ApplicationObjectType;
    logoInfo?: IApplicationLogoInfo;
    color?: string;
    description?: string;
    store?: {
        productID: ObjectID;
        productVerID: ObjectID;
    };
    cloud?: IAppCloud;
    exportSettings?: IApplicationExportSettings;
    modifyDate?: Date;
    firstPublishDate?: Date;
    lastPublishDate?: Date;
    mobileUsage?: IUpdateMobileUsage;
    lastReleasedVersion?: string;
}
export interface IOrganizationData extends IOrganization {
    showOrgInfo: boolean;
}
export interface IModuleRelatedApplicationItem {
    applicationID: ObjectID;
    importedVersion?: string;
}
export interface IModuleRelatedModelItem {
    modelID: ObjectID;
    version: string;
}
export interface IModuleBackend extends ICloudObject {
    description?: string;
    modifyDate?: Date;
    prefix?: string;
    objectType: ModuleObjectType;
    relatedApplications: Array<IModuleRelatedApplicationItem>;
    moduleType?: ModuleType;
    store?: {
        productID: ObjectID;
        productVerID: ObjectID;
    };
    mainOwner: ObjectID;
    shareType?: ModuleShareType;
    currentVersion?: string;
    lastReleasedVersion?: string;
    applicationID?: string;
    ownerOrg?: {
        orgName: string;
        dbName: string;
        orgId: string;
    };
}
export interface IModuleVersion extends ICloudObject {
    moduleID: ObjectID;
    version: string;
    relatedApplications?: Array<IModuleRelatedApplicationItem>;
    relatedModelHistories: Array<IModuleRelatedModelItem>;
    description?: string;
}
export interface IModelCopyInfo {
    sourceModelID: ObjectID;
    date: Date;
    user: string;
}
export type AllModelAdditionalTypes = IQJsonAdditionals | IProcessWizardAdditionals | IBpmnAdditionals | IEntityDesignerAddtionals | IFlowModelAdditionals | IStepModelAdditionals | IAppSettingsModelAddtionals;
export interface IModelInfo extends ICloudObject {
    /**
     * @summary normal model için ID.
     * @summary versiyonlu modül içindeki versiyonlu model için HistoryID.
     * @remarks modelin ID'si -> modelID.
     */
    ID: ICloudObject["ID"];
    objectType: ModelObjectType;
    ownerItem: ObjectID;
    ownerType: ApplicationObjectType | ModuleObjectType;
    modelType: ModelType;
    extension?: ExtensionType;
    modelAdditionals: AllModelAdditionalTypes;
    key?: AppSettingsModelKeys;
    checkouts?: Array<IModelCheckout>;
    usageType?: UsageType;
    copyFromInfo?: IModelCopyInfo;
    size?: number;
    store?: {
        productVerID?: ObjectID;
        productVerContentID?: ObjectID;
    };
    latestPublishedVer?: string;
    dependentModels?: Array<IDependentModel>;
    path?: string;
    /**
     * @summary normal model için yok.
     * @summary versiyonlu modül içindeki versiyonlu model için var.
     * @remarks çünkü ID -> HistoryID.
     */
    modelID?: string;
    version?: string;
    isUnmodifiable?: boolean;
    overriddenModel?: {
        ID: string;
        version?: string;
    };
}
export interface IModelPackagingInfo extends IModelInfo {
    body: IModelBodyObject;
    moduleName?: string;
    historyId: string;
}
export interface IDependentModel {
    modelId: string;
}
export interface IModelBodyObject {
    key: string;
    model: any;
}
export interface IModelBody extends IModelBodyObject {
    modelID: ObjectID;
    informationId: ObjectID;
    createDate: Date;
    size?: number;
}
export type IModelForWorkflow = {
    type: ModelType;
    modelBody: string;
    modelID: string;
    name: string;
    createDate?: Date;
    updateDate?: number;
    organizationId: string;
    appId: string;
};
export interface IModelCheckout {
    user: string;
    date: Date;
}
export interface IQJsonAdditionals {
    qjsonType: QJsonType;
    image?: string;
    isRootPage?: boolean;
}
export interface IProcessWizardAdditionals {
}
export interface IBpmnAdditionals {
    isAutoGenerated?: boolean;
    isModifiedByUser?: boolean;
}
export interface IEntityDesignerAddtionals {
}
export interface IFlowModelAdditionals {
}
export interface IStepModelAdditionals {
    compatibilities: {
        ui: boolean;
        service: boolean;
    };
}
export interface IAppSettingsModelAddtionals {
}
export type ModelAdditionals = IQJsonAdditionals | IProcessWizardAdditionals | IBpmnAdditionals | IEntityDesignerAddtionals | IAppSettingsModelAddtionals;
export interface IModelHistoryInfo extends ICloudObject, IModelInfo {
    modelID: ObjectID;
    historyType: ModelHistoryType;
    version?: string;
    shortComment?: string;
    comment?: string;
}
export interface ISystemUser extends ICloudObject {
    mailAddress: string;
    loginType: AuthenticationType;
    password?: string;
}
export interface IQCloudLogItem {
    ID?: string;
    detail: any;
    stack?: string;
    state?: {
        app: {
            ID: string;
            name: string;
        };
        openItemIDs?: Array<string>;
        currentItemID?: string;
    };
    level: "debug" | "info" | "log" | "trace" | "warning" | "error";
    type: "business" | "technical";
}
export interface IQCloudLogDBItem extends IQCloudLogItem {
    date: Date;
    user?: {
        ID: ObjectID;
        name?: string;
        email: string;
    };
}
export interface ITenantDefinitions extends ICloudObject {
    value: any;
    isActive: boolean;
    objectType?: AppSettingsObjectType | "deploySettings" | "appTemplate";
    targetObjectType?: ApplicationObjectType | DomainObjectType | OrgGroupObjectType;
    targetObjectIds?: Array<string>;
    contentType?: ContentType;
    description?: string;
    key?: AppSettingsModelKeys;
    additionals?: {
        logo?: string;
    };
}
export type ItemLimitActionType = "deleteOldest" | "stopAdding";
export interface IItemLimitationDetail {
    value: number;
    action?: ItemLimitActionType;
}
export interface IItemLimitations {
    history: {
        maxCountPerModel: IItemLimitationDetail;
        maxCountPerModule: IItemLimitationDetail;
        maxCountPerApplication: IItemLimitationDetail;
        maxCountPerTenant: IItemLimitationDetail;
    };
    model: {
        maxCountPerModule: IItemLimitationDetail;
        maxCountPerApplication: IItemLimitationDetail;
        maxCountPerTenant: IItemLimitationDetail;
    };
    module: {
        maxCountPerApplication: IItemLimitationDetail;
        maxCountPerTenant: IItemLimitationDetail;
    };
    application: {
        maxCountPerTenant: IItemLimitationDetail;
    };
}
export interface IOrganizationActions {
    publish?: {
        targets?: Record<keyof IOrganizationCloud, boolean>;
    };
    entityGenerationDomain?: "softtech" | "isbank";
}
export type ITreeviewItemType = ModelType | "module";
export interface ITreeviewItem {
    id: string;
    history?: {
        id: string;
        modelID: string;
        version: string;
    };
    name: string;
    priority: number;
    type: ITreeviewItemType;
    createDate: Date;
    updateDate?: Date;
    path: string;
    shortName?: string;
    modelAdditionals?: IQJsonAdditionals | IProcessWizardAdditionals | IBpmnAdditionals | IEntityDesignerAddtionals;
    children?: Array<ITreeviewItem>;
    moduleType?: ModuleType;
    usageType?: UsageType;
    checkouts?: Array<IModelCheckout>;
    relatedApplications?: IModuleBackend["relatedApplications"];
    size?: number;
    prefix?: string;
    dependentModels?: Array<IDependentModel>;
    moduleMainOwner?: ObjectID;
    moduleShareType?: ModuleShareType;
    currentModuleVersion?: string;
    currentModelVersion?: string;
    lastReleasedModuleVersion?: string;
    modelID?: string;
    ownerOrg?: {
        orgName: string;
        dbName: string;
        orgId: string;
    };
    overridden?: boolean;
    overriddenModel?: {
        ID: string;
        version?: string;
    };
}
export interface IScreenItem {
    id: string;
    fileName: string;
    ownerItem: string;
}
export interface IApplicationCard extends IApplication {
    moduleCount: number;
    pageCount: number;
    templateCount: number;
}
export interface IPimQJsonOptions {
    qJsonType?: QJsonType;
}
export type GeneratePageType = "create" | "list" | "update";
export interface IIntegration extends ICloudObject {
    theme: string;
    settings: {
        engine: {
            version: string;
            babel: boolean;
            embedded: boolean;
            multitab: boolean;
            plugins: Array<{
                Native: [
                    {
                        name: string;
                        text: string;
                        dependencies: Array<string>;
                        enabled: boolean;
                    }
                ];
                Quick: [
                    {
                        name: string;
                        text: string;
                        dependencies: Array<string>;
                        enabled: boolean;
                    }
                ];
            }>;
            region: string;
            backend: string;
        };
        backends: Array<string>;
        configuration: any;
    };
    componentList: Record<string, Record<string, {
        type: string;
        required: boolean;
        editorDefaultValue: string;
        runTimeOverrideValue: string;
        runTimeDefaultValue: string;
        options: Array<string>;
    }>>;
}
export interface IAppToken {
    secret: string;
    app: string;
    email: string;
}
export interface ITags extends ICloudObject {
    description?: string;
}
export interface IOrganizationGroup extends ICloudObject {
    description?: string;
    createdBy: string;
    createDate: Date;
    owners?: Array<string>;
    features?: IOrganizationFeatures;
    applications?: IEditorTypes;
    mainOrganizationId?: IOrganization["id"];
    mainAppId?: IApplication["ID"];
}
export interface ISDActivities {
    ID: ObjectID;
    username: string;
    lastAccessDate: Date;
    logs: Array<{
        time: Date;
    }>;
}
export interface IUpdateMobileUsage {
    isMobileTemplateUsed?: boolean;
    isMobilePublished?: boolean;
}
export interface IOrganizationGroupList {
    name: string;
    ownership: "Owner" | "User" | "Requested";
    photoLink?: string;
}
export interface IOrganizationActiveGroups {
    organizationName: string;
    appCount: number;
    licensed: boolean;
    joinDate: Date;
}
//# sourceMappingURL=quickCloud.d.ts.map