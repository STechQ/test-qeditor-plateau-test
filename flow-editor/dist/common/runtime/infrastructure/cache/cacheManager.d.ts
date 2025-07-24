import ICacheManager from "./ICacheManager.js";
export type CacheManagerType = 'inMemory';
export declare class CacheManager {
    private static inst;
    private constructor();
    static init(cacheType: CacheManagerType): ICacheManager;
    static instance(): ICacheManager | undefined;
}
//# sourceMappingURL=cacheManager.d.ts.map