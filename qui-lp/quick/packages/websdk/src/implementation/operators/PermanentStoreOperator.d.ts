import { IPermanentStoreOperator, IPermanentStoreObject } from "../../../../../common/shrimp/interfaces/RenderingInterfaces/Operators/IPermanentStoreOperator";
export declare class PermanentStoreOperator implements IPermanentStoreOperator {
    constructor();
    set(object: IPermanentStoreObject<unknown>): Promise<void>;
    get(key: string): Promise<IPermanentStoreObject<unknown> | undefined>;
    delete(key: string): Promise<void>;
    getAll(): Promise<IPermanentStoreObject<unknown>[]>;
    createOrChangeStore(storeName: string): Promise<void>;
    deleteStore(storeName: string): Promise<void>;
    getCurrentStoreName(): string;
}
//# sourceMappingURL=PermanentStoreOperator.d.ts.map