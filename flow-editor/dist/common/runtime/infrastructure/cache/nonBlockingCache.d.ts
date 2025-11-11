import { CollectionName, IDataStoreManager } from "../mongo/IDataStoreManager";
export interface INonBlockingCacheDBItem<TValueType = Record<string, any>> {
    key: string;
    value: TValueType;
}
export interface INonBlockingCacheItem {
    response: any;
    cachedDate: Date;
}
export interface INBCacheResiliency {
    dsManager: IDataStoreManager;
    collectionName: CollectionName;
}
export interface NonBlockingCacheOptions<TReturn = any> {
    key: string;
    times: {
        refreshPeriod: number;
        validityDuration?: number;
    };
    executionCb: () => Promise<TReturn>;
    cacheResponseWhen: (returnValue: TReturn) => Promise<boolean>;
    resiliency?: INBCacheResiliency;
    timeout?: number;
}
export type CacheStatusType = "uptoDate" | "useButRefresh" | "notValid";
export declare class NonBlockingCache {
    static getResponseWithCacheControl<TReturn>(options: NonBlockingCacheOptions<TReturn>): Promise<TReturn>;
    private static startUpdateCache;
    private static startCachingFromCb;
    private static waitForUpdatingCache;
    private static getCacheValue;
    private static tryGetReturnValue;
    private static currentResolvingProm;
    private static tryAcquireLock;
    private static releaseLock;
    private static setDbCacheValue;
    private static getDbCacheValue;
    private static createNewCache;
    private static getCacheStatus;
    static clearCache(): void;
    static clearDbCache(resiliency: INBCacheResiliency): Promise<void>;
    static clearCacheItem(key: string): void;
    static clearDbCacheItem(key: string, resiliency: INBCacheResiliency): Promise<void>;
}
//# sourceMappingURL=nonBlockingCache.d.ts.map