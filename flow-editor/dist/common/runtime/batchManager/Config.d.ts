export interface IConfigService {
    maxRetries: number;
    timeoutMs: number;
    concurrency: number;
    lockDuration: number;
    isEnable: boolean;
    getBatchManagerConfig(): IConfigService;
}
export declare class ConfigService<T> implements IConfigService {
    maxRetries: number;
    timeoutMs: number;
    concurrency: number;
    lockDuration: number;
    isEnable: boolean;
    getBatchManagerConfig(): this;
    constructor(maxRetries: number, timeoutMs: number, concurrency: number, lockDuration: number, isEnable: boolean);
}
//# sourceMappingURL=Config.d.ts.map