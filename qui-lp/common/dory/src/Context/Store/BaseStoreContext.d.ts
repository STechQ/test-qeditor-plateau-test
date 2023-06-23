import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
import { IStore } from "../../../../shrimp/interfaces/quick/IStore";
export declare class BaseStoreContext implements IStore {
    protected contextItems: IDictionary<any>;
    protected constructor();
    set(name: string, value: any | undefined): void;
    get(name: string): any | undefined;
    getAll(): any | undefined;
    delete(name: string): void;
    deleteAll(): void;
    clear(): void;
}
//# sourceMappingURL=BaseStoreContext.d.ts.map