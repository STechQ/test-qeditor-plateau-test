import { PropValue } from "@stechquick/flow-interfaces/runtime";
import { ISwitchCaseExp } from "../../../common/everything/flow/runtimeModels/ISwitch";
import { IFlowState } from "../flowInterfaces/editor/IFlowEditorState";
import { IInputInfo } from "../flowInterfaces/editor/IStepOptions";
import { IPoint } from "../flowInterfaces/editor/shape/IPoint";
export interface IFlowStepOptions {
    outputs: Array<string>;
    inputs: Array<IInputInfo>;
    icon?: string;
    color?: string;
    errors?: PropValue;
}
export interface IFlowStepProps {
    label?: string;
    name?: string;
    swimlaneId?: string;
    errors?: Array<string>;
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
    label?: string;
    description?: string;
    errors?: Array<string>;
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
    onRename(stepId: string, oldName: string, newName: string): void;
    changeOutput(connectionId: string, outputName: string): void;
    editOutput(stepId: string, outputName: string, x: number, y: number): void;
};
export interface IDrawArea {
    readonly rootElement: HTMLElement;
    attach(element: HTMLElement): void;
    detach(): void;
    updateSwimlanes(steps: Array<IFlowStepSwimlane>, swimlanes: Array<ISwimlaneExport>): void;
    updateSteps(steps: Array<IFlowStepUpdate>): void;
    addAllSwitchCases(switchCase: ISwitchCaseExp): void;
    addFlowStep(stepName: string, clientPoint: IPoint, options: IFlowStepOptions, props?: IFlowStepProps, id?: string): string;
    deleteFlowSteps(stepIDs: Array<string>): void;
    panBy(dx: number, dy: number): void;
    resetPanAndZoom(): void;
    subscribe<K extends keyof FlowEvents>(eventName: K, cb: FlowEvents[K]): void;
    unsubscribe<K extends keyof FlowEvents>(eventName: K): void;
    copyObjects(objectIDs: Array<string>): IFlowCopy;
    pasteObjects(copyData: IFlowCopy): Record<string, string>;
    exportObjects(): IFlowExport;
    importObjects(model: IFlowExport, undoRedo?: boolean): void;
    getState(): IFlowState;
    setState(state?: IFlowState): void;
    setReadonly(readonly: boolean): void;
    setStepOutputs(stepID: string, outputs: Array<string>): void;
    setStepID(oldId: string, newId: string): void;
    centerSelectedStep(): void;
    changeOutputName(stepId: string, oldName: string, newName: string): void;
}
//# sourceMappingURL=types.d.ts.map