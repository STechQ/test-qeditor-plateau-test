import { IStepModel, IStepTo } from "./IStepModel";
export interface IFlowModel {
    startSteps: Array<IStepTo>;
    steps: Record<string, IStepModel>;
}
//# sourceMappingURL=IFlowModel.d.ts.map