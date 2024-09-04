import { IInputInfo, IStepOptions } from "../../../../flowInterfaces/editor/IStepOptions";
import { IStepRequireInfo } from "../../../../flowInterfaces/editor/editors/IFlowEditorProgram";
import { IStepModel } from "../../../../flowInterfaces/runtime/IStepModel";
export interface IStepRepo {
    isAutoStart(stepName: string, version: string): boolean;
    isAutoStartInline(stepName: string, version: string): boolean;
    registerStep(step: IStepOptions | string, isDefault: boolean): void;
    getStep(stepName: string, version: string): IStepOptions;
    resolveStepInput(step: IStepOptions): Array<IInputInfo> | Array<IInputInfo>;
    resolveStepOutput(step: IStepOptions, props: IStepModel["P"]): Array<string>;
    gatherMissingSteps(steps: Array<IStepRequireInfo>): Promise<void>;
    getDefaultSteps(): Array<IStepOptions>;
}
export declare const IStepRepo: unique symbol;
//# sourceMappingURL=IStepRepo.d.ts.map