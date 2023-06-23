import { IFlowState } from "../../../flowInterfaces/editor/IFlowEditorState";
import { Context } from "../core/context";
export declare class StateManager {
    private readonly zuiManager;
    private readonly selectionManager;
    private readonly objectManager;
    private _readonly;
    get editable(): boolean;
    constructor(context: Context, zuiManager?: import("./zuiManager").ZuiManager, selectionManager?: import("./selectionManager").SelectionManager, objectManager?: import("./objectManager").ObjectManager);
    getState(): IFlowState;
    setState(state?: IFlowState): void;
    setReadonly(readonly: boolean): void;
    assertEditable(): void;
}
//# sourceMappingURL=stateManager.d.ts.map