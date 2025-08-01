import { WorkflowModelType } from "../../workflow/runtimemodels/types";
import { FlowModelType, JobSchedulerModelType } from "../../flow/runtimeModels/types";
import { RestServiceModelType } from "../../restService/runtimeModels/types";
import { SoapServiceModelType, SoapServiceV2ModelType } from "../../soapService/runtimeModels/types";
import { EnumModelType } from "../../enum/runtimeModels/types";
import { CertificateModelType, DataTypeModelType } from "../../dataType/runtimemodels/types";
import { IStudioUIObjectBase } from "./IStudioUIObjectBase";
import { ConstantModelType } from "../../dataType/runtimemodels/types";
export type ContentType = "qjson" | "js" | "ts" | "yaml" | "css" | "png" | "jpg" | "jpeg" | "svg" | "gif" | "lottie" | "woff" | "woff2" | "ttf" | "otf" | "json" | "wsdl" | "xsd" | "theme";
export type ModelType = ContentType | "bpmn" | "process" | "entityDesigner" | "namedComponent" | FlowModelType | WorkflowModelType | RestServiceModelType | SoapServiceModelType | SoapServiceV2ModelType | "step" | /*"flowEntity" //FLOW ENTITY IS GOING BYE BYE (perhaps 🤔) |*/ "appSettings" | DataTypeModelType | EnumModelType | ConstantModelType | CertificateModelType | "erronous" | "theme" | JobSchedulerModelType;
export interface IStudioUIModelBase extends IStudioUIObjectBase {
    modelType: ModelType;
    path: string;
    fullPath?: string;
}
//# sourceMappingURL=IStudioUIModelBase.d.ts.map