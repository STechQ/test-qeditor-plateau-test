import { IVMHistory } from "../../../../flowInterfaces/editor/IFlowEditorState";
export interface IHistory {
    addHistory(options?: {
        consecutivePreventKey?: string;
    }): void;
    canUndo(): boolean;
    canRedo(): boolean;
    undo(): Promise<boolean>;
    redo(): Promise<boolean>;
    preventHistory(cb: () => void): void;
    getState(): IVMHistory;
    setState(history?: IVMHistory): void;
}
export declare const IHistory: unique symbol;
//# sourceMappingURL=IHistory.d.ts.map