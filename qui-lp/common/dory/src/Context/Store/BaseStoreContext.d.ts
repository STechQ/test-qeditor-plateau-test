import { IContextItem } from "../../../../shrimp/context";
import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
import { IContextDepTarget, IStore } from "../../../../shrimp/interfaces/quick/IStore";
export declare class BaseStoreContext implements IStore {
    contextItems: IDictionary<any>;
    dependants: Record<string, Record<string, Record<string, IContextDepTarget>>>;
    constructor();
    addDependant(field: string | number | symbol, pageId: string, propCalcContext: IContextItem): void;
    getDependants(field: string | number | symbol, pageId: string): Record<string, IContextDepTarget>;
    set(name: string, value: any | undefined): void;
    get(name: string): any | undefined;
    getAll(): any | undefined;
    delete(name: string): void;
    deleteAll(): void;
    clear(): void;
}
//# sourceMappingURL=BaseStoreContext.d.ts.map