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
    finishedAt?: Date;
}
export interface IBatchDBJobDeadLetter extends IBatchDBJobBase {
    deadLetteredAt: number;
    deadLetterReason: "maxTryCount" | string;
    deadLetteredBy: string;
}
export type BatchGroupState = "ready" | "leased" | "blocked";
export interface IBatchJobGroup {
    uniqueKey: string;
    state: BatchGroupState;
    leaseOwner: string;
    leaseExpireAt: number;
    fencingToken: number;
    headDueAt: number;
    pendingCount: number;
}
//# sourceMappingURL=IBatchDBJob.d.ts.map