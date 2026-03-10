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
export type IQueryType = 'INSERT' | 'INSERT MANY' | 'UPDATE' | 'DELETE' | 'SELECT' | 'COUNT';
export declare const INSERT_MANY_QUERY_NAME = "insertManyQuery";
export interface IQuerySort {
    type: "asc" | "desc";
    field: string;
}
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
    sort?: IQuerySort[];
}
//# sourceMappingURL=IDataTypeModel.d.ts.map