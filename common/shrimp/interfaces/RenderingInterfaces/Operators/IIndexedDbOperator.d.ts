export declare const Plateau_UI_PermanantDB_Name = "PermanantDB";
export declare const Plateau_UI_PermanantDB_Name_Prefix = "Plateau_UI_";
export interface IPermanentStoreObject<T> {
    key: string;
    value: T;
}
export interface IIndexedDbOperator {
    set: (object: IPermanentStoreObject<unknown>) => Promise<void>;
    get: (key: string) => Promise<IPermanentStoreObject<unknown> | undefined>;
    delete: (key: string) => Promise<void>;
    getAll: () => Promise<IPermanentStoreObject<unknown>[]>;
    changeDb: (dbName: string) => Promise<void>;
    deleteDb: (dbName: string) => Promise<void>;
    getCurrentDbName: () => string;
}
//# sourceMappingURL=IIndexedDbOperator.d.ts.map