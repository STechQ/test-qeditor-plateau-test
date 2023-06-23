import { FlowEvents } from "../../types";
import { ZuiManager } from "../managers/zuiManager";
import { ObjectManager } from "../managers/objectManager";
import { InteractionManager } from "../managers/interactionManager";
import { SelectionManager } from "../managers/selectionManager";
import { EventHelper } from "../helper/eventHelper";
import { OverlayManager } from "../managers/overlayManager";
import { StateManager } from "../managers/stateManager";
export declare class Context {
    readonly eventHelper: EventHelper<FlowEvents>;
    readonly selectionManager: SelectionManager;
    readonly zuiManager: ZuiManager;
    readonly objectManager: ObjectManager;
    readonly interactionManager: InteractionManager;
    readonly overlayManager: OverlayManager;
    readonly stateManager: StateManager;
    constructor();
}
//# sourceMappingURL=context.d.ts.map