import { IContextItem } from "../../../shrimp/context";
export declare class GlobalContext implements IContextItem {
    static ContextName: string;
    contextName: string;
    private pageIdCounter;
    constructor();
    NextCounter(): number;
}
//# sourceMappingURL=GlobalContext.d.ts.map