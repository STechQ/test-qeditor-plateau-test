import { IRestServiceModel } from "../../../../common/everything/restService/runtimeModels/IRestServiceModel";
import { ISoapServiceModel } from "../../../../common/everything/soapService/runtimeModels/ISoapServiceModel";
import { IFlowModel } from "./IFlowModel";
export interface IModelBase {
    type: 'restService' | 'soapService' | 'flow' | 'workflow';
}
export type IModel = /*IEntity |*/ IRestServiceModel | ISoapServiceModel | IFlowModel;
//# sourceMappingURL=IModel.d.ts.map