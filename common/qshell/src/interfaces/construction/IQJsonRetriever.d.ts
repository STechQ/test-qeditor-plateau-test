import { IContextItem } from "../../../../shrimp/context";
import { MobileAnimationType } from "../../../../shrimp/interfaces/quick/INavigationManager";
export declare const QJsonRetrieverContextName: string;
export declare type QJsonRetrievedType = string | {
    qjson: string;
};
export declare type ModelRetrievedType = object | string;
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
}
//# sourceMappingURL=IQJsonRetriever.d.ts.map