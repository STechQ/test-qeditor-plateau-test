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
//# sourceMappingURL=IFlowLogger.d.ts.map