import { ContextManager } from "../../shrimp/context";
import { Hook } from "../../shrimp/helpers/hook";
import { IComponentCollection } from "../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IExternalEvents } from "../../shrimp/interfaces/ComponentInterfaces/IExternalEvents";
import { IExternalProp } from "../../shrimp/interfaces/ComponentInterfaces/IExternalProp";
import { IQJSon } from "../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { IDictionary } from "../../shrimp/interfaces/IDictionary";
import { INavigationDemand, INavigationDemandType } from "../../shrimp/interfaces/quick/INavigationDemand";
import { IDomElement } from "../../shrimp/interfaces/RenderingInterfaces/IDomElement";
import { IGoHistoryOptions, PartialDisplayHookCb } from "../../shrimp/interfaces/RenderingInterfaces/IDory";
import { IDoryJr } from "../../shrimp/interfaces/RenderingInterfaces/IDoryJr";
import { IPageJrCompletedCb } from "../../shrimp/interfaces/RenderingInterfaces/ILifeCycleCb";
import { HistoryItem } from "./Model/History/HistoryItem";
export declare class DoryJr implements IDoryJr {
    static ContextName: string;
    contextName: string;
    private contextJr;
    private subMessaging;
    private displayHook;
    PageJrCompletedHook: Hook<IPageJrCompletedCb>;
    constructor(contextJr: ContextManager);
    delayTillPostDisplay(cb: () => void): void;
    setCallbackDisplay(callBackFunc: PartialDisplayHookCb): void;
    Render({ qjson, props, events, compParentInst, storeItems, pageId, pageName, noHistory, children }: {
        qjson: IQJSon;
        props?: IDictionary<any>;
        events?: IDictionary<Function>;
        compParentInst: any;
        storeItems?: IDictionary<any>;
        pageId: string;
        pageName?: string;
        noHistory?: boolean;
        children?: Record<string, Array<unknown>>;
    }): Promise<void>;
    CallRender(historyItem: HistoryItem, navigationDirection?: INavigationDemandType): void;
    private PageCompleted;
    getComponentCollectionByDom({ element, deep }: {
        element: IDomElement;
        deep?: boolean;
    }): IComponentCollection | undefined;
    getComponentCollectionByIdProperty({ id, deep }: {
        id: string;
        deep: boolean;
    }): IComponentCollection | undefined;
    Destroy(): void;
    Update(): void;
    /**
     * Get custom events from sub component's on Messaging
     */
    GetMethods(): IDictionary<Function> | undefined;
    /**
     * Get custom created props from sub component's on Messaging
     */
    GetProps(): Array<IExternalProp> | undefined;
    GetEvents(): Array<IExternalEvents> | undefined;
    hasHistory(pageId: string, checkExternalRouter?: {
        currPageId: string;
    }): INavigationDemand | null;
    searchTargetHistoryManager({ pageId }: {
        pageId: string;
    }): {
        ownerHistoryManager: import("../../shrimp/interfaces/quick/IHistoryManager").IHistoryManager;
        pageId: string;
    } | null;
    checkIfHistoryExist(navigationDemand: INavigationDemand): boolean;
    goHistory(options: IGoHistoryOptions): void;
    private goHistoryBack;
    private goHistoryForward;
    get ContextJr(): ContextManager;
    GetLastHistory(): HistoryItem | undefined;
    GetComponentList(): IComponentCollection[] | undefined;
    GetComponentCollection(): Record<string, IComponentCollection> | undefined;
    private GetPreviousHistory;
    GetAdditionals<T>({ targetHistoryItem }: {
        targetHistoryItem?: "last" | "previous";
    }): T | undefined;
    SetAdditionals<T>({ additionals, targetHistoryItem }: {
        additionals: T;
        targetHistoryItem?: "last" | "previous";
        merge?: boolean;
    }): void;
}
//# sourceMappingURL=DoryJr.d.ts.map