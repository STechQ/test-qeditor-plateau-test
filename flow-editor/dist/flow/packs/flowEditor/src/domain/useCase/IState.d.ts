import { Store } from "../../../../../../common/everything/store/designtimemodels/IStoreModel";
import { IFlowEditorState } from "../../../../flowInterfaces/editor/IFlowEditorState";
import { IModifiedStatus } from "../../../../flowInterfaces/editor/common/IModifiedStatus";
export interface IState {
    getState(): IFlowEditorState;
    setState(state?: IFlowEditorState): void;
    setSchema(schema: Store): void;
    setReadonly(readonly: boolean): void;
    setFuncType(flowType: "flow" | "workflow" | "befunc"): void;
    getEditable(): boolean;
    updateModified(status: IModifiedStatus): void;
    centerSelectedStep(): void;
}
export declare const IState: unique symbol;
//# sourceMappingURL=IState.d.ts.map