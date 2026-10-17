import { IEndpointFunctionContract, IEndpointHandler, IEndpointInputField, IEndpointOutputField, IEndpointValueType } from "../runtimeModels/IEndpointModel";
export declare class EndpointMappingError extends Error {
    readonly statusCode: number;
    constructor(message: string, statusCode?: number);
}
type MappingStore = {
    store?: {
        input?: Record<string, {
            name?: string;
        } & IEndpointValueType>;
        output?: Record<string, {
            name?: string;
        } & IEndpointValueType>;
    };
};
export declare class EndpointMappingHelper {
    static isJsonPath(path: string, allowEmpty?: boolean): boolean;
    static read(value: unknown, path: string): unknown;
    static write(value: Record<string, unknown>, path: string, fieldValue: unknown): void;
    static inputFields(mapping: IEndpointHandler["trigger"]["inputMapping"]): IEndpointInputField[];
    static outputFields(mapping: IEndpointHandler["trigger"]["outputMapping"]): IEndpointOutputField[];
    static toFieldMappings(handler: IEndpointHandler, contract?: IEndpointFunctionContract): IEndpointHandler;
    static contract(model: MappingStore, fetch: (id: string) => Promise<{
        attributes?: Record<string, {
            name?: string;
        } & IEndpointValueType>;
    } | undefined>): Promise<IEndpointFunctionContract>;
    static outputType(outputs: Record<string, IEndpointValueType>, path: string): IEndpointValueType | undefined;
    static typeLabel(type?: IEndpointValueType): string;
    static isObject(type: IEndpointValueType): boolean;
    static isHeadersType(type: IEndpointValueType): boolean;
    static isTextType(type: IEndpointValueType): boolean;
    static errors(handler: IEndpointHandler, contract?: IEndpointFunctionContract): string[];
    static value(value: unknown, type: IEndpointValueType | undefined, label: string, textSource?: boolean): unknown;
    static mapInput(mapping: IEndpointHandler["trigger"]["inputMapping"], request: {
        body: unknown;
        headers: Record<string, unknown>;
        path: Record<string, unknown>;
        query: Record<string, unknown>;
    }, contract?: IEndpointFunctionContract): Record<string, unknown>;
    static mapOutput(mapping: IEndpointHandler["trigger"]["outputMapping"], output: Record<string, unknown>, contract?: IEndpointFunctionContract): {
        body: unknown;
        headers: Record<string, unknown>;
        statusCode: number;
    };
}
export {};
//# sourceMappingURL=endpointMappingHelper.d.ts.map