import { IExpressionData, ISetExpressionData } from "../../dataType/runtimemodels/IExpression";
import { Store } from "../../store/runtimemodels/IStoreModel";
import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
import { SoapServiceModelType } from "./types";
export interface ISoapServiceModel extends IModelBaseFields {
    type: SoapServiceModelType;
    name: string;
    _name: string;
    desc: string;
    hostKey: IExpressionData;
    hostKeyExtension?: Array<ISoapExtension>;
    methodName: IExpressionData;
    requestHeader?: Record<string, IExpressionData>;
    requestBody: Array<{
        bodyKey: string;
        value: IExpressionData;
    }>;
    responseHeader?: Record<string, ISetExpressionData>;
    responseBody?: Array<{
        bodyKey: string;
        value: ISetExpressionData;
    }>;
    wsdlOptions?: Array<{
        bodyKey: string;
        value: IExpressionData;
    }>;
    security?: ISoapSecurityInfo;
    mock?: Array<ISoapMock>;
    store: Store;
}
export interface ISoapExtension {
    value: IExpressionData;
}
export interface ISoapSecurityInfo {
    username: IExpressionData;
    password: IExpressionData;
}
export interface ISoapMock {
    reqExp: string;
    requestHeader?: Record<string, string>;
    requestBody?: Record<string, any>;
    responseHeaders: Record<string, string>;
    responseBody: Record<string, any>;
    responseStatus: number;
}
//# sourceMappingURL=ISoapServiceModel.d.ts.map