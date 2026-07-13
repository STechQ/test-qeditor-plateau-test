import { IModelSearchOptions, IReplacePolicy } from "../IModelSearch";
import { IModelSearchTextMatch } from "./ModelSearchTextMatcher";
export type IKeySegment = string | number;
export type IPrimitiveSearchValue = string | number | boolean;
export interface IBaseMatchContext<TModel> {
    model: TModel;
    fileName: string;
    searchValue: string;
    searchOptions?: IModelSearchOptions;
    segments: IKeySegment[];
    primitiveValue: IPrimitiveSearchValue;
    textValue: string;
    match: IModelSearchTextMatch;
}
export interface IBaseBuildDetailContext<TModel> extends IBaseMatchContext<TModel> {
    isReplaceable: IReplacePolicy;
}
export interface IBaseBuildPathContext<TModel> extends IBaseMatchContext<TModel> {
}
export interface IReplacementPathContext {
    keySegments: IKeySegment[];
    parent: Record<string, unknown>;
    leaf: IKeySegment;
    currentValue: unknown;
}
export interface IBaseReplacementContext<TModel, TDetail> {
    model: TModel;
    modelBody: string;
    searchValue: string;
    replaceValue: string;
    detail: TDetail;
    matchedValue: string;
    matchedIndex?: number;
    isReplaceable?: boolean;
    pathContext?: IReplacementPathContext;
}
export interface IModelSearchEngineConfig<TModel, TDetail> {
    parseModel: (modelBody: string) => TModel;
    path: (context: IBaseBuildPathContext<TModel>) => string;
    isReplaceable: (context: IBaseMatchContext<TModel>) => boolean;
    buildDetail: (context: IBaseBuildDetailContext<TModel>) => TDetail;
    stringifyModel?: (model: TModel) => string;
    shouldVisitKey?: (key: string, parentSegments: IKeySegment[]) => boolean;
    shouldMatchKey?: (key: string, parentSegments: IKeySegment[]) => boolean;
    applyReplacement?: (context: IBaseReplacementContext<TModel, TDetail>) => boolean;
    attachEncodedKeyToDetail?: boolean;
}
//# sourceMappingURL=types.d.ts.map