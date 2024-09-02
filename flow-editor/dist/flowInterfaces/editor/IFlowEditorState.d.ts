/// <reference types="node" />
import { IFlowDesignModel } from "./IFlowDesignModel";
export interface IFlowState {
    surfaceMatrix: {
        elements: Array<Number>;
        manual: boolean;
    };
    selectedIDs: Array<string>;
}
export interface IVMHistory {
    preventHistory: boolean;
    items: Array<IFlowDesignModel>;
    current: number;
    latest: number;
    earliest: number;
    consecutivePreventKey: string | undefined;
    throttledID: NodeJS.Timeout | undefined;
}
export interface IFlowEditorState {
    draw: IFlowState;
    history: IVMHistory;
}
//# sourceMappingURL=IFlowEditorState.d.ts.map