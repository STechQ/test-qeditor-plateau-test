export declare const Plateau_UI_PermanantStore_Name = "PermanantStore";
export declare const Plateau_UI_PermanantStore_Name_Prefix = "Plateau_UI_";
export interface IPermanentStoreObject<T> {
    key: string;
    value: T;
}
export interface IPermanentStoreOperator {
    set: (object: IPermanentStoreObject<unknown>) => Promise<void>;
    get: (key: string) => Promise<IPermanentStoreObject<unknown> | undefined>;
    delete: (key: string) => Promise<void>;
    getAll: () => Promise<IPermanentStoreObject<unknown>[]>;
    createOrChangeStore: (storeName: string) => Promise<void>;
    deleteStore: (storeName: string) => Promise<void>;
    getCurrentStoreName: () => string;
}
//# sourceMappingURL=IPermanentStoreOperator.d.ts.map