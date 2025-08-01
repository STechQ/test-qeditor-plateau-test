import { IExpressionData } from "./IExpression";
export type IStepFrom = {
    ID: string;
    outputName: string;
};
export type IStepTo = {
    ID: string;
    inputName: string;
};
export type IPropObject = {
    label: string;
    [key: string]: PropValue;
};
export type IPropObjectDeep = {
    [key: string]: PropValue;
};
export interface IS3BucketPolicy {
    version: string;
    statements: Array<IS3Statement>;
}
export interface IS3Statement {
    sid: string;
    effect: 'Allow' | 'Deny';
    principal: IExpressionData | string;
    action: string | Array<string>;
    resource: Array<string>;
}
export type IPropArray = Array<PropValue>;
export type PropValue = IExpressionData | IPropObjectDeep | IPropArray | string | number | boolean | undefined | IS3BucketPolicy;
export type IStepModel = {
    N: string;
    V: string;
    P: IPropObject;
    O: Record<string, Array<IStepTo> | undefined>;
    I: Record<string, Array<IStepFrom> | undefined>;
    oldCamundaFields?: IOldCamundaFields;
};
export type IPropDefiniton<T extends {
    label: string;
}> = {
    [K in keyof T]: {
        type: "typescript" | "free";
        defaultValue?: T[K];
    };
};
export interface IOldCamundaFields {
    stepId: string;
    name?: string;
    swimlane: string;
    taskName: string;
    type: string;
    oldLookUpKeyBS: string;
}
export declare let stepPropDict: Record<string, Array<string>>;
//# sourceMappingURL=IStepModel.d.ts.map