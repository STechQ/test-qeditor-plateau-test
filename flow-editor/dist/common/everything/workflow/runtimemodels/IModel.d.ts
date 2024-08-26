import { IEnumModel } from "../../enum/runtimeModels/IEnumModel";
import { IDataTypeModel } from "../../dataType/runtimemodels/IDataTypeModel";
import { IFlowModel } from "@stechquick/flow-interfaces/runtime/IFlowModel";
import { IRestServiceModel } from "../../restService/runtimeModels/IRestServiceModel";
import { IWorkflowModel } from "./IWorkflow";
import { IConstantModel } from "../../dataType/runtimemodels/IConstantModel";
import { ISoapServiceModel } from "../../soapService/runtimeModels/ISoapServiceModel";
export type IModelBaseFields = {
    id: string;
};
export type IWFModels = IDataTypeModel | IEnumModel | IRestServiceModel | ISoapServiceModel | IFlowModel | IWorkflowModel | IConstantModel;
//# sourceMappingURL=IModel.d.ts.map