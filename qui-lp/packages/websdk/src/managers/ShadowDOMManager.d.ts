import { IContextItem } from "../../../../common/shrimp/context";
import { CssOrderManager } from "./style/cssOrderManager";
export declare class ShadowDOMManager implements IContextItem {
    private readonly cssOrderManager;
    static ContextName: string;
    contextName: string;
    private _shadowContainer;
    get shadowContainer(): {
        shadowRoot: ShadowRoot;
        mountPoint: HTMLElement;
    };
    private set shadowContainer(value);
    private outerMountPoint;
    constructor(outerMountPoint: HTMLElement, cssOrderManager: CssOrderManager);
    private withShadowDocument;
    private createShadowContainer;
    static addIconsStyle(): void;
    static addDevExCSSForFonts(): void;
    static addMissingCSS(): void;
    private appendDomsToShadow;
    private cacheAndAppendVuetifyStyles;
    private cacheAndAppendPlateauStyles;
}
//# sourceMappingURL=ShadowDOMManager.d.ts.map