import { CollectionName } from './mongo/IDataStoreManager';
export interface IExecutionContextStore {
    tuid: string;
    userId?: string;
    lpLogClientId?: string;
    channel: "online" | "batch" | "console";
    scope?: "initiation" | undefined;
}
export declare abstract class ExecutionContext<TStore extends IExecutionContextStore> {
    private static _currentContext;
    static get isInitted(): boolean;
    static get current(): ExecutionContext<IExecutionContextStore>;
    readonly name: string;
    private readonly asyncLocalStorage;
    constructor(name: string);
    startScope<TScopeRetType>(storeObject: TStore, scope: () => TScopeRetType): TScopeRetType;
    tryGetScopeStore(): TStore | undefined;
    getScopeStore(): TStore;
    get isInitiationScope(): boolean;
    createNewStore(scope: "initiation" | undefined): TStore;
    protected abstract createNewStoreForChildren(): TStore;
    abstract collectionOverride(collectionName: CollectionName): Promise<CollectionName>;
    abstract getExecutionAdditionalLog(): string;
}
//# sourceMappingURL=executionContext.d.ts.map