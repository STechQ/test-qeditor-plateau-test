import { IContextItem } from "../../../../shrimp/context";
import { BaseStoreContext } from "./BaseStoreContext";
import { IClonable } from "../../../../shrimp/helpers/clonable";
export declare class BagStoreContext extends BaseStoreContext implements IContextItem, IClonable {
    static ContextName: string;
    contextName: string;
    constructor();
    CreateSelf(): BagStoreContext;
}
//# sourceMappingURL=BagStoreContext.d.ts.map