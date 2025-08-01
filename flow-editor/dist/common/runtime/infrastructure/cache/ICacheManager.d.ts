export type CacheKey = string | Record<string, string | number>;
export default interface ICacheManager {
    get<T>(key: CacheKey): Promise<T | undefined>;
    set<T>(key: CacheKey, value: T, ttl?: number): Promise<void>;
    delete(key: CacheKey): Promise<void>;
    clear(): Promise<void>;
}
export declare const keyGenerator: (cacheKey: CacheKey) => string;
//# sourceMappingURL=ICacheManager.d.ts.map