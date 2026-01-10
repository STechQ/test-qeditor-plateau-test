import { IRestServiceModel } from "../../../../common/everything/restService/runtimeModels/IRestServiceModel";
import { ISoapServiceModel } from "../../../../common/everything/soapService/runtimeModels/ISoapServiceModel";
import { IFlowModel } from "./IFlowModel";
import { IModelForWorkflow } from "../../../../common/qCloudTemp/quickCloud";
import { IDecisionTableModel } from "../../../../common/everything/decisionTable/runtimeModels/IDecisionTableModel";
export interface IModelBase {
    type: 'restService' | 'soapService' | 'flow' | 'workflow' | 'decisionTable';
}
export type IModel = IRestServiceModel | ISoapServiceModel | IFlowModel | IModelForWorkflow | IDecisionTableModel;
//# sourceMappingURL=IModel.d.ts.map