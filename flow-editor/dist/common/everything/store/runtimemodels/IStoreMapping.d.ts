import { IExpressionData, ISetExpressionData } from "../../dataType/runtimemodels/IExpression";
import { InputType, OutputType } from "../../dataType/runtimemodels/types";
export type IStoreMapping = {
    inParamMapping: Array<IStoreInParameterMapping>;
    outParamMapping: Array<IStoreOutParameterMapping>;
    props?: IStorePropType;
};
export declare const HttpMethods: {
    GET: string;
    POST: string;
};
export type IHttpMethodType = keyof typeof HttpMethods;
export type IStorePropType = {
    httpMethod?: IHttpMethodType;
};
export type StoreMappingInputExpressionData = IExpressionData & {
    type: InputType;
};
export type StoreMappingOutputSetExpressionData = ISetExpressionData & {
    type: OutputType;
};
export type IStoreInParameterMapping = {
    variable: StoreMappingInputExpressionData;
    mapping: IExpressionData;
};
export type IStoreOutParameterMapping = {
    variable: StoreMappingOutputSetExpressionData;
    mapping: ISetExpressionData;
};
//# sourceMappingURL=IStoreMapping.d.ts.map