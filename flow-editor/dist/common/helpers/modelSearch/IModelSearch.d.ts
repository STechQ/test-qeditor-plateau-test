import { ModelType } from "../../everything/studio/ui/IStudioUIModelBase";
export interface ILocationResult<TLocationDetail = Record<string, any>> {
    path: string;
    detail: TLocationDetail;
}
export interface IModelSearch<TLocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<TLocationDetail>) => void) => Promise<void>;
}
export interface IModelSearchWorkerRequest {
    modelId: string;
    modelBody: string;
    modelType: ModelType;
    searchValue: string;
    fileName: string;
}
export interface IModelSearchWorkerResponse {
    modelId: string;
    searchResult: Array<ILocationResult>;
}
//# sourceMappingURL=IModelSearch.d.ts.map