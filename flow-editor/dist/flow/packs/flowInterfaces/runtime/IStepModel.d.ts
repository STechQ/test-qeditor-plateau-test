import { IExpressionData } from "./IExpression";
export type IStepFrom = {
    ID: string;
    outputName: string;
};
export type IStepTo = {
    ID: string;
    inputName: string;
    connectionIndex: number;
};
export type IPropObject = {
    [key: string]: PropValue;
};
export type IPropArray = Array<PropValue>;
export type PropValue = IExpressionData | IPropObject | IPropArray | string | number | boolean | undefined;
export type IStepModel = {
    N: string;
    V: string;
    P?: IPropObject;
    O: Record<string, Array<IStepTo> | undefined>;
    I: Record<string, Array<IStepFrom> | undefined>;
};
export type IPropDefiniton<T> = {
    [K in keyof T]: {
        type: "typescript" | "free";
        defaultValue?: T[K];
    };
};
export interface INodeModel extends IStepModel {
    S: string;
}
export declare let stepPropDict: Record<string, Array<string>>;
//# sourceMappingURL=IStepModel.d.ts.map