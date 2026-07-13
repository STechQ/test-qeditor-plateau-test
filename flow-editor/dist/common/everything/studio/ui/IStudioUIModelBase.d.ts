import { WorkflowModelType } from "../../workflow/runtimemodels/types";
import { DecisionTableModelType, FlowModelType, JobSchedulerModelType } from "../../flow/runtimeModels/types";
import { RestServiceModelType } from "../../restService/runtimeModels/types";
import { SoapServiceModelType, SoapServiceV2ModelType } from "../../soapService/runtimeModels/types";
import { EnumModelType } from "../../enum/runtimeModels/types";
import { CertificateModelType, DataTypeModelType } from "../../dataType/runtimemodels/types";
import { IStudioUIObjectBase } from "./IStudioUIObjectBase";
import { ConstantModelType } from "../../dataType/runtimemodels/types";
import { SlaModelType } from "../../sla/runtimemodels/types";
import { DataSetModelType } from "../../dataSet/runtimemodels/types";
import { EndpointModelType } from "../../endpoint/runtimeModels/types";
import { BackendFunctionType } from "../../befunc/runtimeModels/types";
export type ContentType = "qjson" | "js" | "ts" | "yaml" | "css" | "png" | "jpg" | "jpeg" | "svg" | "gif" | "lottie" | "woff" | "woff2" | "ttf" | "otf" | "json" | "wsdl" | "xsd" | "theme" | "constant";
export type ModelType = ContentType | "bpmn" | "process" | "entityDesigner" | "namedComponent" | FlowModelType | WorkflowModelType | RestServiceModelType | SoapServiceModelType | SoapServiceV2ModelType | "step" | "appSettings" | DataTypeModelType | EnumModelType | ConstantModelType | CertificateModelType | "erronous" | "theme" | JobSchedulerModelType | "container" | SlaModelType | EndpointModelType | BackendFunctionType | DecisionTableModelType | DataSetModelType;
export interface IStudioUIModelBase extends IStudioUIObjectBase {
    modelType: ModelType;
    path: string;
    fullPath?: string;
}
export interface IDataModelBase {
    ID: string;
    name: string;
    modelType: ModelType;
    modelBody?: any;
}
//# sourceMappingURL=IStudioUIModelBase.d.ts.map