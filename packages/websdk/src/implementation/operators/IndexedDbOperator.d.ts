import { IIndexedDbOperator, IPermanentStoreObject } from "../../../../../common/shrimp/interfaces/RenderingInterfaces/Operators/IIndexedDbOperator";
export declare class IndexedDbOperator implements IIndexedDbOperator {
    constructor();
    set(object: IPermanentStoreObject<unknown>): Promise<void>;
    get(key: string): Promise<IPermanentStoreObject<unknown> | undefined>;
    delete(key: string): Promise<void>;
    getAll(): Promise<IPermanentStoreObject<unknown>[]>;
    changeDb(dbName: string): Promise<void>;
    deleteDb(dbName: string): Promise<void>;
    getCurrentDbName(): string;
}
//# sourceMappingURL=IndexedDbOperator.d.ts.map