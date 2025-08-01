import { ILogItem } from "./logger.js";
export declare class Handler {
    static logOnError<T = void>(cb: () => T, logItemCb: (err: Error) => ILogItem): T;
}
//# sourceMappingURL=handler.d.ts.map