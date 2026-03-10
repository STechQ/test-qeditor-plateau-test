import { RuntimeMessage } from "@stechquick/flow-interfaces/runtime";
import { IPlatformWFFAdaptor } from "@stechquick/flow-interfaces/runtime/platform/IPlatformWorkflowAdaptor";
import { IStoreInParameterMapping } from "../../../../everything/store/runtimemodels/IStoreMapping";
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
    msg?: RuntimeMessage;
    context?: ReturnType<IPlatformWFFAdaptor["context"]>;
    inParamMapping: IStoreInParameterMapping[];
}
//# sourceMappingURL=ISlaExecution.d.ts.map