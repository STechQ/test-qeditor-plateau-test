import { ScriptLang } from "../Scripting/scriptLang";
import { ICompJson } from "./ICompJson";
import { ILRID } from "./ILocalResource";
export interface IQJsonOptions {
    /**
     * QJson language
     */
    QL?: ScriptLang;
    V?: number;
}
export interface IQView {
    pJson?: Array<ICompJson>;
    cJson: Array<ICompJson>;
    files?: Record<string, string>;
    cFiles?: Record<string, string>;
}
export interface IQJSon extends IQView {
    lrids?: ILRID;
    clrids?: ILRID;
    description?: string;
    opt?: IQJsonOptions;
    namedViews?: Record<string, IQView>;
}
//# sourceMappingURL=IQJson.d.ts.map