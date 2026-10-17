import { IEndpointHandler } from "../runtimeModels/IEndpointModel";
export declare class EndpointHandlerHelper {
    static getDefinition(handler: IEndpointHandler): string;
    static getUrl(contextPath: string, handler: IEndpointHandler): string;
    static getRoutePath(contextPath: string, handler: IEndpointHandler): string;
    static getRouteKey(contextPath: string, handler: IEndpointHandler): string;
    static getPathVariables(path: string): string[];
    static getQueryVariables(definition: string): Array<{
        key: string;
        variable: string;
    }>;
    static getDefinitionError(contextPath: string, handler: IEndpointHandler): string | undefined;
    static synchronizeVariables(contextPath: string, handler: IEndpointHandler): IEndpointHandler;
}
//# sourceMappingURL=endpointHandlerHelper.d.ts.map