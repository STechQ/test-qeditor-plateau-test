import { IFlowEditorState } from "../../../../flowInterfaces/editor/IFlowEditorState";
import { DependencyContainer } from "../../domain/core/diContainer";
import { IModifiedStatus } from "../../domain/core/IStartUp";
import { IDrawArea } from "../../domain/infrastructure/IDrawArea";
import { IHistory } from "../../domain/useCase/IHistory";
import { IState } from "../../domain/useCase/IState";
import { IViewModel } from "../../domain/viewModel/IViewModel";
export declare class StateImpl implements IState {
    private readonly drawArea;
    private readonly viewModel;
    private readonly history;
    constructor(container: DependencyContainer, drawArea?: IDrawArea, viewModel?: IViewModel, history?: IHistory);
    getState(): IFlowEditorState;
    setState(state?: IFlowEditorState): void;
    setReadonly(readonly: boolean): void;
    getEditable(): boolean;
    updateModified(status: IModifiedStatus): void;
}
//# sourceMappingURL=stateImpl.d.ts.map