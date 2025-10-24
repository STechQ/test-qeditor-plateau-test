export interface IFlowLogger {
    log(item: IFlowLogItem): void;
}
export interface IFlowLogItem {
    /**
     * Truncate to 7 characters
     */
    logCode: string;
    level: "debug" | "log" | "warning" | "error";
    message: string;
    additionals?: Array<object> | object;
}
export declare const LogCodesSpecial: {
    readonly ReqBERest: "Rest -->";
    readonly ResBERest: "Rest <--";
    readonly ResBEMock: "<-- (M)";
};
//# sourceMappingURL=IFlowLogger.d.ts.map