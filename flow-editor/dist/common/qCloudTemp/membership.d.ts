import { IUser_SUSI } from "./authentication";
import { IOrganizationActions, ITags } from "./quickCloud";
export interface IOrganizationCloud {
    azure?: {
        resourceGroupID?: string;
        modelStorageID?: string;
        storageHostUrl?: string;
        storageWebSiteEnabled?: boolean;
        dnsZoneName?: string;
    };
    plateauGCP?: {
        environmentPrefix?: string;
    };
}
export interface IOrganization {
    id: string;
    name: string;
    creatorUserId: IUser_SUSI["id"];
    ownerUserIds?: Array<IUser_SUSI["id"]>;
    createDate: Date;
    dbName: string;
    accountType?: "premium" | "beta";
    applications: IEditorTypes;
    limits?: {
        createApp?: number;
    };
    actions?: IOrganizationActions;
    cloud?: IOrganizationCloud;
    features?: IOrganizationFeatures;
    status?: "active" | "deleting";
    modifyDate?: Date;
    tags?: Array<ITags['ID']>;
    organizationGroupId?: string;
    calculatedInfo?: IOrganizationCalculatedInfo;
}
export interface IEditorTypes {
    quick?: boolean;
    entity?: boolean;
    process?: boolean;
    bpmn?: boolean;
    flow?: boolean;
    workflow?: boolean;
    image?: boolean;
    font?: boolean;
    lottie?: boolean;
    store?: boolean;
}
export interface IOrganizationFeatures {
    multipleCss?: boolean;
    qjsonLoading?: boolean;
    aiSuggestions?: boolean;
    codeAssistant?: boolean;
    appVersion?: boolean;
    externalIntegration?: boolean;
}
export interface IOrganizationCalculatedInfo {
    appCount: number;
    userCount: number;
    uiPageCount: number;
    uiPageSize: number;
    calcDate: Date;
}
export interface IOrganizationUIExtended extends IOrganization {
    organizationGroupName?: string;
    createdBy?: string;
    tagNames?: Array<string>;
    licensed?: 'LICENSED' | 'Demo Org' | 'Free';
}
//# sourceMappingURL=membership.d.ts.map