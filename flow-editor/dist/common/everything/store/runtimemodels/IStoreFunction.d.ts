import { IStoreMapping } from "./IStoreMapping";
import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
import { ContextType } from "../../dataType/runtimemodels/types";
export type DataEventExpressionData = IExpressionData & {
    type: ContextType;
};
export type IStoreFunction<TMap extends IStoreFunctionMapBase> = {
    name: string;
    _name: string;
    desc: string;
    map: TMap;
};
export type IStoreFunctionMapBase = {
    type: "event" | "dataEvent" | "function";
    mapping: IStoreMapping;
};
export interface IDataFunctionMapping extends IStoreFunctionMapBase {
    type: "function";
    objectID: string;
    objectVersion: string;
}
export type IDataEventMapping = IStoreFunctionMapBase & {
    type: "dataEvent";
    source: DataEventExpressionData;
    event: "onChange";
};
export type IEventMapping = IStoreFunctionMapBase & {
    type: "event";
    event: "Pre-render" | "End-Render" | "Before Submit" | "Unload";
};
//# sourceMappingURL=IStoreFunction.d.ts.map