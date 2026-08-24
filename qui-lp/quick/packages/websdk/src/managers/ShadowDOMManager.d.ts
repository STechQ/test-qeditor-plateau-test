import { IContextItem } from "../../../../common/shrimp/context";
import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
import { IRendererConfig } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRendererConfig";
import { CssOrderManager, CssOrderManagerWithShadow } from "./style/cssOrderManager";
export declare class ShadowDOMManager implements IContextItem {
    private readonly settingsWrapper;
    private readonly config;
    static ContextName: string;
    contextName: string;
    private _shadowContainer;
    get shadowContainer(): {
        shadowORmountPoint: ShadowRoot | HTMLElement;
        mountPoint: HTMLElement;
    };
    private set shadowContainer(value);
    cssOrderManager: CssOrderManager | CssOrderManagerWithShadow;
    outerMountPoint: HTMLElement;
    rootInstance: Vue;
    newMountPoint: HTMLElement;
    constructor(outerMountPoint: HTMLElement, settingsWrapper: IWebSDKSettingsWrapper, config: IRendererConfig);
    isShadowDOMEnabled(): boolean | undefined;
    private getWindowFromParent;
    private enhanceDocumentWithShadowRoot;
    private attachShadowRootAccessor;
    private arrangeContainerAndMountPoint;
    private establishContainer;
    private applyIconFontStyles;
    private addDevExCSSForFonts;
    private addMissingCSS;
    private appendDomsToShadow;
    private cacheAndAppendVuetifyStyles;
    private cacheAndAppendPlateauStyles;
    private decideShadowManagement;
}
//# sourceMappingURL=ShadowDOMManager.d.ts.map