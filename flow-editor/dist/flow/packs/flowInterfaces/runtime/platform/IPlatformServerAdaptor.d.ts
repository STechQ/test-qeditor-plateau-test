/// <reference types="node" />
import { IncomingHttpHeaders, IncomingMessage, ServerResponse } from "http";
import { MongoDBManager } from "../../../../../common/runtime/infrastructure/mongo/mongoDBManager";
import { IMongoDBTransactionQueue } from "../../../../../common/runtime/infrastructure/mongo/IDataStoreManager";
export interface IPlatformServerAdaptorRequest {
    getHttpMethod(): string;
    getPath(): string;
    getPathParams<TParams = Record<string, string>>(): Partial<TParams>;
    getHeaders<THeaders = {}>(): Partial<THeaders> & IncomingHttpHeaders;
    getQueryParams<TQueryParams = Record<string, string | Array<string>>>(): Partial<TQueryParams>;
    getBody<TRequestBody>(): Partial<TRequestBody> | undefined;
    getRawBody(): IncomingMessage;
}
export interface IPlatformServerAdaptorResponse {
    setStatus(code: number): IPlatformServerAdaptorResponse;
    setHeader(name: string, value: string | Array<string>): IPlatformServerAdaptorResponse;
    send<TResponseBody>(body: TResponseBody): void;
    getRawBody(): ServerResponse;
}
export interface IPlatformServerAdaptor {
    request: IPlatformServerAdaptorRequest;
    response: IPlatformServerAdaptorResponse;
    getEnvVar(key: string, options: {
        requestingStepName?: string;
    }): string | undefined;
    privateOps: {
        getDb: () => {
            dsManager: MongoDBManager;
        };
        getTransactionQueue: () => {
            trxQueue?: IMongoDBTransactionQueue;
        };
    };
    getObjectbyCache: <T>(key: String) => Promise<T | undefined>;
}
//# sourceMappingURL=IPlatformServerAdaptor.d.ts.map