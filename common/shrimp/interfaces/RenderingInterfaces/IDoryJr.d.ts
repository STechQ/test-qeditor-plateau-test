import { IContextItem } from "../../context";
import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
import { IExternalEvents } from "../ComponentInterfaces/IExternalEvents";
import { IExternalProp } from "../ComponentInterfaces/IExternalProp";
import { IQJSon } from "../ComponentInterfaces/IQJson";
import { Hook } from "../../helpers/hook";
import { IDictionary } from "../IDictionary";
import { IHistoryManager } from "../quick/IHistoryManager";
import { INavigationDemand } from "../quick/INavigationDemand";
import { IDomElement } from "./IDomElement";
import { PartialDisplayHookCb, IGoHistoryOptions } from "./IDory";
import { IHistoryItem } from "./IHistoryItem";
import { IPageJrCompletedCb } from "./ILifeCycleCb";
export interface IDoryJr extends IContextItem {
    PageJrCompletedHook: Hook<IPageJrCompletedCb>;
    Render(options: {
        qjson: IQJSon;
        props?: IDictionary<any>;
        events?: IDictionary<Function>;
        compParentInst: any;
        storeItems?: IDictionary<any>;
        pageId?: string;
        pageName?: string;
        children?: Record<string, Array<unknown>>;
        noHistory?: boolean;
    }): Promise<void>;
    GetMethods(): IDictionary<Function> | undefined;
    GetProps(): Array<IExternalProp> | undefined;
    GetEvents(): Array<IExternalEvents> | undefined;
    Destroy(): void;
    Update(): void;
    setCallbackDisplay(callBackFunc: PartialDisplayHookCb): void;
    delayTillPostDisplay(cb: () => void): void;
    getComponentCollectionByDom({ element, deep }: {
        element: IDomElement;
        deep?: boolean;
    }): IComponentCollection | undefined;
    getComponentCollectionByIdProperty({ id, deep }: {
        id: string;
        deep: boolean;
    }): IComponentCollection | undefined;
    hasHistory(pageId: string, checkExternalRouter?: {
        currPageId: string;
    }): INavigationDemand | null;
    checkIfHistoryExist(navigationDemand: INavigationDemand): boolean;
    goHistory(options: IGoHistoryOptions): void;
    searchTargetHistoryManager({ pageId }: {
        pageId: string;
    }): {
        ownerHistoryManager: IHistoryManager;
        pageId: string;
    } | null;
    GetLastHistory(): IHistoryItem | undefined;
    GetComponentCollection(): Record<string, IComponentCollection> | undefined;
    GetComponentList(): IComponentCollection[] | undefined;
    GetAdditionals<T>(options: {
        targetHistoryItem?: "last" | "previous";
    }): T | undefined;
    SetAdditionals<T>(options: {
        additionals: T;
        targetHistoryItem?: "last" | "previous";
    }): void;
}
//# sourceMappingURL=IDoryJr.d.ts.map