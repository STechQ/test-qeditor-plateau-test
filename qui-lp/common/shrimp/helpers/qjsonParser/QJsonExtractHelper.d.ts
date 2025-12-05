import { IQJSon } from "../../interfaces/ComponentInterfaces/IQJson";
export declare class QJsonExtractHelper {
    static qJsonExtractor(qjsonData: string | {
        qjson: string;
    }): IQJSon;
    static qJsonExtractor2(qjsonData: string | {
        qjson: string;
    }): {
        qjson: IQJSon;
        jsonString: string;
    };
    private static qJsonMediumDecider;
    private static ParseQJsonContent;
}
//# sourceMappingURL=QJsonExtractHelper.d.ts.map