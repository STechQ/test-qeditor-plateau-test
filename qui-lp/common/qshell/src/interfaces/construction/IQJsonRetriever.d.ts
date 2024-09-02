import { IContextItem } from "../../../../shrimp/context";
import { MobileAnimation } from "../../../../shrimp/interfaces/quick/INavigationManager";
export declare const QJsonRetrieverContextName: string;
export declare type QJsonRetrievedType = string | {
    qjson: string;
};
export interface IQJsonRetriever extends IContextItem {
    get disablePagePool(): boolean | undefined;
    retrieveQJsonAsync(qjsonPath: string, options?: {
        disableLoading?: boolean;
        mobileAnimation?: MobileAnimation;
    }): Promise<QJsonRetrievedType>;
}
//# sourceMappingURL=IQJsonRetriever.d.ts.map