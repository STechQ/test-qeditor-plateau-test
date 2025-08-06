import { Store } from "../../../../common/everything/store/designtimemodels/IStoreModel";
import { ILegacySLA, ISLA } from "../../../../common/everything/workflow/runtimemodels/ISLA";
import { IExecuteFlowByMapping } from "../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { IExpressionData } from "../runtime";
import { FlowExecutionType } from "../runtime/IFlowModel";
import { IConnectionDesignModel } from "./IConnectionDesignModel";
import { IRoleDesignModel } from "./IRoleDesignModel";
import { IStepDesignModel } from "./IStepDesignModel";
import { ISwimlaneDesignModel } from "./ISwimlaneDesignModel";
export interface IFlowDesignModel extends IFlowCopyModel {
    maxID: number;
}
export interface IOldCamundaFieldsForWFModel {
    sla: ILegacySLA;
    priority: number;
}
export interface IFlowCopyModel {
    name?: string;
    _name?: string;
    label?: IExpressionData;
    description?: string;
    steps: Array<IStepDesignModel>;
    connections: Array<IConnectionDesignModel>;
    swimlanes?: Record<string, ISwimlaneDesignModel>;
    roles?: Record<string, IRoleDesignModel>;
    store: Store;
    sla?: ISLA;
    businessKeyGenerationFunction?: IExecuteFlowByMapping;
    fileUploadFunction?: IExecuteFlowByMapping;
    fileDownloadFunction?: IExecuteFlowByMapping;
    fileDeleteFunction?: IExecuteFlowByMapping;
    executeType: FlowExecutionType;
    oldCamundaFieldsForWFModel?: IOldCamundaFieldsForWFModel;
}
//# sourceMappingURL=IFlowDesignModel.d.ts.map