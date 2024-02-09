import { IContextItem } from "../../../../shrimp/context";
export declare const QJsonRetrieverContextName: string;
export declare type QJsonRetrievedType = string | {
    qjson: string;
};
export interface IQJsonRetriever extends IContextItem {
    retrieveQJsonAsync(qjsonPath: string, options?: {
        disableLoading: boolean;
    }): Promise<QJsonRetrievedType>;
}
//# sourceMappingURL=IQJsonRetriever.d.ts.map