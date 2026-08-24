/**
 * @see \test\qjsonV2Tests.spec.ts
 */
import { IQJSon } from "../../interfaces/ComponentInterfaces/IQJson";
import { IQJsonParser } from "./IQJsonParser";
declare class QJsonParserV2 implements IQJsonParser {
    private static boundary;
    static headerPrefix: string;
    static QJsonBodyToString(qjson: IQJSon, unformatQjson?: boolean): string;
    Serialize(qjson: IQJSon): string;
    Parse(jsonString: string): IQJSon;
    private getSection;
    private getTillBoundary;
    private extractHeaders;
    private parseLine;
    private nextLine;
}
declare function removeCR(str: string): string;
export { QJsonParserV2, removeCR };
//# sourceMappingURL=QJsonParserV2.d.ts.map