/// <reference types="node" />
type ShutdownCallback = (signal: NodeJS.Signals) => void | Promise<void>;
export declare class ShutdownHelper {
    private static events;
    private static callbacks;
    private static initialized;
    private static clearEvents;
    static subscribeProcessClose(callback?: ShutdownCallback | ShutdownCallback[]): void;
}
export {};
//# sourceMappingURL=ShutdownHelper.d.ts.map