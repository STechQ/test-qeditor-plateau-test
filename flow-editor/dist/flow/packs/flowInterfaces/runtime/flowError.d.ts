export interface IFlowError {
    readonly type: "business" | "technical";
    readonly category: "warning" | "error";
    readonly message: string;
    readonly code: string;
    readonly summary?: string;
    readonly parameters?: Record<string, string>;
    readonly detail?: string;
    readonly stack?: string;
}
export declare class FlowError extends Error implements IFlowError {
    static FlowErrorName: string;
    readonly type: IFlowError["type"];
    readonly category: IFlowError["category"];
    readonly code: IFlowError["code"];
    readonly summary?: IFlowError["summary"];
    readonly parameters?: IFlowError["parameters"];
    readonly detail?: IFlowError["detail"];
    readonly stack?: IFlowError["stack"];
    constructor(errorData: IFlowError);
    static isFlowError(error: Error | unknown): boolean;
}
//# sourceMappingURL=flowError.d.ts.map