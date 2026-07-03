import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
type ICodeRange = {
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
};
export type IFlowLocationDetail = {
    stepID: Array<string>;
    fileName: string;
    mappingName?: string;
    key?: string;
    matchedValue?: string;
    isReplaceable?: boolean;
    code?: ICodeRange;
};
export declare class FlowModelSearch implements IModelSearch<IFlowLocationDetail> {
    private readonly excludedKeys;
    constructor(excludedKeys?: Set<string>);
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IFlowLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IFlowLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private shouldVisitKey;
    private applyReplacement;
    private buildReplacePolicy;
    private buildReadablePath;
    private extractStepContext;
    private extractMappingName;
    private isMappingValuePath;
    private isCodeValuePath;
    private getMappingType;
    private replaceCodeByLocation;
}
export {};
//# sourceMappingURL=flowModelSearch.d.ts.map