/// <reference types="node" />
/// <reference types="node" />
import { GetObjectCommandOutput } from "@aws-sdk/client-s3";
import { RequireKey } from "../../../helpers/typeHelper";
import { ILogger } from "../../domain/infrastructure/ILogger";
interface IS3LogUploadBucketPolicyParams {
    Bucket: string;
    Policy: string;
}
interface ICreateBucketParams {
    retries: number;
}
interface IDeleteBucketParams {
    bucket: string;
}
interface IUploadBase {
    bucket: string;
    key: string;
    contentType?: string;
}
interface IFileUploadParams extends IUploadBase {
    body: string | Buffer;
}
interface IUploadStreamParams extends IUploadBase {
    stream: NodeJS.ReadableStream;
}
interface IFileLocationParams {
    bucket: string;
    key: string;
}
interface IFolderLocationParams {
    bucket: string;
    prefix: string;
}
type IS3LowOptions = {
    certs: {
        certType: "direct";
        certificates: Array<Buffer | string>;
    } | {
        certType: "env";
        certEnvName: string | undefined;
    };
};
export interface IS3BucketPolicy {
    version?: string;
    statements: Array<IS3Statement>;
}
export interface IS3Statement {
    sid: string;
    effect: 'Allow' | 'Deny';
    principal: string;
    action: string | Array<string>;
    resource: Array<string>;
}
export interface IS3LowCredentials {
    accessKeyId: string;
    secretAccessKey: string;
}
export interface IS3LowParams {
    credentials: IS3LowCredentials;
    region?: string;
    endpoint?: string;
}
export interface IS3FileUploadResult {
    success: boolean;
}
export declare class S3Low {
    private s3Client;
    private readonly logger;
    constructor(params: IS3LowParams, logger: ILogger, options: IS3LowOptions);
    private loadCertificates;
    private generateBucketName;
    private getBucketPolicy;
    createS3BucketPolicy(bucketName: string, params: IS3BucketPolicy): Promise<void>;
    createBucket(params: ICreateBucketParams): Promise<string>;
    deleteBucket(params: IDeleteBucketParams): Promise<void>;
    uploadStream(params: IUploadStreamParams): Promise<void>;
    uploadFile(params: IFileUploadParams): Promise<{
        success: boolean;
    }>;
    private _uploadFile;
    private uploadLargeFile;
    downloadFile(params: IFileLocationParams): Promise<RequireKey<GetObjectCommandOutput, "Body">>;
    listObjectsInFolder(params: IFolderLocationParams): Promise<string[]>;
    deleteFolder(params: IFolderLocationParams): Promise<DeleteFolderResult>;
    deleteFile(params: IFileLocationParams): Promise<void>;
    assertBucketExistence(Bucket: string): Promise<void>;
    parseKeyHandle(key: string): {
        name: string;
        path: string | undefined;
    };
    parseStorageHandle(storageHandle: string): {
        bucket: string;
        key: string;
    };
    uploadBucketPolicy(params: IS3LogUploadBucketPolicyParams): Promise<void>;
    private deleteVersionedObjects;
    private deleteStandardObjects;
    private listObjects;
}
interface DeleteFolderResultFailType {
    key?: string;
    reason?: string;
}
type DeleteFolderResult = {
    success: true;
    deletedCount: number;
} | {
    success: false;
    deletedCount: number;
    fails: Array<DeleteFolderResultFailType>;
};
export {};
//# sourceMappingURL=s3Low.d.ts.map