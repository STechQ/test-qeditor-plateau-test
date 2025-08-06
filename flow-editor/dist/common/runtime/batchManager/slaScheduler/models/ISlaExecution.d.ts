import { Status } from "../../base/IWorker";
export interface ISlaExecution {
    type: string;
    id: string;
    appId: string | undefined;
    taskId?: string;
    processInstanceId: string;
    tryCount: number;
    createDate: number;
    startDate?: number;
    status: Status;
    finishDate?: number;
    nextRunTime?: number;
    nodeId?: string;
    modelId: string;
    slaIndexToRun: number;
    connectedType: "workflow" | "userTask";
}
//# sourceMappingURL=ISlaExecution.d.ts.map