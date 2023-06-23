import { IFlowState } from "../flowInterfaces/editor/IFlowEditorState";
import { IInputInfo, IStepStyle } from "../flowInterfaces/editor/IStepOptions";
import { IPoint } from "../flowInterfaces/editor/shape/IPoint";
export interface IFlowStepOptions {
    outputs: Array<string>;
    inputs: Array<IInputInfo>;
    style?: IStepStyle;
}
export interface IFlowStepExport {
    ID: string;
    name: string;
    surfacePoint: IPoint;
    options: IFlowStepOptions;
}
export interface IFlowConnectionExport {
    ID: string;
    from: {
        step: string;
        output: string;
    };
    to: {
        step: string;
        input: string;
    };
}
export interface IFlowExport extends IFlowCopy {
    maxID: number;
}
export interface IFlowCopy {
    steps: Array<IFlowStepExport>;
    connections: Array<IFlowConnectionExport>;
}
export interface IFlowStepEventInfo {
    type: "step" | "connection";
    ID: string;
}
export interface IConnectEventInfo {
    ID: string;
    from: {
        step: string;
        output: string;
    };
    to: {
        step: string;
        input: string;
    };
}
export declare type FlowEvents = {
    onSelect(selecteds: Array<IFlowStepEventInfo>): void;
    onDelete(deleteds: Array<IFlowStepEventInfo>): void;
    onConnect(connection: IConnectEventInfo): void;
    onMoveSteps(movedSteps: Array<string>): void;
    onPan(): void;
    onZoom(): void;
};
export interface IDrawArea {
    readonly rootElement: HTMLDivElement;
    attach(element: HTMLElement): void;
    detach(): void;
    addFlowStep(stepName: string, clientPoint: IPoint, options: IFlowStepOptions): string;
    deleteFlowSteps(stepIDs: Array<string>): void;
    panBy(dx: number, dy: number): void;
    resetPanAndZoom(): void;
    subscribe<K extends keyof FlowEvents>(eventName: K, cb: FlowEvents[K]): void;
    unsubscribe<K extends keyof FlowEvents>(eventName: K, cb: FlowEvents[K]): void;
    copyObjects(objectIDs: Array<string>): IFlowCopy;
    pasteObjects(copyData: IFlowCopy): Record<string, string>;
    exportObjects(): IFlowExport;
    importObjects(model: IFlowExport): void;
    getState(): IFlowState;
    setState(state?: IFlowState): void;
    setReadonly(readonly: boolean): void;
    setStepOutputs(stepID: string, outputs: Array<string>): void;
}
//# sourceMappingURL=types.d.ts.map