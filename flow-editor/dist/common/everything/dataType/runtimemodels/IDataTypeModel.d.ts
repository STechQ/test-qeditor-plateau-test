import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
import { IVariable } from "./IVariable";
import { DataTypeModelType, StringType } from "./types";
export interface IDataTypeModel extends IModelBaseFields, IDataTypeProperty {
    type: DataTypeModelType;
}
export interface IDataTypeProperty {
    name: string;
    _name: string;
    desc: string;
    attributes: Record<string, IVariable>;
    summary?: Array<IDataTypeSummary>;
    keyColumn?: string;
    labels?: Array<IDataTypeLabelExpression>;
}
export interface IDataTypeLabelExpression {
    type: StringType | 'attribute';
    value: string;
}
export interface IDataTypeSummary {
    attribute: string;
    header: string;
    display?: boolean;
}
//# sourceMappingURL=IDataTypeModel.d.ts.map