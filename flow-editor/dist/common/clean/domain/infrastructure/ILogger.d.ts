export interface ILogItem {
    level: "debug" | "info" | "log" | "warning" | "error";
    message: string;
    additional?: any;
    error?: unknown;
    logCode?: string;
}
export interface ILogger {
    log(item: ILogItem): void;
}
export declare const ILogger: unique symbol;
//# sourceMappingURL=ILogger.d.ts.map