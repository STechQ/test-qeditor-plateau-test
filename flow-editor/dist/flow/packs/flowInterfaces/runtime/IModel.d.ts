import { IRestServiceModel } from "../../../../common/everything/restService/runtimeModels/IRestServiceModel";
import { ISoapServiceModel } from "../../../../common/everything/soapService/runtimeModels/ISoapServiceModel";
import { IFlowModel } from "./IFlowModel";
import { IModelForWorkflow } from "../../../../common/qCloudTemp/quickCloud";
export interface IModelBase {
    type: 'restService' | 'soapService' | 'flow' | 'workflow';
}
export type IModel = IRestServiceModel | ISoapServiceModel | IFlowModel | IModelForWorkflow;
//# sourceMappingURL=IModel.d.ts.map