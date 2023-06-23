import { IMessage } from "./logger";
export interface IBulkManager {
    logHandler: ((messages: IMessage) => void) | undefined;
    clear?: () => void;
    writeMessage(message: IMessage): void;
}
export declare class BulkManager implements IBulkManager {
    logHandler: ((messages: IMessage) => void) | undefined;
    clear?: () => void;
    /**
     * Vomit the bulk messages into callback function of the shell
     * @param message Log message that to be added
     */
    writeMessage(message: IMessage): void;
}
//# sourceMappingURL=bulkManager.d.ts.map