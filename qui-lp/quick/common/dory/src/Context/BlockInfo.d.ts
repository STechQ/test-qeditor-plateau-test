import { IContextItem } from "../../../shrimp/context";
export declare class BlockInfo implements IContextItem {
    static ContextName: string;
    contextName: string;
    blockRender: boolean | null;
    blockJsonIndex: number;
    blockPromises: Array<Promise<any>> | null;
    private manualPromise;
    private manualPromiseCounter;
    constructor({ blockRender, blockPromises }: {
        blockRender?: boolean | null;
        blockPromises?: Array<Promise<string>> | null;
    });
    /**
     * Add a promise when the render is blocked
     * @param blockPromise Add new promise to handle them asynchronously
     */
    addBlockPromise(blockPromise: Promise<any>): void;
    addManualPromise(): void;
    resolveManualPromise(): void;
}
//# sourceMappingURL=BlockInfo.d.ts.map