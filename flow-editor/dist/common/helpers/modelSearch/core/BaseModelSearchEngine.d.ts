import { ILocationResult, IModelSearchOptions } from "../IModelSearch";
import { IModelSearchEngineConfig } from "./types";
export declare class BaseModelSearchEngine<TModel, TDetail extends object> {
    private readonly config;
    constructor(config: IModelSearchEngineConfig<TModel, TDetail>);
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<TDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    replacer: (modelBody: string, searchValue: string, replaceValue: string, detail: TDetail) => string;
    private buildDetail;
    private stringify;
    private resolvePathContext;
    private applyDefaultReplacement;
    private getMatchedValue;
    private getMatchedIndex;
    private getIsReplaceable;
    private getKeyFromDetail;
    private isPrimitiveSearchValue;
}
//# sourceMappingURL=BaseModelSearchEngine.d.ts.map