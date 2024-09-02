import { ExpressionGetter, ExpressionSetter, IExpressionData, ISetExpressionData } from "./IExpression";
import { IPropObject } from "./IStepModel";
import { IPlatformClientAdaptor } from "./platform/IPlatformClientAdaptor";
import { IPlatformServerAdaptor } from "./platform/IPlatformServerAdaptor";
export declare type RuntimeMessage = Record<string, any>;
export declare type StateValues = Record<string, any>;
export interface ICommonState<T> {
    set(key: string, value: T, secret: string): void;
    get(key: string, secret: string): T | undefined;
}
export interface IStateBaseType {
    destruct: () => void;
}
export interface IRuntimeParam<PropType = IPropObject, OutputOptions = string, StateType = StateValues> {
    entryInfo: {
        /**
         * step input name
         */
        inputName: string;
        /**
         * connection count of the entry
         */
        connectionCount: number;
        /**
         * index of connection
         */
        connectionIndex: number;
    };
    props: PropType;
    msg: RuntimeMessage;
    flow: {
        next: (output?: OutputOptions) => void;
        stop: () => void;
        evalGet: (expression: IExpressionData, getter: ExpressionGetter) => ReturnType<ExpressionGetter>;
        evalSet: (expression: ISetExpressionData, value: any, setter: ExpressionSetter) => void;
        getServer: () => IPlatformServerAdaptor | undefined;
        getClient: () => IPlatformClientAdaptor | undefined;
        getCommonState: <CommonStateType extends IStateBaseType = IStateBaseType>() => ICommonState<CommonStateType>;
    };
    state: {
        readonly values: StateType;
        clear: () => void;
    };
}
export declare type StepRuntime<PropType = IPropObject, OutputOptions = string, StateType = StateValues> = (param: IRuntimeParam<PropType, OutputOptions, StateType>) => void;
//# sourceMappingURL=StepRuntime.d.ts.map