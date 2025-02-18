import { ContextManager } from "../../context";
import { PageScripting } from "../../helpers/scripting/PageScripting";
import { ScriptLang } from "./scriptLang";
export interface IEvaluator {
    Evaluate({ script, dataSource, context, lang, sourceMap }: {
        script?: string | object;
        dataSource?: object | null;
        context: ContextManager;
        lang?: ScriptLang;
        sourceMap?: string;
    }): any;
    Evaluate2(options: {
        scriptName: string;
        pageScripting: PageScripting;
        dataSource?: object | null;
        context: ContextManager;
    }): any;
}
export declare const TsFilterKeysGlobals: Record<string, boolean>;
//# sourceMappingURL=IEvaluator.d.ts.map