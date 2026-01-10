import { AST } from 'lucene';
import { Document, Filter } from "mongodb";
import { CollectionName } from "../../../runtime/infrastructure/mongo/IDataStoreManager";
export type LuceneConvertableDBTypes = "mongo";
export type IValidationResult = {
    valid: false;
    error: string;
} | {
    valid: true;
    ast: AST;
};
export type IQueryBuildTypes = Filter<Document>;
export type HumanReadableCollName = "instance";
export declare const luceneCollDict: Record<HumanReadableCollName, {
    collNames: Array<CollectionName>;
    pidSeperated?: true;
    excludedFields: Array<string>;
}>;
interface FieldObject {
    [key: string]: boolean | FieldObject;
}
type SortingOptions = Record<string, 1 | -1>;
export type FieldType = FieldObject & {
    [K in string]: boolean | FieldObject;
} & (keyof FieldObject extends never ? never : unknown);
export interface IDataSearchParams {
    collection: keyof typeof luceneCollDict;
    processIds: Array<string>;
    query: string;
    limit?: number;
    offset?: number;
    fields?: FieldType;
    sort?: SortingOptions;
}
export type IDataSearchResult = {
    data: Array<any>;
    pagination?: {
        total: number;
        limit: number;
        offset: number;
    };
};
export {};
//# sourceMappingURL=IDataSearch.d.ts.map