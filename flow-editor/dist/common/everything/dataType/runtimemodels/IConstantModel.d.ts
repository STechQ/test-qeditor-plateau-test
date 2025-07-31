import { ConstantModelType } from "./types";
import { StepFlowModelPropType } from "../../workflow/runtimemodels/IWorkflow";
import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
export declare const ConstTypeValues: {
    string: string;
    flow: string;
    env: string;
};
export type ConstantType = keyof typeof ConstTypeValues;
export interface IConstantModel extends IModelBaseFields, IConstantPropBase {
    type: ConstantModelType;
}
export interface IConstantPropBase {
    name: string;
    _name: string;
    desc: string;
    constants: Record<string, IConstantValue>;
}
export type IConstantValue = IConstantString | IConstantFunction;
export interface IConstantValueBase {
    constantType: ConstantType;
}
export interface IConstantString extends IConstantValueBase {
    value: string;
}
export interface IConstantFunction extends IConstantValueBase {
    value: StepFlowModelPropType;
    ttlSeconds: number;
}
//# sourceMappingURL=IConstantModel.d.ts.map