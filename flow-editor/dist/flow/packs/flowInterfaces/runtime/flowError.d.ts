export interface IFlowError {
    readonly type: "business" | "technical";
    readonly category: "warning" | "error";
    readonly message: string;
    readonly code: string;
    readonly summary?: string;
    readonly parameters?: Record<string, string>;
    readonly detail?: string;
    readonly stack?: string;
    readonly statusCode?: number;
}
export declare class WrappedFlowError extends Error {
    readonly orig_error: Error;
    static WrappedFlowErrorName: string;
    static isWrappedFlowError(error: Error): boolean;
    constructor(orig_error: Error);
}
export declare class FlowError extends Error implements IFlowError {
    static FlowErrorName: string;
    readonly type: IFlowError["type"];
    readonly category: IFlowError["category"];
    readonly code: IFlowError["code"];
    readonly summary?: IFlowError["summary"];
    readonly parameters?: IFlowError["parameters"];
    get detail(): string | undefined;
    private _detail?;
    readonly stack?: IFlowError["stack"];
    readonly statusCode?: IFlowError["statusCode"];
    constructor(errorData: IFlowError);
    static isFlowError(error: Error | unknown): boolean;
    appendDetail(detail: string): void;
}
//# sourceMappingURL=flowError.d.ts.map