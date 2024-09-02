import { IVMHistory } from "../../../../flowInterfaces/editor/IFlowEditorState";
import { DependencyContainer } from "../../domain/core/diContainer";
import { IHistory } from "../../domain/useCase/IHistory";
import { IImportExport } from "../../domain/useCase/IImportExport";
import { IState } from "../../domain/useCase/IState";
import { IViewModel } from "../../domain/viewModel/IViewModel";
export declare class HistoryImpl implements IHistory {
    private readonly viewModel;
    private readonly importExport;
    private readonly state;
    private hm;
    constructor(container: DependencyContainer, viewModel?: IViewModel, importExport?: () => IImportExport, state?: () => IState);
    addHistory(options?: {
        consecutivePreventKey?: string;
    }): void;
    canUndo(): boolean;
    canRedo(): boolean;
    undo(): Promise<boolean>;
    redo(): Promise<boolean>;
    preventHistory(cb: () => Promise<void> | void): void;
    getState(): IVMHistory;
    setState(history?: IVMHistory): void;
    private do;
    private updateStatus;
}
//# sourceMappingURL=historyImpl.d.ts.map