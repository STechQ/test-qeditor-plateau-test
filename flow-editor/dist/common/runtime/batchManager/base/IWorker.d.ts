import { RuntimeMessage } from "@stechquick/flow-interfaces/runtime/StepRuntime";
import { Logger } from "../../application/logger";
import { ConfigService } from "../Config";
import { IFlowExecutionResult } from "../../../../flow/packs/flowRuntime/src/flow";
import { IDataStoreManager } from "../../infrastructure/mongo/IDataStoreManager";
export type Status = 'waiting' | 'running' | 'completed' | 'failed' | 'terminated';
export interface IWorker<T = any> {
    setStarted(startDate: Date): void;
    executeTasks<ITask>(dsManager: IDataStoreManager): Promise<void>;
    executeSingleTask<ITask>(dsManager: IDataStoreManager, taskId: string): void;
    id: string;
    ctx: IWorkerContext;
    progress: number;
    status: string;
    startDate?: Date;
    error?: Error;
    result?: T;
    abortController?: AbortController;
    updateProgres(number: Number): void;
    setStatus(status: Status): void;
    release(err: Error, status: Status): Promise<void>;
    handleSuccess(task: ITask<T>, result: any): Promise<void>;
    createTimeoutPromise(timeout: number | undefined, task: ITask<any>): Promise<Error>;
}
export interface ITask<T = any> {
    type: string;
    msg?: RuntimeMessage;
    id: string;
    appId: string | undefined;
    modelID: string;
    processId: number;
    tryCount: number;
    createDate: Date;
    startDate?: Date;
    status: Status;
    finishDate?: Date;
    nextRunTime?: Date;
    executionId: string;
    ctx: IWorkerContext;
    executionResult?: IFlowExecutionResult;
    configService: ConfigService<T>;
    executorCB: TaskExecutor<any>;
    execute(dsManager: IDataStoreManager, callback: (task: ITask<T>, error: Error, status: Status) => Promise<T>): Promise<ITask>;
    handleSuccess(result: any): Promise<void>;
    handleError(error: Error): Promise<void>;
    acquireTask(ctx: IWorkerContext): Promise<ITask<T> | null>;
    workerCB: (task: ITask<T>, error: Error, status: Status) => Promise<T>;
    updateProgress(number: number): Promise<void>;
    timeout?: number;
    retries?: number;
}
export interface IWorkerContext<T = any> {
    logger: Logger;
    /**
     * AbortSignal for cooperative job cancellation
     * Check this in long-running operations
     * Example: if (ctx.signal.aborted) cleanup()
     */
    signal: AbortSignal;
    tasks: Map<string, ITask<T>>;
    pushTask(task: ITask): void;
    /**
     * Update job progress (0-100)
     * Throws error if value is outside 0-100 range

  
  
    /**
     * Optional: Add custom metadata
     */
    metadata?: Record<string, any>;
}
export type TaskExecutor<TJob extends ITask> = (dsManager: IDataStoreManager, batchJob: TJob) => Promise<ITask>;
//# sourceMappingURL=IWorker.d.ts.map