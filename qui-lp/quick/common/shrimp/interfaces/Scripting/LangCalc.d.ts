import { ICompJson } from "../ComponentInterfaces/ICompJson";
import { IQJSon } from "../ComponentInterfaces/IQJson";
import { ScriptLang } from "./scriptLang";
export declare class LangCalc {
    static getLang({ self, ctrl, qJson, qLang }: {
        self?: ScriptLang;
        ctrl?: ICompJson;
        qJson?: IQJSon;
        qLang?: ScriptLang;
    }): ScriptLang | undefined;
}
//# sourceMappingURL=LangCalc.d.ts.map