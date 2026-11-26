import { FlowEvents } from "../../types";
import { InteractiveDropdownItem } from "../helper/drawHelper";
import { EventHelper } from "../helper/eventHelper";
import { FlowObjectBase } from "../objects/flowObjectBase";
import { ZuiManager } from "./zuiManager";
import { Vector } from "two.js/src/vector";
export declare class SelectionManager {
    private readonly eventHelper;
    private selecteds;
    private selectionOverlays;
    private redrawFrame?;
    constructor(eventHelper: EventHelper<FlowEvents>);
    zuiManager?: ZuiManager;
    clearSelection(): void;
    addSelected(object: FlowObjectBase): void;
    clearSelected(deletedObj: FlowObjectBase): void;
    setSelection(objects: Array<FlowObjectBase>): void;
    isSelected(object: FlowObjectBase): boolean;
    get hasSelected(): boolean;
    map<TMapped>(cb: (selected: FlowObjectBase) => TMapped): TMapped[];
    iterate(cb: (selected: FlowObjectBase) => void): void;
    getSelecteds(): FlowObjectBase[];
    redrawSelections(defer?: boolean): void;
    moveSelectionOverlays(objects: Array<FlowObjectBase>, clientMovement: Vector): void;
    createInteractiveDropdownMenu(event: MouseEvent, interactiveDropdownItems: Array<InteractiveDropdownItem>, requireSelection?: boolean): void;
    private removeSelectionDelete;
    private triggerSelectionChange;
    setStepID(oldID: string, newID: string): void;
}
//# sourceMappingURL=selectionManager.d.ts.map