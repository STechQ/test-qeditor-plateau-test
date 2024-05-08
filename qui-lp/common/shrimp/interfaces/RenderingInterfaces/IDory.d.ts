import { ContextManager, IContextItem } from "../../context";
import { Hook } from "../../helpers/hook";
import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
import { ILRID } from "../ComponentInterfaces/ILocalResource";
import { IQJSon } from "../ComponentInterfaces/IQJson";
import { IDictionary } from "../IDictionary";
import { INetwork } from "../quick/IContainerServices";
import { IEditorInstance } from "../quick/IEditorInstance";
import { IHistoryManager } from "../quick/IHistoryManager";
import { INavigationDemand, INavigationDemandType } from "../quick/INavigationDemand";
import { PlatformType } from "../quick/IPlatform";
import { IQError } from "../quick/IQError";
import { IShellConfiguration } from "../quick/IShellConfiguration";
import { ISiteSettings } from "../quick/ISiteSettings";
import { IDomElement } from "../RenderingInterfaces/IDomElement";
import { IGlobalsQS } from "../Scripting/IGlobals";
import { ScriptLang } from "../Scripting/scriptLang";
import { IDoryJr } from "./IDoryJr";
import { IHistoryItem } from "./IHistoryItem";
import { IPageCompletedCb, IPageRenderStartedCb } from "./ILifeCycleCb";
import { ISettingsQJsonContext } from "./IRenderer";
import { IRendererOperatorCollection } from "./Operators/IRendererOperatorCollection";
import { IStore } from "../quick/IStore";
import { IAssetList } from "../ComponentInterfaces/IStyle";
import { IConfig } from "../quick/IConfig";
import { ITheme } from "@stechquick/algae/lib/quick/ITheme";
export declare type PartialDisplayHookCb = (elements: Array<IDomElement>, pageId?: string, pageName?: string, navigationDirection?: INavigationDemandType, override?: boolean, doryJr?: IDoryJr | undefined, additioanls?: any | undefined) => void;
export declare type DisplayHookCb = (elements: IDomElement[], pageId?: string, pageName?: string, navigationDirection?: INavigationDemandType, additionals?: any, noHistory?: boolean) => void;
export interface IGoHistoryOptions {
    navigationDemand?: INavigationDemand;
}
export interface IDory extends IContextItem {
    GetCurrentHistoryItem(): IHistoryItem | null | undefined;
    readonly PartialDisplayHook: Hook<PartialDisplayHookCb>;
    readonly DisplayHook: Hook<DisplayHookCb>;
    readonly network: INetwork;
    PageCompletedHook: Hook<IPageCompletedCb>;
    PageRenderStartedHook: Hook<IPageRenderStartedCb>;
    SettingsQJsonContext: ISettingsQJsonContext;
    platformType: PlatformType;
    Render({ qjson, compParentInst, storeItems, pageId, pageName, theme }: {
        qjson: IQJSon;
        compParentInst?: any;
        storeItems?: IDictionary<any>;
        pageId?: string;
        pageName?: string;
        theme?: {
            name: string;
            isLight: boolean;
        };
    }): Promise<void>;
    SetDisplayCallBack({ callBackFunc }: {
        callBackFunc: DisplayHookCb;
    }): void;
    SetPartialDisplayCallBack({ callBackFunc }: {
        callBackFunc: PartialDisplayHookCb;
    }): void;
    SetStoreKeys(stores: {
        bagStore: IStore;
        globalStore: IStore;
        sharedStore: IStore;
    }): void;
    getComponentCollectionByIdProperty({ id, deep }: {
        id: string;
        deep: boolean;
    }): IComponentCollection | undefined;
    getComponentCollectionByDom({ element, deep }: {
        element: IDomElement;
        deep?: boolean;
    }): IComponentCollection | undefined;
    Evaluate({ script, response, lang, sourceMap }: {
        script?: string | object;
        response: object | null;
        lang?: ScriptLang;
        sourceMap?: string;
    }): any;
    RetrieveQJsonforDesignSide(qjsonPath: string): Promise<IQJSon | undefined>;
    SetShellGlobalConfiguration(shellConfigs: IShellConfiguration): void;
    Clear(): void;
    searchTargetHistoryManager({ pageId }: {
        pageId?: string;
    }): {
        ownerHistoryManager: IHistoryManager;
        pageId: string;
    } | null;
    goHistoryBack(options?: IGoHistoryOptions): void;
    goHistoryForward(options?: IGoHistoryOptions): void;
    SetEditMode(state: boolean): void;
    GetEditMode(): boolean;
    CreateDoryJr(options: {
        context?: ContextManager;
        creatorComp?: IComponentCollection;
        compUIDPrefix?: string;
    }): IDoryJr;
    GetComponentCollection(): Record<string, IComponentCollection> | null;
    GetComponentList(): Array<IComponentCollection> | undefined;
    SetErrorCallBack(callBack: (errors: Array<IQError>) => void): void;
    GetComponentSubCollection(): Array<IComponentCollection> | null;
    GetComponentCollectionByID(id: string): IComponentCollection | undefined;
    DestroyComponentCollectionByID(Id: string): boolean;
    delayTillPostDisplay(cb: () => void): void;
    SubscribeComponentVisibility(subscribeFunc: () => void): void;
    hasHistory(pageName: string, checkExternalRouter?: {
        currPageId: string;
    }): INavigationDemand | null;
    goHistory(options: IGoHistoryOptions): void;
    getPreviousPageName(): string | undefined;
    SetTSComponentWrapper(callBackComponentTarget: Function): void;
    SetLRType(LRType?: string, LRTypeRTL?: boolean): void;
    SetConfigValues(configValues?: IConfig[]): void;
    GetLRType(): string;
    CallHibernate(): void;
    SetGlobalLRDict(GlobalLRDict?: ILRID): void;
    SetSiteSettings(siteSettings?: ISiteSettings): void;
    SetPlatformType(platformType: PlatformType): void;
    SetSelectedProjectUrl(url: string): void;
    getEvalGlobals(): IGlobalsQS;
    GetSubComponentCollectionByID(compId: string): IComponentCollection | null;
    SetEditor(instance: IEditorInstance): void;
    GetEditor(): IEditorInstance | undefined;
    GetLastHistory(): IHistoryItem | null;
    GetAdditionals<T>(options: {
        targetHistoryItem?: "last" | "previous";
    }): T | undefined;
    SetAdditionals<T>(options: {
        additionals: T;
        targetHistoryItem?: "last" | "previous";
    }): void;
    GetPreviousHistory(): IHistoryItem | null;
    Trigger(eventName: string, parameters: Record<string, any>): any;
    SetOperatorCollection(operatorCollection: IRendererOperatorCollection): void;
    GetComponentCollectionByUID(compUID: string): IComponentCollection | undefined;
    GetSettingsQJsonContext(): ISettingsQJsonContext;
    GetShellConfiguration(): IShellConfiguration;
    SetAssetValues(assetValues?: IAssetList): void;
    GetAssetValues(): IAssetList | undefined;
    ResetStyleDict(): void;
    DeleteStyleSelector(compCollection: IComponentCollection, stylePropName: string, breakPoint?: string): void;
    DeleteStyleCompCollection(compCollection: IComponentCollection): void;
    SetThemeName(theme: {
        isLight: boolean;
        name: string;
    }): void;
    SetThemes(themes: Array<ITheme>): void;
    GetCurrentTheme(): {
        isLight: boolean;
        name: string;
    } | undefined;
    GetThemes(): Array<ITheme> | undefined;
    SetThemeMode(isLight: boolean): void;
}
export declare const DoryContextName = "Dory";
//# sourceMappingURL=IDory.d.ts.map