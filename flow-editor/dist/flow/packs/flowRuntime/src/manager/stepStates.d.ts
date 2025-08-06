import { IStepStates } from "../../../../../common/everything/flow/runtimeObjects/IStepStates";
import { IRuntimeParam } from "../../../flowInterfaces/runtime/StepRuntime";
interface IStepStateClass {
    values: IRuntimeParam["state"]["values"];
    clear: IRuntimeParam["state"]["clear"];
}
export declare class StepStates {
    private readonly stepStates;
    constructor(stepStates?: IStepStates);
    getState(stepID: string): IStepStateClass;
}
export {};
//# sourceMappingURL=stepStates.d.ts.map