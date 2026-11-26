import { ContextManager, IContextItem } from "../../../shrimp/context";
import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
import { IEvaluator } from "../../../shrimp/interfaces/Scripting/IEvaluator";
import { ScriptLang } from "../../../shrimp/interfaces/Scripting/scriptLang";
export declare class HistoryItemBasedLRManager implements IContextItem {
    static ContextName: string;
    contextName: string;
    evaluator: IEvaluator;
    currentContext: ContextManager;
    resourceDict: IDictionary<string>;
    private currentLRType?;
    private currentLRTypeRTL?;
    private qLang?;
    private RTL;
    constructor({ currentContext, qLang }: {
        currentContext: ContextManager;
        qLang?: ScriptLang;
    });
    get LRType(): string | undefined;
    get LRTypeRTL(): boolean | undefined;
    SetResourceDict(CLRs: IDictionary<string>, lrType: string | undefined): void;
    GetResource({ key, dataSource, returnKey }: {
        key: string;
        dataSource?: object | null;
        returnKey?: boolean;
    }): string | null | undefined;
}
//# sourceMappingURL=HistoryItemBasedLRManager.d.ts.map