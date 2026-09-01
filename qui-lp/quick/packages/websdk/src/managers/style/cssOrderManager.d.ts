import { IContextItem } from "../../../../../common/shrimp/context";
export declare class CssOrderManager {
    private cssPlaceholders;
    getPlaceHolderDom(name: keyof CssOrderManager["cssPlaceholders"]): HTMLStyleElement;
    init(shadow: ShadowRoot | HTMLElement): void;
}
export declare class CssOrderManagerWithShadow implements IContextItem {
    static ContextName: string;
    contextName: string;
    private cssPlaceholders;
    getPlaceHolderDom(name: keyof CssOrderManagerWithShadow["cssPlaceholders"]): HTMLStyleElement;
    init(shadow: ShadowRoot | HTMLElement): void;
}
//# sourceMappingURL=cssOrderManager.d.ts.map