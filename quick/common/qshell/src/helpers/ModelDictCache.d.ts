import { IContextItem } from "../../../shrimp/context";
import { IQJsonRetriever } from "../interfaces/construction/IQJsonRetriever";
import { IModelDependentModel } from "./QJsonHelpers/QJsonCollector";
export interface IModelCacheItem {
    raw: string;
    type: string;
    id: string;
    content: any;
}
export declare const ModelDictCacheContextName = "ModelDictCache";
export declare class ModelDictCache implements IContextItem {
    contextName: string;
    private qjsonRetriever;
    private modelCache;
    constructor({ qjsonRetriever }: {
        qjsonRetriever?: IQJsonRetriever;
    });
    cacheItems(constIds: Array<IModelDependentModel>): Promise<void>;
    removeCache(): void;
    getModel(constantId: string): string | IModelCacheItem | object | undefined;
    private addCache;
    extractDependentIds(rawQjson: any): Array<IModelDependentModel>;
}
//# sourceMappingURL=ModelDictCache.d.ts.map