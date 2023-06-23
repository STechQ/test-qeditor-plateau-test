import { LogType } from "../interfaces/ComponentInterfaces/ILogger";
export { LogType };
interface ILogger {
    Log({ logMessage, logType, error }: {
        logMessage: string;
        logType?: LogType;
        error?: Error;
    }): void;
}
export interface IMessage {
    message: string;
    type: string;
    time: string;
    caller: string;
}
export declare class Logger implements ILogger {
    constructor();
    private static windowName;
    /**
     * ! Carefull using this static variable
     */
    private static logBulkManager;
    private static get LogBulkManager();
    private static logLevel;
    /**
     * Whenever the shell initiates its callback, this handling also will be initiated as well
     * ? Static may change? Will see
     * @param timer Seconds of writing down the messages
     * @param callBack Function that handles the messages, comes from shell.
     */
    static Init({ callBack, clear }: {
        callBack?: ((messages: IMessage) => void);
        clear?: () => void;
    }): void;
    /**
     * Console log function
     * @param logMessage Message that to be written to the console
     * @param logType console type(Debug, Trace, Warning, Error)
     * @param backgroundColor message background color
     * @param color message text color
     * @param additional additional info for logging
     * @param yamlLogType
     * @returns void
     */
    static Log({ logMessage, logType, error, backgroundColor, textColor, additional, source, isClientLog, yamlLogType, minEngineLogLevel }: {
        logMessage: any;
        logType?: LogType;
        error?: unknown;
        backgroundColor?: string | null;
        textColor?: string | null;
        additional?: any;
        source?: "model";
        isClientLog?: boolean;
        yamlLogType?: LogType;
        minEngineLogLevel?: LogType;
    }): void;
    /**
     * Log messages are controlled by their size and add them to the bulk array with type, date and caller function name
     * @param logMessage Message that will be written to the server
     * @param logType Type of log message
     */
    private static prepareClientLog;
    /**
     * Can't call Log.calle.caller beacuse of the TypeScript classes are on "strict mode"
     * JS doesn't allow to arguments.callee.caller on strict mode
     * So just throw an simple Error and get the latest function name
     * returns String
     */
    private static getCalleFunctionName;
    /**
     * Clears the bulk of messages
     */
    static clearLogs(): void;
    /**
     * Trim the message with size of the log type
     * @param logMessage log message
     * @param logType Log type that will be controlled
     */
    private static shorten;
    /**
     * @deprecated do not use. Use Logger.Log(...)
     */
    Log(options: {
        logMessage: any;
        logType?: LogType;
        error?: unknown;
        backgroundColor?: string | null;
        textColor?: string | null;
        additional?: any;
        writeToConsole?: boolean;
        source?: "model";
    }): void;
}
//# sourceMappingURL=logger.d.ts.map