import { IContextItem } from "../../../../shrimp/context";
import { IClonable } from "../../../../shrimp/helpers/clonable";
import { BaseStoreContext } from "./BaseStoreContext";
export declare class GlobalStoreContext extends BaseStoreContext implements IContextItem, IClonable {
    static ContextName: string;
    contextName: string;
    constructor();
    CreateSelf(): GlobalStoreContext;
}
//# sourceMappingURL=GlobalStoreContext.d.ts.map