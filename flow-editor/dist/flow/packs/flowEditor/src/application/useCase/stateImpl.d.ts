import { IFlowEditorState } from "../../../../flowInterfaces/editor/IFlowEditorState";
import { IModifiedStatus } from "../../../../flowInterfaces/editor/common/IModifiedStatus";
import { DependencyContainer } from "../../domain/core/diContainer";
import { IDrawArea } from "../../domain/infrastructure/IDrawArea";
import { IHistory } from "../../domain/useCase/IHistory";
import { IState } from "../../domain/useCase/IState";
import { IViewModel } from "../../domain/viewModel/IViewModel";
import { Store } from "../../../../../../common/everything/store/designtimemodels/IStoreModel";
export declare class StateImpl implements IState {
    private readonly drawArea;
    private readonly viewModel;
    private readonly history;
    constructor(container: DependencyContainer, drawArea?: IDrawArea, viewModel?: IViewModel, history?: IHistory);
    getState(): IFlowEditorState;
    setState(state?: IFlowEditorState): void;
    setSchema(schema: Store): void;
    setReadonly(readonly: boolean): void;
    setIsWorkFlow(isWorkFlow: boolean): void;
    getEditable(): boolean;
    updateModified(status: IModifiedStatus): void;
}
//# sourceMappingURL=stateImpl.d.ts.map