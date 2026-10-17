import { ObjectID } from "../../dataType/runtimemodels/types";
import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export interface IHandlerParams {
    key: string;
    field: string;
}
export interface IEndpointValueType {
    type: string;
    list?: boolean;
    required?: boolean;
    objectID?: string;
    properties?: Record<string, IEndpointValueType>;
}
export interface IEndpointInputField {
    field: string;
    source: "body" | "headers" | "path" | "query";
    path: string;
    valueType?: IEndpointValueType;
}
export interface IEndpointOutputField {
    target: "body" | "headers" | "statusCode";
    path: string;
    output: string;
    valueType?: IEndpointValueType;
}
export interface IEndpointFunctionContract {
    inputs: Record<string, IEndpointValueType>;
    outputs: Record<string, IEndpointValueType>;
}
export interface IEndpointHandler {
    transactionable: boolean;
    method: Array<HttpMethod> | HttpMethod;
    path?: string;
    trigger: {
        type: "befunc" | "flow";
        modelId: ObjectID;
        inputMapping: {
            type: "requestToFlowInput";
            fields?: IEndpointInputField[];
            body?: string;
            headers?: string;
            pathParams?: Array<{
                key: string;
                field: string;
            }>;
            queryParams?: Array<{
                key: string;
                field: string;
            }>;
        };
        outputMapping: {
            type: "flowOutputToResponse";
            fields?: IEndpointOutputField[];
            body?: string;
            headers?: string;
            statusCode?: string;
        };
    };
}
export interface IEndpointMiddleware {
    middlewares: string;
    authModelId?: string;
}
export interface IEndpointModel extends IModelBaseFields {
    type: "endpoint";
    name: string;
    path: string;
    middlewares: Array<IEndpointMiddleware>;
    handlers: Array<IEndpointHandler>;
}
//# sourceMappingURL=IEndpointModel.d.ts.map