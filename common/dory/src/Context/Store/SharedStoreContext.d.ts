import { IContextItem } from "../../../../shrimp/context";
import { IClonable } from "../../../../shrimp/helpers/clonable";
import { BaseStoreContext } from "./BaseStoreContext";
export declare class SharedStoreContext extends BaseStoreContext implements IContextItem, IClonable {
    static ContextName: string;
    contextName: string;
    constructor();
    CreateSelf(): SharedStoreContext;
    OverrideAllContextItems(newContextItems: any): void;
}
//# sourceMappingURL=SharedStoreContext.d.ts.map