import { ContextManager } from "../../../shrimp/context";
import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
import { IStore } from "../../../shrimp/interfaces/quick/IStore";
declare class StoreContextInfo {
    targetStoreContext: IStore;
    targetFieldName: string;
    constructor(targetStoreContext: IStore, targetName: string);
}
export declare class StoreManager {
    private context;
    constructor(context: ContextManager);
    private decideStoreContext;
    set(name: string, value: any): void;
    get(name: any): any;
    delete(name: any): void;
    getAll(name: any): any;
    deleteAll(name: any): void;
    bulkSet(items: IDictionary<any>): void;
    getTargetStore(name: string): StoreContextInfo;
}
export {};
//# sourceMappingURL=StoreManager.d.ts.map