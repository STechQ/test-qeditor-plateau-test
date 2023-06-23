export declare type QPromiseInterractionCb = (prom: QPromise<any>) => void;
export interface IQPromiseInterractionCollection {
    onThen?: QPromiseInterractionCb;
    onCatch?: QPromiseInterractionCb;
    onFinally?: QPromiseInterractionCb;
}
export declare class QPromise<T> implements Promise<T> {
    static staticCallbacks: IQPromiseInterractionCollection;
    static setStaticCallbacksAndRetrieveOld(staticCallbacks: IQPromiseInterractionCollection): IQPromiseInterractionCollection;
    private static noop;
    private static directCreate;
    static all<T>(values: readonly (T | PromiseLike<T>)[]): Promise<T[]>;
    static race<T>(values: readonly T[]): Promise<T extends PromiseLike<infer U> ? U : T>;
    static reject<T = never>(reason?: any): Promise<T>;
    static resolve<T>(value?: T | PromiseLike<T>): Promise<T | void>;
    static readonly [Symbol.species]: PromiseConstructor;
    private selfPromise;
    private finalized?;
    get Finalized(): boolean | undefined;
    private finalize;
    callbacks: IQPromiseInterractionCollection;
    constructor(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
    readonly [Symbol.toStringTag]: string;
}
//# sourceMappingURL=QPromise.d.ts.map