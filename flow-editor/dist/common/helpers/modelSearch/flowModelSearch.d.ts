import { ILocationResult, IModelSearch } from "./IModelSearch";
export type IFlowLocationDetail = {
    stepID: Array<string>;
    fileName: string;
    mappingName?: string;
    code?: {
        startLine: number;
        startColumn: number;
        endLine: number;
        endColumn: number;
    };
};
export declare class FlowModelSearch implements IModelSearch<IFlowLocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IFlowLocationDetail>) => void) => Promise<void>;
}
//# sourceMappingURL=flowModelSearch.d.ts.map