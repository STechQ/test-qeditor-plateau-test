import { IAppCloud, IAzureDatabaseType } from "../../../qCloudTemp/application";
import { IOrganizationOptions, UpdateAppOnDBCallback, UpdateOrganizationOnDBCallback } from "./ICloudProvider";
export interface IAppOptions extends IAppBaseOptions {
    uiFolderPath?: string;
    backendFolderPath?: string;
}
export interface IAppDeleteOptions extends IAppBaseOptions {
}
export interface IAppUpdateOptions extends IAppBaseOptions {
}
interface IAppBaseOptions {
    appID: string;
    appName: string;
    organizationId: string;
    cloud?: IAppCloud;
}
export interface ICreateAppOptions {
    organization: IOrganizationOptions;
    app: IAppOptions;
    createdBy: string;
    publishId?: string;
    cause: "web" | "mobile" | "web+mobile";
    databaseOptions?: {
        type: IAzureDatabaseType;
    };
    callbacks: {
        updateAppOnDBCallback: UpdateAppOnDBCallback;
        updateOrganizationOnDBCallback: UpdateOrganizationOnDBCallback;
    };
}
export interface IDeleteAppOptions {
    organization: IOrganizationOptions;
    app: IAppDeleteOptions;
}
export interface IUpdateUIOptions {
    organization: IOrganizationOptions;
    app: IAppUpdateOptions;
    callbacks: {
        updateApp: UpdateAppOnDBCallback;
    };
}
export type ICloudProviderPublishAzureType = "azure";
export type ICloudProviderPublishNoneType = "none";
export type ICloudProviderPublishPlateauGCPType = "plateauGCP";
export type ICloudProviderPublishType = ICloudProviderPublishAzureType | ICloudProviderPublishNoneType | ICloudProviderPublishPlateauGCPType;
export type ICloudProviderPublishTypeDeployables = ICloudProviderPublishAzureType | ICloudProviderPublishPlateauGCPType;
export interface ICloudProviderPublish {
    type: ICloudProviderPublishType;
    createApp(options: ICreateAppOptions): Promise<void>;
    deleteApp(options: IDeleteAppOptions): Promise<void>;
    updateApp(options: IUpdateUIOptions, newName: string): Promise<void>;
}
export declare const ICloudProviderPublish: unique symbol;
export {};
//# sourceMappingURL=ICloudProviderPublish.d.ts.map