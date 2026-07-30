import { IOrganizationCloudStorageCeph } from "../../qCloudTemp/membership";
import { ICloudDiContainer } from "../domain/useCases/ICloudProvider";
import { IAssertGetStorageHostUrlOptions, ICloudProviderStorage, ICreateOrganizationOptions, IDeleteFolderResult, IDeleteModelOptions, IDeleteOrganizationOptions, IGetModelsInPathOptions, IGetModelsInPathResponse, IIsOrgStatorageConfiguredOptions, IReadModelOptions, IReadModelResponse, IStreamFromWebStorageOptions, IStreamFromWebStorageResponse, IStreamToStorageOptions, IUploadableObject, IUploadCdnFilesToStorageOptions, IUploadModelsToStorageOptions } from "../domain/useCases/ICloudProviderStorage";
import { IS3LowCredentials } from "../infrastructure/cloud/s3Low";
export interface ICloudProviderStorageCephCredentials {
    credentials: IS3LowCredentials;
    endpoint: string;
    region: string;
    certificates: Array<string>;
}
export interface IUploadFilesToBucketResult {
    fails: Array<string>;
    success: Array<string>;
}
export declare class CloudProviderStorageCephImpl implements ICloudProviderStorage {
    private readonly diContainer;
    private readonly options;
    type: "ceph";
    constructor(diContainer: ICloudDiContainer, options: ICloudProviderStorageCephCredentials);
    assertGetStorageHostUrl(options: IAssertGetStorageHostUrlOptions): string;
    assertOrgStorageConfigured(options: IIsOrgStatorageConfiguredOptions): IOrganizationCloudStorageCeph;
    createOrganization(options: ICreateOrganizationOptions): Promise<void>;
    deleteOrganization(options: IDeleteOrganizationOptions): Promise<void>;
    uploadModelsToOrganizationStorage(options: IUploadModelsToStorageOptions, files: Array<IUploadableObject>): Promise<IUploadFilesToBucketResult>;
    uploadCdnFilesToOrganizationStorage(options: IUploadCdnFilesToStorageOptions, files: Array<IUploadableObject>): Promise<void>;
    deleteModel(options: IDeleteModelOptions, modelId: string): Promise<IDeleteFolderResult>;
    streamToStorage(options: IStreamToStorageOptions): Promise<void>;
    streamFromWebStorage(options: IStreamFromWebStorageOptions): Promise<IStreamFromWebStorageResponse>;
    readModel(options: IReadModelOptions, path: string, fullName: string): Promise<IReadModelResponse>;
    getModelsInPath(options: IGetModelsInPathOptions, path: string): Promise<IGetModelsInPathResponse>;
    private createOrganizationBucket;
    private uploadFilesToBucket;
    private createS3Low;
    private callUpdateOrganizationCloud;
}
//# sourceMappingURL=cloudProviderStorageCephImpl.d.ts.map