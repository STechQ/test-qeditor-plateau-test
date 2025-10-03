export type BatchFlowStatus = "waiting" | "running" | "success" | "failed" | "skipped";
export interface IBatchDBJobBase {
    type: string;
    batchId: string;
    appId: string;
    tryCount: number;
    createDate: number;
    startDate?: number;
    status: BatchFlowStatus;
    errorMsg?: string;
    finishDate?: number;
    uniqueKey?: string;
    executionId?: string;
}
export interface IBatchDBJobBaseHistory extends IBatchDBJobBase {
}
//# sourceMappingURL=IBatchDBJob.d.ts.map