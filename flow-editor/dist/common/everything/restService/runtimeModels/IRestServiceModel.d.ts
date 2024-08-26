import { IExpressionData, ISetExpressionData } from "../../dataType/runtimemodels/IExpression";
import { Store } from "../../store/runtimemodels/IStoreModel";
import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
import { RestServiceModelType } from "./types";
import { SoapServiceModelType } from "./types";
export interface IRestServiceModel extends IModelBaseFields {
    type: RestServiceModelType | SoapServiceModelType;
    name: string;
    _name: string;
    desc: string;
    httpMethod: Array<HttpMethod>;
    contentType?: ContentType_ApplicationJson;
    hostKey: IExpressionData;
    requestHeader?: Record<string, IExpressionData>;
    requestUrl?: Array<IRestUrlParam>;
    requestBody?: Array<{
        bodyKey: string;
        value: IExpressionData;
    }>;
    responseHeader?: Record<string, ISetExpressionData>;
    responseBody?: Array<{
        bodyKey: string;
        value: ISetExpressionData;
    }>;
    responseStatus?: ISetExpressionData;
    cachePeriod?: number;
    mock?: Array<IRestMock>;
    store: Store;
}
export declare const ContentTypes: {
    readonly applicationJson: "application/json";
};
export type HttpMethod = 'GET' | 'POST';
export type ContentType_ApplicationJson = typeof ContentTypes.applicationJson;
export type IRestUrlParam = IRestPathVariable | IRestQueryParams;
export interface IRestUrlParamBase {
    type: "PATH" | "QUERY";
    required?: boolean;
}
export interface IRestPathVariable extends IRestUrlParamBase {
    type: "PATH";
    value: IExpressionData;
}
export interface IRestQueryParams extends IRestUrlParamBase {
    type: "QUERY";
    key: IExpressionData;
    value: IExpressionData;
}
export interface IRestMock {
    reqExp: string;
    responseHeaders: Record<string, string>;
    responseBody: Record<string, any>;
    responseStatus: number;
}
//# sourceMappingURL=IRestServiceModel.d.ts.map