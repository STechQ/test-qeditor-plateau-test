import { CollectionName, IDataStoreManager } from "../../../../common/runtime/infrastructure/mongo/IDataStoreManager";
/**
 * Generic cache-aware request configuration.
 */
export interface IServiceCacheRequest<TReturn> {
    times: {
        refreshPeriodInMs?: number;
        validityDurationInMs?: number;
    };
    key: string;
    getResponseCb: () => Promise<TReturn>;
    dsManager: IDataStoreManager;
    cacheConfig?: IRestCacheConfig | ISoapCacheConfig;
}
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