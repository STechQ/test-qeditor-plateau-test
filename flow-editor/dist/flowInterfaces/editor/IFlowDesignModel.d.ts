import { IConnectionDesignModel } from "./IConnectionDesignModel";
import { IStepDesignModel } from "./IStepDesignModel";
export interface IFlowDesignModel extends IFlowCopyModel {
    maxID: number;
}
export interface IFlowCopyModel {
    steps: Array<IStepDesignModel>;
    connections: Array<IConnectionDesignModel>;
}
//# sourceMappingURL=IFlowDesignModel.d.ts.map