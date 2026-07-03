import { IModelSearchOptions } from "../IModelSearch";
import { IModelSearchTextMatch } from "./ModelSearchTextMatcher";
export declare class Matcher {
    static findAllMatches(text: string, searchValue: string, searchOptions?: IModelSearchOptions): Array<IModelSearchTextMatch>;
    static replaceFirstOccurrence(value: string, searchValue: string, replaceValue: string, preferredIndex?: number): string | undefined;
}
//# sourceMappingURL=Matcher.d.ts.map