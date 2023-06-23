import { ContextManager } from "../../../../shrimp/context";
import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
import { INavigationDemand } from "../../../../shrimp/interfaces/quick/INavigationDemand";
import CustomComponent from "./CustomComponent";
export declare class RenderingComponent extends CustomComponent {
    static ComponentName: string;
    private callPartialDisplay?;
    constructor({ props, events, parent, context }: {
        props: IDictionary<Object>;
        events: IDictionary<Function>;
        parent: any;
        context: ContextManager;
    });
    RenderGo(path: string): void;
    HasHistory(pageId: string): INavigationDemand | null | undefined;
    searchTargetHistoryManager(pageId: string): {
        ownerHistoryManager: import("../../../../shrimp/interfaces/quick/IHistoryManager").IHistoryManager;
        pageId: string;
    } | null | undefined;
    GoHistory(navigationDemand: INavigationDemand): boolean;
    private beforeRootPathChange;
}
//# sourceMappingURL=RenderingComponent.d.ts.map