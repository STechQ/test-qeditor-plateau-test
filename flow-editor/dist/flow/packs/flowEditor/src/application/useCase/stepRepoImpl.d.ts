import { IStepOptions } from "../../../../flowInterfaces/editor/IStepOptions";
import { DependencyContainer } from "../../domain/core/diContainer";
import { IStepRepo } from "../../domain/useCase/IStepRepo";
import { IViewModel } from "../../domain/viewModel/IViewModel";
import { IStepModel } from "../../../../flowInterfaces/runtime/IStepModel";
import { IStepRequireInfo } from "../../../../flowInterfaces/editor/editors/IFlowEditorProgram";
export declare class StepRepoImpl implements IStepRepo {
    private readonly viewModel;
    constructor(container: DependencyContainer, viewModel?: IViewModel);
    registerStep(step: IStepOptions | string, isDefault: boolean): IStepOptions<import("../../../../flowInterfaces/runtime/IStepModel").IPropObject>;
    getStep(stepName: string, version: string): IStepOptions;
    getStepInline(stepName: string, version: string): IStepOptions | undefined;
    resolveStepInput(step: IStepOptions): import("../../../../flowInterfaces/editor/IStepOptions").IInputInfo[];
    resolveStepOutput(step: IStepOptions, props: IStepModel["P"]): string[];
    getDefaultSteps(): IStepOptions<import("../../../../flowInterfaces/runtime/IStepModel").IPropObject>[];
    isAutoStart(stepName: string, version: string): boolean;
    isAutoStartInline(stepName: string, version: string): boolean;
    gatherMissingSteps(steps: Array<IStepRequireInfo>): Promise<void>;
}
//# sourceMappingURL=stepRepoImpl.d.ts.map