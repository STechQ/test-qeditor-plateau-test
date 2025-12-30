import { IContextItem } from "../../../../shrimp/context";
import { MobileAnimationType } from "../../../../shrimp/interfaces/quick/INavigationManager";
import { IModelCacheItem } from "../../helpers/ModelDictCache";
export declare const QJsonRetrieverContextName: string;
export declare type QJsonRetrievedType = string | {
    qjson: string;
};
export declare type ModelRetrievedType = object | string;
export declare type RetrieveModelsReturnType = Array<IModelCacheItem>;
export interface IRetrieveModels {
    type: IModelCacheItem["type"];
    id: IModelCacheItem["id"];
    raw: IModelCacheItem["raw"];
}
export interface IQJsonRetriever extends IContextItem {
    get disablePagePool(): boolean | undefined;
    retrieveQJsonAsync(qjsonPath: string, options?: {
        disableLoading?: boolean;
        mobileAnimation?: MobileAnimationType;
    }): Promise<QJsonRetrievedType>;
    retrieveModelAsync(data: {
        modelPath: string;
        options: {
            disableLoading: boolean;
        };
    }): Promise<ModelRetrievedType>;
    getMultipleModels(modelPaths: Array<IRetrieveModels>, options: {
        disableLoading: boolean;
    }): Promise<RetrieveModelsReturnType | undefined>;
}
//# sourceMappingURL=IQJsonRetriever.d.ts.map