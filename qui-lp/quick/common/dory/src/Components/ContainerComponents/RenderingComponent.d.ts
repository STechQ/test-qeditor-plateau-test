import { ContextManager } from "../../../../shrimp/context";
import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
import { INavigationDemand } from "../../../../shrimp/interfaces/quick/INavigationDemand";
import CustomComponent from "./CustomComponent";
export interface IRenderGoOptions {
    /** Headers sent with the page request. Not sent for nested pages or when the page is already cached. */
    headers?: IDictionary<string>;
    /** Runs the pipeline's onBeforeRequest before the page request, so it can add headers. */
    triggerBeforeRequest?: boolean;
}
export declare class RenderingComponent extends CustomComponent {
    static ComponentName: string;
    private callPartialDisplay?;
    constructor({ props, events, parent, context }: {
        props: IDictionary<Object>;
        events: IDictionary<Function>;
        parent: any;
        context: ContextManager;
    });
    RenderGo(path: string, options?: IRenderGoOptions): void;
    private createFetchOptions;
    HasHistory(pageId: string): INavigationDemand | null | undefined;
    searchTargetHistoryManager(pageId: string): {
        ownerHistoryManager: import("../../../../shrimp/interfaces/quick/IHistoryManager").IHistoryManager;
        pageId: string;
    } | null | undefined;
    GoHistory(navigationDemand: INavigationDemand): boolean;
    private beforeRootPathChange;
    protected destroyInner(): void;
}
//# sourceMappingURL=RenderingComponent.d.ts.map