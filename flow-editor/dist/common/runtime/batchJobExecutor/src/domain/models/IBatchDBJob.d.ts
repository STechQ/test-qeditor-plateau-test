export type BatchFlowStatus = "waiting" | "running" | "success" | "failed" | "skipped";
export interface IBatchDBJobBase {
    type: string;
    batchId: string;
    appId: string;
    tryCount: number;
    createDate: number;
    startDate?: number;
    status: BatchFlowStatus;
    finishDate?: number;
}
//# sourceMappingURL=IBatchDBJob.d.ts.map