import { ContextManager } from "../../../shrimp/context";
import { PageScripting } from "../../../shrimp/helpers/scripting/PageScripting";
import { IComponentCollection } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IEvaluator } from "../../../shrimp/interfaces/Scripting/IEvaluator";
import { IGlobalsQS } from "../../../shrimp/interfaces/Scripting/IGlobals";
import { ScriptLang } from "../../../shrimp/interfaces/Scripting/scriptLang";
import { Dory } from "../Dory";
import { HistoryItem } from "../Model/History/HistoryItem";
import { HistoryManager } from "./../Managers/HistoryManager";
import { MessagingManager } from "./MessagingManager";
export declare class Evaluator implements IEvaluator {
    Evaluate2(options: {
        scriptName: string;
        pageScripting: PageScripting;
        dataSource?: object | null;
        context: ContextManager;
    }): any;
    Evaluate({ script, dataSource, context, lang, sourceMap, }: {
        script?: string | object;
        dataSource?: object | null;
        context: ContextManager;
        lang?: ScriptLang;
        sourceMap?: string;
    }): any;
    private prepareEvaluationItems;
    createGlobal({ messagingManager, context, dory, ownerComponent, lastHistory, historyManager }: {
        messagingManager?: MessagingManager;
        context: ContextManager;
        dory: Dory;
        ownerComponent?: IComponentCollection;
        lastHistory?: HistoryItem | null;
        historyManager: HistoryManager;
    }): IGlobalsQS;
    generateCodeChallenge(codeVerifier: any): Promise<string>;
    generateRandomString(length: any): string;
    private fillComponentData;
    private isObject;
    private urlConcat;
    private encode;
    /**
     * Deep merge two objects.
     * @param target
     * @param ...sources
     */
    private mergeDeep;
}
//# sourceMappingURL=Evaluator.d.ts.map