import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
import { IStoreModelSla } from "../../store/designtimemodels/IStoreModel";
import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
export interface ISLAModel extends IModelBaseFields {
    name: string;
    description: string;
    slaInfo: SLABase[];
    initialPriority?: IExpressionData;
    userId?: IExpressionData;
    store: IStoreModelSla;
}
export interface SLABase {
    escalationFunctionId: string;
    type: SLAType;
    interval: TimeInterval;
    useBusinessDays: boolean;
    priority?: IExpressionData;
    description: string;
    name: string;
}
export interface TimeInterval {
    days?: IExpressionData;
    hours?: IExpressionData;
    minutes?: IExpressionData;
}
export declare enum SLAType {
    GOAL = "GOAL",
    DEADLINE = "DEADLINE",
    CRITICAL = "CRITICAL"
}
export declare const defaultSLATypes: SLABase[];
//# sourceMappingURL=ISLAModel.d.ts.map