import { IEnumModel } from "../../enum/runtimeModels/IEnumModel";
import { IDataTypeModel } from "../../dataType/runtimemodels/IDataTypeModel";
import { IFlowModel } from "@stechquick/flow-interfaces/runtime/IFlowModel";
import { IRestServiceModel } from "../../restService/runtimeModels/IRestServiceModel";
import { IWorkflowModel } from "./IWorkflow";
import { IConstantModel } from "../../dataType/runtimemodels/IConstantModel";
import { ISoapServiceModel, ISoapServiceV2Model } from "../../soapService/runtimeModels/ISoapServiceModel";
import { IDecisionTableModel } from "../../decisionTable/runtimeModels/IDecisionTableModel";
import { IDataSetModel } from "../../dataSet/runtimemodels/IDataSetModel";
import { ISwimlaneDesign } from "../../accessmanager/designtime/ISwimlaneDesign";
import { IPrivilegeDesign } from "../../accessmanager/designtime/IPrivilegeDesign";
import { IRoleDesign } from "../../accessmanager/designtime/IRoleDesign";
import { IPersonaDesign } from "../../accessmanager/designtime/IPersonaDesign";
import { IActionDesign } from "../../action/IActionDesign";
export type IModelBaseFields = {
    id: string;
};
export type IWFModels = IDataTypeModel | IEnumModel | IRestServiceModel | ISoapServiceModel | IFlowModel | IWorkflowModel | IConstantModel | ISoapServiceV2Model | IDecisionTableModel | IDataSetModel | IPrivilegeDesign | ISwimlaneDesign | IRoleDesign | IPersonaDesign | IActionDesign;
//# sourceMappingURL=IModel.d.ts.map