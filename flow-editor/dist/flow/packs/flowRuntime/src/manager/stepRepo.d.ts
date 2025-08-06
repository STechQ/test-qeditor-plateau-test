import { StepRetriever } from "../../../flowInterfaces/runtime/stepRetriever";
import { StepRuntime } from "../../../flowInterfaces/runtime/StepRuntime";
export declare class StepRepo {
    protected stepDict: Map<string, StepRuntime<import("@stechquick/flow-interfaces/runtime").IPropObject, string, import("../../../flowInterfaces/runtime/StepRuntime").StateValues> | Promise<StepRuntime<import("@stechquick/flow-interfaces/runtime").IPropObject, string, import("../../../flowInterfaces/runtime/StepRuntime").StateValues>> | undefined>;
    constructor();
    startGather(stepName: string, version: string, stepRetriever: StepRetriever): Promise<StepRuntime<import("@stechquick/flow-interfaces/runtime").IPropObject, string, import("../../../flowInterfaces/runtime/StepRuntime").StateValues>>;
    getStep(stepName: string, version: string, stepRetriever: StepRetriever): Promise<StepRuntime>;
    private resolveStep;
}
//# sourceMappingURL=stepRepo.d.ts.map