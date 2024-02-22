import { IPermanentStoreObject } from "../../../../common/shrimp/interfaces/RenderingInterfaces/Operators/IPermanentStoreOperator";
export declare class PermanentStoreManager {
    private static permanentDbName;
    static changeDb(dbName: string): void;
    deleteDb(dbName: string): Promise<void>;
    static getCurrentStoreName(): string;
    private dbConnection;
    private createDbClient;
    private openDB;
    insert(object: IPermanentStoreObject<unknown>): Promise<void>;
    get(key: string): Promise<IPermanentStoreObject<unknown> | undefined>;
    delete(key: string): Promise<void>;
    list(): Promise<IPermanentStoreObject<unknown>[]>;
}
//# sourceMappingURL=PermanentStoreManager.d.ts.map