import { ScriptLang } from "../Scripting/scriptLang";
import { ICompJson } from "./ICompJson";
import { ILRID } from "./ILocalResource";
export interface IQJsonStudio {
    /** All studio tag values keyed by tag label (e.g. tags['Channel']). */
    tags?: Record<string, string>;
    /** Application info. */
    app?: {
        name?: string;
        id?: string;
    };
    /** Model (page) info. */
    model?: {
        name?: string;
        id?: string;
    };
    /** Organization info. */
    org?: {
        name?: string;
    };
    /** Organization group name. */
    orgGroupName?: string;
}
export interface IQJsonOptions {
    /**
     * QJson language
     */
    QL?: ScriptLang;
    V?: number;
    otelDiag?: string;
    otelChannel?: string;
    /** Studio metadata injected on export. */
    studio?: IQJsonStudio;
}
export interface IQView {
    pJson?: Array<ICompJson>;
    cJson: Array<ICompJson>;
    files?: Record<string, string>;
    cFiles?: Record<string, string>;
}
export interface IQJsonSecurity {
    privileges?: string[];
}
export interface IQJSon extends IQView {
    lrids?: ILRID;
    clrids?: ILRID;
    description?: string;
    opt?: IQJsonOptions;
    namedViews?: Record<string, IQView>;
    security?: IQJsonSecurity;
}
//# sourceMappingURL=IQJson.d.ts.map