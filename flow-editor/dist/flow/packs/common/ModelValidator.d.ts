import { IFlowDesignModel } from "../flowInterfaces/editor/IFlowDesignModel";
export type ModelValidatorResult = {
    error?: Error;
    modifiedModel?: IFlowDesignModel;
};
export default class ModelValidator {
    static validateAndFixModel(model: IFlowDesignModel): ModelValidatorResult;
}
//# sourceMappingURL=ModelValidator.d.ts.map