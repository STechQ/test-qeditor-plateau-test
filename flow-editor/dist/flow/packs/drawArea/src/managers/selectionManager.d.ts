import { FlowEvents } from "../../types";
import { InteractiveDropdownItem } from "../helper/drawHelper";
import { EventHelper } from "../helper/eventHelper";
import { FlowObjectBase } from "../objects/flowObjectBase";
import { ZuiManager } from "./zuiManager";
export declare class SelectionManager {
    private readonly eventHelper;
    private selecteds;
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
    redrawSelections(): void;
    private interactiveDropdownHandle?;
    createInteractiveDropdownMenu(interactiveDropdownItems: Array<InteractiveDropdownItem>): void;
    private removeSelectionDelete;
    private triggerSelectionChange;
}
//# sourceMappingURL=selectionManager.d.ts.map