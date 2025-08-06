import { IFlowLogger, IFlowLogItem } from "@stechquick/flow-interfaces/runtime/IFlowLogger";
type Num = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type LogCodeStr = `FL-${Num}${Num}${Num}${Num}`;
export declare class LoggerManager {
    static createLogger(logger: IFlowLogger["log"], stepName: string, stepId: string, stepVersion: string): IFlowLogger;
    static log(logger: IFlowLogger["log"], item: IFlowLogItem & {
        logCode: typeof FlowLogCodes[keyof typeof FlowLogCodes] & LogCodeStr;
    }): void;
}
export declare const FlowLogCodes: {
    readonly FL1000: "FL-1000";
    readonly FL1001: "FL-1001";
    readonly FL1002: "FL-1002";
};
export {};
//# sourceMappingURL=loggerManager.d.ts.map