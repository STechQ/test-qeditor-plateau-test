import { ModelType } from "../../everything/studio/ui/IStudioUIModelBase";
import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
export interface IModelSearchOptions {
    caseSensitive?: boolean;
    wordSensitive?: boolean;
    regex?: boolean;
}
export type IReplacePolicy = boolean;
export interface IModelSearchResultDetail {
    key?: string;
    matchedValue?: string;
    matchedIndex?: number;
    [key: string]: unknown;
}
export interface ILocationResult<TLocationDetail = Record<string, any>> {
    path: string;
    detail?: TLocationDetail;
    isReplaceable?: boolean;
    matchedValue?: string;
}
export interface IModelSearch<TLocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<TLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: any) => Array<IModelBodyObject>;
}
export interface IModelSearchWorkerRequest {
    modelId: string;
    modelBody: string;
    modelType: ModelType;
    searchValue: string;
    fileName: string;
    searchOptions?: IModelSearchOptions;
    isReplaceableForced?: boolean;
}
export interface IModelSearchWorkerResponse {
    modelId: string;
    searchResult: Array<ILocationResult>;
}
//# sourceMappingURL=IModelSearch.d.ts.map