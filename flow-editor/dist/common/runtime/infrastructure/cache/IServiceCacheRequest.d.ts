import { CollectionName, IDataStoreManager } from "../../../../common/runtime/infrastructure/mongo/IDataStoreManager";
import { IResponse } from "../../../everything/flow/runtimeObjects/INetwork";
/**
 * Generic cache-aware request configuration.
 */
export interface IServiceCacheRequest<TRespBody> {
    times: {
        refreshPeriodInMs?: number;
        validityDurationInMs?: number;
    };
    key: string;
    getResponseCb: () => Promise<IResponse<TRespBody>>;
    dsManager: IDataStoreManager;
    cacheConfig?: IRestCacheConfig | ISoapCacheConfig;
}
export type RequestCacheOptions<TRespBody> = Omit<Omit<IServiceCacheRequest<TRespBody>, "getResponseCb">, "dsManager">;
interface ICacheConfigBase {
    timeoutInMs?: number;
    collectionName?: CollectionName;
}
export interface IRestCacheConfig extends ICacheConfigBase {
    type: "rest";
    method?: string;
    enabledMethods?: Record<string, boolean>;
    enabledStatusCodes?: Record<number, boolean>;
}
export interface ISoapCacheConfig extends ICacheConfigBase {
    type: "soap";
}
export {};
//# sourceMappingURL=IServiceCacheRequest.d.ts.map