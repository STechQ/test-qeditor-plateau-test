import { IContextItem } from "../../../shrimp/context";
import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
export declare class ScopeContext implements IContextItem {
    static ContextName: string;
    contextName: string;
    private props?;
    private events?;
    children?: Record<string, Array<unknown>>;
    constructor({ props, events, children }: {
        props?: IDictionary<any>;
        events?: IDictionary<Function>;
        children?: Record<string, Array<unknown>>;
    });
    GetProps(): IDictionary<any> | undefined;
    GetEvents(): IDictionary<Function> | undefined;
    getProp(name: string): any;
    setProp(name: string, value: any): void;
    triggerEvent(name: string, parameters?: Array<any>): any;
}
//# sourceMappingURL=ScopeContext.d.ts.map