import { IPermanentStoreObject } from "../../../../common/shrimp/interfaces/RenderingInterfaces/Operators/IIndexedDbOperator";
export declare class IndexedDBManager {
    private static permanantDbName;
    static changeDb(dbName: string): void;
    static getCurrentDbName(): string;
    private dbConnection;
    private createDbClient;
    private openDB;
    deleteDb(dbName: string): Promise<void>;
    insert(object: IPermanentStoreObject<unknown>): Promise<void>;
    get(key: string): Promise<IPermanentStoreObject<unknown> | undefined>;
    delete(key: string): Promise<void>;
    list(): Promise<IPermanentStoreObject<unknown>[]>;
}
//# sourceMappingURL=IndexedDBManager.d.ts.map