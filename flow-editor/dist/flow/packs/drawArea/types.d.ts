import { IExpressionData } from "../../../common/everything/dataType/runtimemodels/IExpression";
import { ISwitchCaseExp } from "../../../common/everything/flow/runtimeModels/ISwitch";
import { IFlowState } from "../flowInterfaces/editor/IFlowEditorState";
import { IInputInfo } from "../flowInterfaces/editor/IStepOptions";
import { IPoint } from "../flowInterfaces/editor/shape/IPoint";
export interface IFlowStepOptions {
    outputs: Array<string>;
    inputs: Array<IInputInfo>;
    icon?: string;
    color?: string;
}
export interface IFlowStepProps {
    label?: IExpressionData;
    description?: string;
    swimlaneId?: string;
}
export interface IFlowStepExport extends IFlowStepProps {
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
export interface ISwimlaneExport {
    ID: string;
    name: string;
    type: 'string' | 'literal';
    version: string;
}
export interface IFlowCopy {
    steps: Array<IFlowStepExport>;
    connections: Array<IFlowConnectionExport>;
    swimlanes?: Array<ISwimlaneExport>;
}
export interface IFlowStepSwimlane {
    stepId?: string;
    swimlane?: string;
}
export interface IFlowStepUpdate {
    stepId?: string;
    label?: IExpressionData;
    description?: string;
}
export interface IFlowStepEventInfo {
    type: "step" | "connection" | "swimlane" | "operator";
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
export type FlowEvents = {
    onSelect(selecteds: Array<IFlowStepEventInfo>): void;
    onDelete(deleteds: Array<IFlowStepEventInfo>): void;
    onConnect(connection: IConnectEventInfo): void;
    onMoveSteps(movedSteps: Array<string>): void;
    onPan(): void;
    onZoom(): void;
};
export interface IDrawArea {
    readonly rootElement: HTMLElement;
    attach(element: HTMLElement): void;
    detach(): void;
    updateSwimlanes(steps: Array<IFlowStepSwimlane>, swimlanes: Array<ISwimlaneExport>): void;
    updateSteps(steps: Array<IFlowStepSwimlane>): void;
    addAllSwitchCases(switchCase: ISwitchCaseExp): void;
    addFlowStep(stepName: string, clientPoint: IPoint, options: IFlowStepOptions, props?: IFlowStepProps): string;
    deleteFlowSteps(stepIDs: Array<string>): void;
    panBy(dx: number, dy: number): void;
    resetPanAndZoom(): void;
    subscribe<K extends keyof FlowEvents>(eventName: K, cb: FlowEvents[K]): void;
    unsubscribe<K extends keyof FlowEvents>(eventName: K): void;
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