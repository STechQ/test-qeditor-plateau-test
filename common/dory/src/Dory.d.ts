import { ITheme } from "@stechquick/algae/lib/quick/ITheme";
import { ContextManager } from "../../shrimp/context";
import { Hook } from "../../shrimp/helpers/hook";
import { IComponentCollection } from "../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { ILRID } from "../../shrimp/interfaces/ComponentInterfaces/ILocalResource";
import { IQJSon } from "../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { IAssetList } from "../../shrimp/interfaces/ComponentInterfaces/IStyle";
import { IDictionary } from "../../shrimp/interfaces/IDictionary";
import { IConfig } from "../../shrimp/interfaces/quick/IConfig";
import { IEditorInstance } from "../../shrimp/interfaces/quick/IEditorInstance";
import { IRegionalDefinition } from "../../shrimp/interfaces/quick/IFormattingDefinition";
import { INavigationDemand, INavigationDemandType } from "../../shrimp/interfaces/quick/INavigationDemand";
import { PlatformType } from "../../shrimp/interfaces/quick/IPlatform";
import { IQError } from "../../shrimp/interfaces/quick/IQError";
import { IShellConfiguration } from "../../shrimp/interfaces/quick/IShellConfiguration";
import { ISiteSettings } from "../../shrimp/interfaces/quick/ISiteSettings";
import { IStore } from "../../shrimp/interfaces/quick/IStore";
import { IDomElement } from "../../shrimp/interfaces/RenderingInterfaces/IDomElement";
import { DisplayHookCb, IDory, IGoHistoryOptions, PartialDisplayHookCb } from "../../shrimp/interfaces/RenderingInterfaces/IDory";
import { IDoryJr } from "../../shrimp/interfaces/RenderingInterfaces/IDoryJr";
import { IPageCompletedCb, IPageRenderStartedCb } from "../../shrimp/interfaces/RenderingInterfaces/ILifeCycleCb";
import { ISettingsQJsonContext } from "../../shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IRendererOperatorCollection } from "../../shrimp/interfaces/RenderingInterfaces/Operators/IRendererOperatorCollection";
import { IGlobalsQS } from "../../shrimp/interfaces/Scripting/IGlobals";
import { ScriptLang } from "../../shrimp/interfaces/Scripting/scriptLang";
import { ShellConfiguration } from "./Config/ShellConfiguration";
import { SharedStoreContext } from "./Context/Store/SharedStoreContext";
import { HistoryItem } from "./Model/History/HistoryItem";
export declare class Dory implements IDory {
    static ContextName: string;
    contextName: string;
    private context;
    private interDoryContext;
    errorInfo: IQError;
    private errorCallBack?;
    private displayHook;
    private partialDisplayHook;
    private visibilityHook;
    PageCompletedHook: Hook<IPageCompletedCb>;
    PageRenderStartedHook: Hook<IPageRenderStartedCb>;
    siteSettings: ISiteSettings | undefined;
    shellConfigs: ShellConfiguration;
    platformType: PlatformType;
    regionalConfig: Array<IRegionalDefinition> | undefined;
    isEditorInEditState: boolean;
    callBackComponentTarget: Function;
    editor: IEditorInstance | undefined;
    SettingsQJsonContext: ISettingsQJsonContext;
    private operatorCollection?;
    private _isRenderCompleted;
    get PartialDisplayHook(): Hook<PartialDisplayHookCb>;
    get DisplayHook(): Hook<DisplayHookCb>;
    get OperatorCollection(): IRendererOperatorCollection | undefined;
    private _isDark;
    get isDark(): boolean | undefined;
    set isDark(v: boolean | undefined);
    get isRenderCompleted(): boolean;
    private set isRenderCompleted(value);
    assetValues?: IAssetList;
    private themes?;
    private currentTheme?;
    constructor(interDoryContext: ContextManager);
    GetLRType(): string;
    SetLRType(LRType?: string, LRTypeRTL?: boolean): Promise<void>;
    SetConfigValues(configValues?: IConfig[]): void;
    GetConfigValues(key: string): IConfig | undefined;
    SetGlobalLRDict(GlobalLRDict?: ILRID): void;
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
    GetCurrentHistoryItem(): HistoryItem | null | undefined;
    private PageCompleted;
    private innerRender;
    private resetStyle;
    ReRender(): void;
    CallHibernate(): void;
    SetErrorCallBack(callBack: (errors: Array<IQError>) => void): void;
    SetSiteSettings(siteSettings?: ISiteSettings): void;
    SetPlatformType(platformType: PlatformType): void;
    SetSelectedProjectUrl(url: string): void;
    ReportError(errors: Array<IQError>): void;
    delayTillPostDisplay(cb: () => void): void;
    SetDisplayCallBack({ callBackFunc }: {
        callBackFunc: DisplayHookCb;
    }): void;
    SetPartialDisplayCallBack({ callBackFunc }: {
        callBackFunc: PartialDisplayHookCb;
    }): void;
    SubscribeComponentVisibility(subscribeFunc: () => void): void;
    RetrieveQJsonforDesignSide(qjsonPath: string): Promise<IQJSon | undefined>;
    GetSettingsQJsonContext(): ISettingsQJsonContext;
    get network(): import("../../shrimp/interfaces/quick/IContainerServices").INetwork;
    GetComponentList(): IComponentCollection[] | undefined;
    getComponentCollectionByIdProperty({ id, deep }: {
        id: string;
        deep: boolean;
    }): IComponentCollection | undefined;
    getComponentCollectionByDom({ element, deep }: {
        element: IDomElement;
        deep?: boolean;
    }): IComponentCollection | undefined;
    GetComponentCollectionByID(id: string): IComponentCollection | undefined;
    DestroyComponentCollectionByID(Id: string): boolean;
    GetComponentCollection(): IDictionary<IComponentCollection> | null;
    GetSubComponentCollectionByID(compId: string): IComponentCollection | null;
    GetComponentCollectionByUID(compUID: string): IComponentCollection | undefined;
    GetComponentSubCollection(): Array<IComponentCollection> | null;
    Evaluate({ script, response, lang, sourceMap }: {
        script?: string;
        response: object | null;
        lang?: ScriptLang;
        sourceMap?: string;
    }): any;
    getEvalGlobals(): IGlobalsQS;
    /**
     * Add Configuration from outside of Dory
     * @param shellConfiguration Configuration to be added into Dory's shellConfiguration field
     */
    SetShellGlobalConfiguration(shellConfigs: IShellConfiguration): void;
    GetShellConfiguration(): ShellConfiguration;
    Clear(): void;
    CallRender(historyItem: HistoryItem, navigationDirection?: INavigationDemandType, noHistory?: boolean): void;
    hasHistory(pageId: string, checkExternalRouter?: {
        currPageId: string;
    }): INavigationDemand | null;
    searchTargetHistoryManager({ pageId }: {
        pageId: string;
    }): {
        ownerHistoryManager: import("../../shrimp/interfaces/quick/IHistoryManager").IHistoryManager;
        pageId: string;
    } | null;
    goHistory(options: IGoHistoryOptions): void;
    goHistoryBack(options: IGoHistoryOptions): void;
    goHistoryForward(options: IGoHistoryOptions): void;
    getPreviousPageName(): string | undefined;
    GetLastHistory(): HistoryItem | null;
    SetEditMode(state: boolean): void;
    GetEditMode(): boolean;
    SetEditor(editor: IEditorInstance): void;
    GetEditor(): IEditorInstance | undefined;
    CreateDoryJr({ context, creatorComp, compUIDPrefix }: {
        context?: ContextManager;
        creatorComp?: IComponentCollection;
        compUIDPrefix?: string;
    }): IDoryJr;
    SetTSComponentWrapper(callBackComponentTarget: Function): void;
    GetInterDoryContext(): ContextManager;
    CloneStores(): {
        bagStore: import("../../shrimp/helpers/clonable").IClonable;
        globalStore: import("../../shrimp/helpers/clonable").IClonable;
        sharedStore: SharedStoreContext;
    };
    SetStoreKeys(stores: {
        bagStore: IStore;
        globalStore: IStore;
        sharedStore: IStore;
    }): void;
    GetPreviousHistory(): HistoryItem | null;
    GetAdditionals<T>({ targetHistoryItem }: {
        targetHistoryItem?: "last" | "previous";
    }): T | undefined;
    SetAdditionals<T>({ additionals, targetHistoryItem }: {
        additionals: T;
        targetHistoryItem?: "last" | "previous";
    }): void;
    Trigger(eventName: string, parameters?: Record<string, any>): any;
    SetOperatorCollection(operatorCollection: IRendererOperatorCollection): void;
    SetAssetValues(values?: IAssetList): void;
    GetAssetValues(): IAssetList | undefined;
    ResetStyleDict(): void;
    clearStyleTag(): void;
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
    GetThemes(): ITheme[] | undefined;
    SetThemeMode(isLight: boolean): void;
}
//# sourceMappingURL=Dory.d.ts.map