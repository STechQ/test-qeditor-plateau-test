export declare class CachedEvalHelper {
    private cachedEvals;
    constructor();
    /**
     * Merges global variables with "Quick" fields and replaces fields
     * from globals with '_' prefix if * names are matched
     * @param globalVariables Global variables of evaluator
     */
    MergeEvalGlobals(globalVariables: Object): void;
    /**
     * Defines Quick variables
     */
    QuickVariables(): Object;
}
//# sourceMappingURL=CachedEvalHelper.d.ts.map