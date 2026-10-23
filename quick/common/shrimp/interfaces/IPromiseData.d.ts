export interface IPromiseData<T> {
    promise: Promise<T>;
    resolver: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
    startTimer: (timeout: number) => void;
    isResolved: () => boolean;
    isRejected: () => boolean;
    isCompleted: () => boolean;
}
/**
 * @param timeout timeout time in ms, undefined if infinite
 */
export declare function CreatePromiseData<T>(timeout?: number, opt?: {
    fixSyncResolve?: boolean;
}): IPromiseData<T>;
export declare function PromiseAllSettled<T>(proms: Array<Promise<T>>): Promise<T> | undefined;
//# sourceMappingURL=IPromiseData.d.ts.map