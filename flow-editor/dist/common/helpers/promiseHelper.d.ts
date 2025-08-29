export interface IPromiseData<T> {
    promise: Promise<T>;
    resolver: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
    startTimer: (timeout: number) => void;
    startTime: number;
    status: "waiting" | "resolved" | "rejected";
    duration?: number;
}
/**
 * @param timeout timeout time in ms, undefined if infinite
 */
export declare function createPromiseData<T>(timeout?: number, opt?: {
    fixSyncResolve?: boolean;
    name?: string;
}): IPromiseData<T>;
//# sourceMappingURL=promiseHelper.d.ts.map