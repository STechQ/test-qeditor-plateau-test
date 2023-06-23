import { ContextManager } from "../../../shrimp/context";
import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
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
    getTargetContextItems(name: string): {
        contextItems: any;
        targetFieldName: string;
    };
}
//# sourceMappingURL=StoreManager.d.ts.map