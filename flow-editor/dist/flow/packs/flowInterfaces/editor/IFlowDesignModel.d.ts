import { Store } from "../../../../common/everything/store/designtimemodels/IStoreModel";
import { ISLA } from "../../../../common/everything/workflow/runtimemodels/ISLA";
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
export interface IFlowCopyModel extends IFlowCoreModel {
    name?: string;
    _name?: string;
    label?: IExpressionData;
    description?: string;
    swimlanes?: Record<string, ISwimlaneDesignModel>;
    roles?: Record<string, IRoleDesignModel>;
    store: Store;
    sla?: ISLA;
    businessKeyGenerationFunction?: IExecuteFlowByMapping;
    fileUploadFunction?: IExecuteFlowByMapping;
    fileDownloadFunction?: IExecuteFlowByMapping;
    fileDeleteFunction?: IExecuteFlowByMapping;
    /** Workflow-level required privileges (AND semantics). Only meaningful for workflow models. */
    privileges?: Array<string>;
    executeType: FlowExecutionType;
    uniqueKey?: IExpressionData;
}
export interface IFlowCoreModel {
    steps: Array<IStepDesignModel>;
    connections: Array<IConnectionDesignModel>;
}
//# sourceMappingURL=IFlowDesignModel.d.ts.map