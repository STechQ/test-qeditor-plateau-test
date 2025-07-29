import { ConstantModelType } from "./types";
import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
export declare const ConstTypeValues: {
    string: string;
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
export type IConstantValue = IConstantString | IConstantEnv;
export interface IConstantValueBase {
    constantType: ConstantType;
}
export interface IConstantString extends IConstantValueBase {
    constantType: "string";
    value: string;
}
export interface IConstantEnv extends IConstantValueBase {
    constantType: "env";
    value: string;
}
//# sourceMappingURL=IConstantModel.d.ts.map