import { ITheme } from "@stechquick/algae/lib/quick/ITheme";
import { IContextItem } from "../../context";
import { Hook } from "../../helpers/hook";
import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
import { ILRID } from "../ComponentInterfaces/ILocalResource";
import { IQJSon } from "../ComponentInterfaces/IQJson";
import { IDictionary } from "../IDictionary";
import { IConfig } from "../quick/IConfig";
import { INavigationDemand } from "../quick/INavigationDemand";
import { ISiteSettings } from "../quick/ISiteSettings";
import { DisplayHookCb, IDory, PartialDisplayHookCb } from "./IDory";
import { IDoryJr } from "./IDoryJr";
import { IHistoryItem } from "./IHistoryItem";
import { IPageCompletedCb, IPageRenderStartedCb } from "./ILifeCycleCb";
export interface IRendererChild {
    Render(options: {
        qjson: IQJSon;
        props?: Record<string, any>;
        events?: Record<string, Function>;
        compParentInst: any;
        storeItems?: Record<string, any>;
        pageId?: string;
        pageName?: string;
        noHistory?: boolean;
    }): Promise<void>;
    SetCallbackDisplay(callBackFunc: PartialDisplayHookCb): void;
}
export interface IDoryRendererChild extends IRendererChild {
    readonly DoryJrInst: IDoryJr;
}
export interface IRenderer {
    GetCurrentHistoryItem(): IHistoryItem | null | undefined;
    PageCompletedHook: Hook<IPageCompletedCb>;
    PageRenderStartedHook: Hook<IPageRenderStartedCb>;
    readonly BeforeRenderStartHook: Hook<() => void>;
    DisplayHook: Hook<DisplayHookCb>;
    settingsQJsons: ISettingsQJsonContext;
    Render({ pjsonPath, compParentInst, storeItems, pageId, pageName, pjsonContent, theme }: {
        pjsonPath?: string;
        compParentInst?: any;
        storeItems?: IDictionary<any>;
        pageId?: string;
        pageName?: string;
        pjsonContent?: any;
        theme?: {
            name: string;
            isLight: boolean;
        };
    }): void;
    Back(): void;
    Forward(): void;
    Clear(): void;
    SetDisplayCallBack(callBackFunc: DisplayHookCb): void;
    SetPartialDisplayCallBack(callBackFunc: PartialDisplayHookCb): void;
    GetLRType(): string;
    SetLRType(LRType: string): void;
    SetGlobalLRDict(GlobalLRDict: ILRID): void;
    SetSiteSettings(siteSettings: ISiteSettings): void;
    GetNavigationDemand(pageId?: string): INavigationDemand | null;
    GoHistory(navigationDemand: INavigationDemand): void;
    CreateChildRenderer(compUIDPrefix?: string): IRendererChild;
    CheckComponent({ compName }: {
        compName: string;
    }): Promise<any> | undefined;
    GetComponentCollection(): Record<string, IComponentCollection> | null;
    Trigger(eventName: string, parameters?: Record<string, any>): any;
    SetEditMode(state: boolean): void;
    Hibernate(): void;
    SetConfigValues(configValues?: IConfig[]): void;
    SetThemeName(theme: {
        isLight: boolean;
        name: string;
    }): void;
    SetThemes(themes: Array<ITheme>): void;
    SetThemeMode(isLight: boolean): void;
}
export interface ISettingsQJsonContext extends IContextItem {
    PipelineChangeHook: Hook<() => void>;
    AlertChangeHook: Hook<() => void>;
    SetPipelineQjson(qjson: IQJSon): Promise<void>;
    GetPipelineQjson(): IQJSon | undefined;
    TriggerPipeline(methodName: string, methodArgs: Record<string, any>): void;
    RerenderPipelineQjson(): Promise<void> | undefined;
    SetAlertQjson(qjson: IQJSon): void;
    GetAlertQjson(): IQJSon | undefined;
    GetLoadingQjson(): IQJSon | undefined;
    SetLoadingQjson(qjson: IQJSon): void;
    SetGlobalLocalizationQjson(qJson: IQJSon): void;
}
export interface IDoryRenderer extends IRenderer {
    readonly DoryInst: IDory;
    getContextItem<contextItemType extends IContextItem>(contextItemName: string): contextItemType | undefined;
}
//# sourceMappingURL=IRenderer.d.ts.map