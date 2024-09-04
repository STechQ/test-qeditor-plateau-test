import { StringTemplates } from "../../../helpers/templates/StringTemplates";
import { NumberTemplates } from "../../../helpers/templates/NumberTemplates";
import { IExpressionData } from "./IExpression";
import { BooleanType, DateTimeType, EnumType, NumberType, ObjectID, DataType, StringType, ConstantType, VariableTypes, AnyType } from "./types";
export type IVariable = IVariableBoolean | IVariableDateTime | IVariableEnum | IVariableNumber | IVariableData | IVariableConstant | IVariableString | IVariableAny;
export type IVariableBase = {
    name: string;
    _name: string;
    desc: string;
    type: VariableTypes;
    list?: boolean;
    required?: boolean;
    default?: IExpressionData;
};
export type IVariableAny = IVariableBase & {
    type: AnyType;
};
export type IVariableString = IVariableBase & {
    type: StringType;
    template?: StringTemplates;
    regex?: string;
};
export type IVariableBoolean = IVariableBase & {
    type: BooleanType;
    tristate?: boolean;
    template?: string;
};
export type IVariableEnum = IVariableBase & {
    type: EnumType;
    objectID: ObjectID;
};
export type IVariableDateTime = IVariableBase & {
    type: DateTimeType;
    template?: string;
    format?: string;
};
export type IVariableNumber = IVariableBase & {
    type: NumberType;
    template?: NumberTemplates;
    format?: string;
    digitLengths?: [number, number];
};
export type IVariableData = IVariableBase & {
    type: DataType;
    objectID: ObjectID;
};
export type IVariableConstant = IVariableBase & {
    type: ConstantType;
    ID: string;
};
//# sourceMappingURL=IVariable.d.ts.map