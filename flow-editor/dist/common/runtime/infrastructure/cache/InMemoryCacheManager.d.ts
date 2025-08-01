import ICacheManager, { CacheKey } from "./ICacheManager.js";
export declare class InMemoryCacheManager implements ICacheManager {
    private cache;
    constructor();
    private isExpired;
    get<T>(key: CacheKey): Promise<T | undefined>;
    set<T>(key: CacheKey, value: T, ttl?: number): Promise<void>;
    delete(key: CacheKey): Promise<void>;
    clear(): Promise<void>;
}
export default InMemoryCacheManager;
//# sourceMappingURL=InMemoryCacheManager.d.ts.map