import { RuntimeContext } from "../manager/runtimeContext";
import { Thread } from "../manager/thread";
import { FlowError, WrappedFlowError } from "../../../flowInterfaces/runtime/flowError";
export interface IRuntimeConstructor {
    new (ctx: RuntimeContext): Runtime;
}
export interface IRuntime {
    start(): void;
}
export declare class Runtime implements IRuntime {
    protected ctx: RuntimeContext;
    protected readonly threads: Set<Thread>;
    protected looping: boolean;
    constructor(ctx: RuntimeContext);
    start(): void;
    registerThreads(threadList: Array<Thread>): void;
    removeThread(thread: Thread, options: {
        error?: FlowError | WrappedFlowError;
    }): void;
    protected handleError(error: Error): void;
    mainLoop(options?: {
        error?: Error;
    }): Promise<void>;
}
//# sourceMappingURL=runtime.d.ts.map