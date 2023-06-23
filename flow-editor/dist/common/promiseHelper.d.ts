export interface IPromiseData<T> {
    promise: Promise<T>;
    resolver: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
    startTimer: (timeout: number) => void;
}
/**
 * @param timeout timeout time in ms, undefined if infinite
 */
export declare function createPromiseData<T>(timeout?: number, opt?: {
    fixSyncResolve?: boolean;
}): IPromiseData<T>;
//# sourceMappingURL=promiseHelper.d.ts.map