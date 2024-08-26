import { Store } from "../../../../common/everything/store/designtimemodels/IStoreModel";
import { ISLA } from "../../../../common/everything/workflow/runtimemodels/ISLA";
import { IExecuteFlowByMapping } from "../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { IExpressionData } from "../runtime";
import { IConnectionDesignModel } from "./IConnectionDesignModel";
import { IRoleDesignModel } from "./IRoleDesignModel";
import { IStepDesignModel } from "./IStepDesignModel";
import { ISwimlaneDesignModel } from "./ISwimlaneDesignModel";
export interface IFlowDesignModel extends IFlowCopyModel {
    maxID: number;
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
    priority?: number;
    businessKeyGenerationFunction?: IExecuteFlowByMapping;
    fileUploadFunction?: IExecuteFlowByMapping;
}
//# sourceMappingURL=IFlowDesignModel.d.ts.map