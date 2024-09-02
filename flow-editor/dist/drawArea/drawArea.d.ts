import { IPoint } from "../flowInterfaces/editor/shape/IPoint";
import { FlowEvents, IDrawArea, IFlowCopy, IFlowExport, IFlowStepOptions } from "./types";
import { IFlowState } from "../flowInterfaces/editor/IFlowEditorState";
export declare class DrawArea implements IDrawArea {
    private readonly context;
    constructor();
    get rootElement(): HTMLDivElement;
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
//# sourceMappingURL=drawArea.d.ts.map