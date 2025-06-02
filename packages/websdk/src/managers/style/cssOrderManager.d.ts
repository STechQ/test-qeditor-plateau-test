import { IContextItem } from "../../../../../common/shrimp/context";
export declare class CssOrderManager implements IContextItem {
    static ContextName: string;
    contextName: string;
    private cssPlaceholders;
    getPlaceHolderDom(name: keyof CssOrderManager["cssPlaceholders"]): HTMLStyleElement;
    init(shadow: ShadowRoot): void;
}
//# sourceMappingURL=cssOrderManager.d.ts.map