import { IModelSearchOptions } from "../IModelSearch";
export interface IModelSearchTextMatch {
    index: number;
    value: string;
}
export declare class ModelSearchTextMatcher {
    static findAllMatches(text: string, searchValue: string, searchOptions?: IModelSearchOptions): Array<IModelSearchTextMatch>;
    static isMatch(text: string, searchValue: string, searchOptions?: IModelSearchOptions): boolean;
    private static prepareMatcher;
    private static buildFlags;
    private static escapeRegExp;
}
//# sourceMappingURL=ModelSearchTextMatcher.d.ts.map