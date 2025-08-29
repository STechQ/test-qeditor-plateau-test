import { IExportItem } from "../../domain/model/IExportJob";
export type FileUrlCreationRuleName = "superApp";
export declare class FileUrlCreator {
    private _ruleSet;
    constructor(ruleName: FileUrlCreationRuleName);
    getItemRelativeUrl(item: IExportItem): string;
    private findUrlToReplace;
    private getItemFieldValueAsString;
}
//# sourceMappingURL=fileUrlCreator.d.ts.map