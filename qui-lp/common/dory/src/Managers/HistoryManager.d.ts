import { ContextManager, IContextItem } from "../../../shrimp/context";
import { IHistoryManager } from "../../../shrimp/interfaces/quick/IHistoryManager";
import { INavigationDemand } from "../../../shrimp/interfaces/quick/INavigationDemand";
import { DoryLikeData } from "../Model/History/DoryLikeData";
import { HistoryItem } from "../Model/History/HistoryItem";
export declare class HistoryManager implements IHistoryManager, IContextItem {
    static ContextName: string;
    contextName: string;
    HistoryLevels: Array<HistoryLevel>;
    CurrentLevelIndex: number;
    context: ContextManager;
    doryLike: DoryLikeData;
    private rootHMCache?;
    constructor(context: ContextManager, doryLike: DoryLikeData);
    GetCreaterComp(): import("../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection").IComponentCollection | undefined;
    currentLevel(): HistoryLevel;
    addLevel(): void;
    isCurrentlyOnLightbox(): boolean;
    dropLevel(): HistoryItem | null;
    /**
     * @param callback
     * @param traverseBeginLevelIndex
     * traverse from this level downwards or null for all levels
     */
    traverseLevelsUpwards(callback: Function, traverseBeginLevelIndex: number): void;
    getLastHistoryOnLevel(levelIndex: number): HistoryItem | null;
    AddTempHistory_delete(historyItem: HistoryItem): void;
    RemoveTempHistory_delete(): void;
    /**
     * * Add a history item for back support
     * @param historyItem: Item to be added to history
     * type="HistoryItem"
     * value="new HistoryItem()"
     */
    AddHistory(historyItem: HistoryItem): void;
    Forward(options: INavigationDemand): void;
    Back(options: INavigationDemand): void;
    /**
     * @param typeName GetControlWithTypeName
     * @param levelIndex Which index of level will be searched. undefined for CurrentLevel
     * @returns ComponentCollection | null
     */
    GetComponentByType(typeName: string, levelIndex?: number): import("../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection").IComponentCollection | null;
    ClearHistory(): void;
    checkIfHistoryExist(options: INavigationDemand): boolean;
    hasHistory(pageId: string): INavigationDemand | null;
    searchTargetHistoryManager({ pageId }: {
        pageId: string;
    }): {
        ownerHistoryManager: IHistoryManager;
        pageId: string;
    } | null;
    getNavDemand(pageId: string): INavigationDemand | null;
    getCreaterRenderingComponent(): import("../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection").IComponentCollection | undefined;
    getRootHM(): HistoryManager;
    GetCompUIDPrefix(): string;
    static traverseUpwards(retVal: Array<string>, historyItem: HistoryItem | null | undefined): Array<string>;
}
declare class HistoryLevel {
    HistoryItems: Array<HistoryItem>;
    FutureItems: Array<HistoryItem>;
    private MomentaryItem?;
    constructor();
    /**
     * clear future on every new action
     * @param historyItem
     */
    addHistory(historyItem: HistoryItem): void;
    destroy(): void;
    historyItems(): HistoryItem[];
    futureItems(): HistoryItem[];
    last(): HistoryItem | null;
    setMomentaryItem(momentaryItem: HistoryItem): void;
    previous(): HistoryItem | null;
    checkIfHistoryExist(options: INavigationDemand): {
        historyExist: boolean;
        step?: undefined;
    } | {
        historyExist: boolean;
        step: number;
    };
    back(options: INavigationDemand): {
        old: HistoryItem[];
        new: HistoryItem | null;
    } | undefined;
    forward(options: INavigationDemand): {
        old: HistoryItem[];
        new: HistoryItem;
    } | undefined;
    private destroyer;
}
export {};
//# sourceMappingURL=HistoryManager.d.ts.map