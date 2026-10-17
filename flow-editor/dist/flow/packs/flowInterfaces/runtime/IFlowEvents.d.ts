import { IThreadStepInfo } from "./IThreadStepInfo";
interface IStepTarget {
    ID: string;
    inputName: string;
}
export interface IStepExitBase {
    fromStep: IThreadStepInfo;
    threadId: string;
}
export interface IStepExitJump extends IStepExitBase {
    type: "jump";
    stepTo: IStepTarget;
}
export interface IStepExitNext extends IStepExitBase {
    type: "next";
    outputName: string;
    stepTo?: IStepTarget;
    stepsTo?: Array<IStepTarget & {
        tid: string;
    }>;
}
export interface IStepExitPause extends IStepExitBase {
    type: "pause";
}
export interface IStepExitStop extends IStepExitBase {
    type: "stop";
}
export interface IStepExitFail extends IStepExitBase {
    type: "fail";
    error: Error;
}
export interface IStepExitCancel extends IStepExitBase {
    type: "cancel";
    error: Error;
}
export type IStepExitParam = IStepExitJump | IStepExitNext | IStepExitStop | IStepExitFail | IStepExitPause | IStepExitCancel;
export interface IStepEnterParam {
    step: IThreadStepInfo;
    stepName: string;
    stepVersion: string;
    flowId: string;
    threadId: string;
    depth?: number;
}
export interface IFlowEvents {
    onBeforeStepEnter?: (info: IStepEnterParam) => Promise<void>;
    onAfterStepExit?: (transition: IStepExitParam) => Promise<void | "handled">;
}
export {};
//# sourceMappingURL=IFlowEvents.d.ts.map