import { ModelRetriever } from "./ModelRetriever";
import { ExpressionGetter, ExpressionSetter, IExpressionData, ISetExpressionData } from "./IExpression";
import { IPropObject, IStepFrom, IStepTo } from "./IStepModel";
import { IPlatformClientAdaptor } from "./platform/IPlatformClientAdaptor";
import { IPlatformServerAdaptor } from "./platform/IPlatformServerAdaptor";
import { Omit2 } from "./platform/tsHelperTypes";
import { IPlatformWFFAdaptor } from "./platform/IPlatformWorkflowAdaptor";
import { IFlowInfo } from "./IFlowInfo";
import { IFlowLogger } from "./IFlowLogger";
import { IPlatformWFEAdaptor } from "./platform/IPlatformWFEAdaptor";
import { FlowError } from "./flowError";
export type RuntimeMessage = {
    input: any;
    vars: Record<string, any>;
    output?: any;
    infoList?: Array<IFlowInfo>;
};
export type StateValues = Record<string, any>;
export interface ICommonState<T> {
    set(key: string, value: T, secret: string): void;
    get(key: string, secret: string): T | undefined;
}
export interface IStateBaseType {
    destruct: () => void;
}
export interface IServerAdaptor extends Omit2<IPlatformServerAdaptor, "getEnvVar"> {
    getEnvVar(key: string): string | undefined;
}
export type IJumpParam = IStepTo & {
    flowThreadId?: string;
};
export interface IRuntimeParam<PropType = IPropObject, OutputOptions = string, StateType = StateValues> {
    entryInfo: {
        stepID: string;
        /**
         * step input name
         */
        inputName: string;
        /**
         * input connections of the entry
         */
        connections: Array<IStepFrom> | undefined;
        /**
         * entry connections
         */
        connection: IStepFrom | undefined;
        flowThreadId: string;
    };
    props: PropType;
    msg: RuntimeMessage;
    flow: {
        /**
         * commit
         */
        next: (output?: OutputOptions) => void;
        /**
         * statefull commit
         */
        stop: () => void;
        /**
         * stateless commit
         */
        pause: () => void;
        /**
         * stateless abort
        */
        cancel: (error: FlowError) => void;
        jump: (jumpTo: IJumpParam) => void;
        evalGet: (expression: IExpressionData, getter: ExpressionGetter) => ReturnType<ExpressionGetter>;
        evalSet: (expression: ISetExpressionData, value: any, setter: ExpressionSetter) => void;
        getServer: () => IServerAdaptor | undefined;
        getClient: () => IPlatformClientAdaptor | undefined;
        getWorkflow: () => IPlatformWFFAdaptor | undefined;
        getWFE: () => IPlatformWFEAdaptor | undefined;
        getCommonState: <CommonStateType extends IStateBaseType = IStateBaseType>() => ICommonState<CommonStateType>;
        logger: IFlowLogger;
    };
    state: {
        readonly values: StateType;
        clear: () => void;
    };
    model: {
        retriever: ModelRetriever;
    };
}
export type StepRuntime<PropType = IPropObject, OutputOptions = string, StateType = StateValues> = (param: IRuntimeParam<PropType, OutputOptions, StateType>) => void | Promise<void>;
//# sourceMappingURL=StepRuntime.d.ts.map