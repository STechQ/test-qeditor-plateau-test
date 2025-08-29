import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
import { IVariable } from "./IVariable";
import { DataTypeModelType, StringType } from "./types";
import { IStoreModelDBEntity } from "../../store/designtimemodels/IStoreModel";
import { IExpressionData } from "./IExpression";
export interface IDataTypeModel extends IModelBaseFields, IDataTypeProperty {
    type: DataTypeModelType;
}
export interface IDataTypeProperty {
    name: string;
    desc: string;
    attributes: Record<string, IVariable>;
    summary?: Array<IDataTypeSummary>;
    keyColumn?: string;
    labels?: Array<IDataTypeLabelExpression>;
    persistency?: {
        collectionName: string;
        queries: Array<IQuery>;
    };
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
export type IQuerySource = "database";
export interface IAggregation {
    type: "group" | "project";
    output: string;
    operator?: string;
    attribute: string;
}
export type IQueryType = 'INSERT' | 'UPDATE' | 'DELETE' | 'SELECT';
export interface IQuery {
    id: string;
    name: string;
    source: IQuerySource;
    type: IQueryType;
    filter: Record<string, any>;
    filterRuleSet: any;
    fields: IAggregation[];
    isMultipleResult?: boolean;
    store: IStoreModelDBEntity;
    limit?: IExpressionData;
    skip?: IExpressionData;
}
//# sourceMappingURL=IDataTypeModel.d.ts.map