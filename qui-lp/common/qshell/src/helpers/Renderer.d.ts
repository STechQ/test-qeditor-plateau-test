import { ITheme } from "@stechquick/algae/lib/quick/ITheme";
import { ContextManager, IContextItem } from "../../../shrimp/context";
import { Hook } from "../../../shrimp/helpers/hook";
import { ILRID } from "../../../shrimp/interfaces/ComponentInterfaces/ILocalResource";
import { IQJSon } from "../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
import { DisplayHookCb, IDory, PartialDisplayHookCb } from "../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { IPageCompletedCb, IPageRenderStartedCb } from "../../../shrimp/interfaces/RenderingInterfaces/ILifeCycleCb";
import { IDoryRenderer, IRenderer, ISettingsQJsonContext } from "../../../shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IRendererOperatorCollection } from "../../../shrimp/interfaces/RenderingInterfaces/Operators/IRendererOperatorCollection";
import { IConfig } from "../../../shrimp/interfaces/quick/IConfig";
import { INavigationDemand } from "../../../shrimp/interfaces/quick/INavigationDemand";
import { INavigationOptions } from "../../../shrimp/interfaces/quick/INavigationManager";
import { PlatformType } from "../../../shrimp/interfaces/quick/IPlatform";
import { ISiteSettings } from "../../../shrimp/interfaces/quick/ISiteSettings";
import { DoryRendererChild } from "./RendererChild";
export declare class Renderer implements IRenderer {
    protected context: ContextManager;
    protected Dory: IDory;
    settingsQJsons: ISettingsQJsonContext;
    readonly BeforeRenderStartHook: Hook<() => void>;
    get PageCompletedHook(): Hook<IPageCompletedCb>;
    get PageRenderStartedHook(): Hook<IPageRenderStartedCb>;
    get DisplayHook(): Hook<DisplayHookCb>;
    constructor({ context, doryInstanceName, operatorCollection }: {
        context: ContextManager;
        doryInstanceName?: string;
        operatorCollection: IRendererOperatorCollection;
    });
    Render({ pjsonPath, compParentInst, storeItems, pageId, pageName, pjsonContent, options, theme }: {
        pjsonPath?: string;
        compParentInst?: any;
        storeItems?: IDictionary<any>;
        pageId?: string;
        pageName?: string;
        pjsonContent?: IQJSon;
        options?: INavigationOptions;
        theme?: {
            name: string;
            isLight: boolean;
        };
    }): Promise<void>;
    CreateChildRenderer(compUIDPrefix?: string): DoryRendererChild;
    SetLRType(LRType?: string): void;
    GetLRType(): string;
    SetConfigValues(configValues?: IConfig[]): void;
    SetGlobalLRDict(GlobalLRDict?: ILRID): void;
    SetSiteSettings(siteSettings: ISiteSettings): void;
    SetPlatformType(platformType: PlatformType): void;
    SetDisplayCallBack(callBackFunc: DisplayHookCb): void;
    SetPartialDisplayCallBack(callBackFunc: PartialDisplayHookCb): void;
    GetNavigationDemand(pageId: string): INavigationDemand | null;
    GoHistory(navigationDemand: INavigationDemand): void;
    GetCurrentHistoryItem(): import("../../../shrimp/interfaces/RenderingInterfaces/IHistoryItem").IHistoryItem | null | undefined;
    Back(): void;
    Forward(): void;
    Clear(): void;
    Hibernate(): void;
    CheckComponent({ compName }: {
        compName: string;
    }): Promise<any> | undefined;
    GetComponentCollection(): Record<string, import("../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection").IComponentCollection> | null;
    private getPageName;
    Trigger(eventName: string, parameters: Record<string, any>): any;
    SetEditMode(state: boolean): void;
    SetThemeName(theme: {
        isLight: boolean;
        name: string;
    }): void;
    SetThemes(themes: ITheme[]): void;
    SetThemeMode(isLight: boolean): void;
}
export declare class DoryRenderer extends Renderer implements IDoryRenderer {
    get DoryInst(): IDory;
    getContextItem<contextItemType extends IContextItem>(contextItemName: string): contextItemType | undefined;
}
//# sourceMappingURL=Renderer.d.ts.map