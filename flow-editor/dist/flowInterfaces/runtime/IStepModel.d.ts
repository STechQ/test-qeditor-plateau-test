import { IExpressionData } from "./IExpression";
export interface IStepFrom {
    ID: string;
    outputName: string;
}
export interface IStepTo {
    ID: string;
    inputName: string;
    connectionIndex: number;
}
export interface IPropObject {
    [key: string]: PropValue;
}
export declare type IPropArray = Array<PropValue>;
export declare type PropValue = IExpressionData | IPropObject | IPropArray | string | number | boolean | undefined;
export interface IStepModel {
    N: string;
    V: string;
    P?: IPropObject;
    O: Record<string, Array<IStepTo> | undefined>;
    I: Record<string, Array<IStepFrom> | undefined>;
}
//# sourceMappingURL=IStepModel.d.ts.map