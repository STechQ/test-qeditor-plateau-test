import { Context } from "../core/context";
export declare class InteractionManager {
    private readonly objectManager;
    private readonly zuiManager;
    private readonly selectionManager;
    private readonly eventHelper;
    private readonly stateManager;
    private element?;
    private events;
    constructor(context: Context, objectManager?: import("./objectManager").ObjectManager, zuiManager?: import("./zuiManager").ZuiManager, selectionManager?: import("./selectionManager").SelectionManager, eventHelper?: import("../helper/eventHelper").EventHelper<import("../../types").FlowEvents>, stateManager?: () => import("./stateManager").StateManager);
    attach(element: HTMLElement): void;
    detach(): void;
    private mouse?;
    private preventContext;
    private itemsMoved;
    private interactiveDropdownItems;
    private mouseDown;
    private mouseMove;
    private mouseUp;
    private wheel;
    private contextMenu;
}
//# sourceMappingURL=interactionManager.d.ts.map