/// <reference types="node" />
/// <reference types="node" />
import { Readable } from "stream";
import { StorageContentType } from "../../../qCloudTemp/storageTypes";
import { IOrganizationOptions, UpdateOrganizationOnDBCallback } from "./ICloudProvider";
import { IUploadFilesToBucketResult } from "../../useCases/cloudProviderStorageCephImpl";
export interface IUploadableObject {
    fullName: string;
    path: string;
    data: string | Buffer;
    contentType: StorageContentType;
}
export interface IAzureBlobFile {
    name: string;
    content: string;
    createDate?: Date;
    size: number;
}
export interface IUploadModelsToStorageOptions {
    organization: IOrganizationOptions;
    callbacks: {
        updateOrganizationOnDBCallback: UpdateOrganizationOnDBCallback;
    };
}
export interface IUploadCdnFilesToStorageOptions extends IUploadModelsToStorageOptions {
}
export interface ICreateOrganizationOptions {
    organization: IOrganizationOptions;
    callbacks: {
        updateOrganizationOnDBCallback: UpdateOrganizationOnDBCallback;
    };
}
export interface IDeleteOrganizationOptions {
    organization: IOrganizationOptions;
}
export interface IDeleteModelOptions {
    organization: IOrganizationOptions;
}
export interface IReadModelOptions {
    organization: IOrganizationOptions;
}
export interface IReadFromWebStorageOptions extends IReadModelOptions {
}
export interface IReadModelResponse {
    path: string;
    file: IAzureBlobFile;
}
export interface IStreamFromWebStorageResponse {
    stream: Readable;
    contentType?: string;
    contentLength?: number;
}
export interface IGetModelsInPathOptions {
    organization: IOrganizationOptions;
}
export interface IGetModelsInPathResponse {
    path: string;
    files: Array<IAzureBlobFile>;
}
export interface IIsOrgStatorageConfiguredOptions {
    organization: IOrganizationOptions;
}
export interface IAssertGetStorageHostUrlOptions {
    organization: IOrganizationOptions;
}
export type IDeleteFolderResult = {
    success: true;
    deletedCount: number;
} | {
    success: false;
    deletedCount: number;
    fails: Array<IDeleteFolderResultFail>;
};
export type IDeleteFolderResultFail = {
    key?: string;
    reason?: string;
};
export type IStreamFromWebStorageOptions = ({
    bucketId: string;
} | {
    organization: IOrganizationOptions;
}) & {
    container: "web" | "artifacts" | "models";
    pathToFile: string;
};
export type IStreamToStorageOptions = ({
    bucketId: string;
} | {
    organization: IOrganizationOptions;
}) & {
    container: "web" | "artifacts" | "models";
    pathToFile: string;
    stream: Readable;
    contentType?: string;
};
export type ICloudProviderStorageAzureType = "azure";
export type ICloudProviderStorageCephType = "ceph";
export type ICloudProviderStorageType = ICloudProviderStorageAzureType | ICloudProviderStorageCephType;
export interface ICloudProviderStorage {
    assertGetStorageHostUrl(options: IAssertGetStorageHostUrlOptions): string;
    assertOrgStorageConfigured(options: IIsOrgStatorageConfiguredOptions): void;
    type: ICloudProviderStorageType;
    createOrganization(options: ICreateOrganizationOptions): Promise<void>;
    deleteOrganization(options: IDeleteOrganizationOptions): Promise<void>;
    uploadModelsToOrganizationStorage(options: IUploadModelsToStorageOptions, files: Array<IUploadableObject>): Promise<IUploadFilesToBucketResult | void>;
    uploadCdnFilesToOrganizationStorage(options: IUploadCdnFilesToStorageOptions, files: Array<IUploadableObject>): Promise<void>;
    deleteModel(options: IDeleteModelOptions, modelId: string): Promise<IDeleteFolderResult>;
    streamFromWebStorage(options: IStreamFromWebStorageOptions): Promise<IStreamFromWebStorageResponse>;
    streamToStorage(options: IStreamToStorageOptions): Promise<void>;
    readModel(options: IReadModelOptions, path: string, fullName: string): Promise<IReadModelResponse>;
    getModelsInPath(options: IGetModelsInPathOptions, path: string): Promise<IGetModelsInPathResponse>;
}
export declare const ICloudProviderStorage: unique symbol;
//# sourceMappingURL=ICloudProviderStorage.d.ts.map