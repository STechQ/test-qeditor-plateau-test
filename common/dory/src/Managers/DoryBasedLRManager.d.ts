import { ContextManager, IContextItem } from "../../../shrimp/context";
import { ILRID } from "../../../shrimp/interfaces/ComponentInterfaces/ILocalResource";
import { IEvaluator } from "../../../shrimp/interfaces/Scripting/IEvaluator";
export declare class DoryBasedLRManager implements IContextItem {
    static ContextName: string;
    contextName: string;
    evaluator: IEvaluator;
    currentContext: ContextManager;
    resourceDict: ILRID | undefined;
    private currentLRType?;
    private currentLRTypeRTL;
    private RTL;
    constructor(currentContext: ContextManager);
    set LRType(lrType: string | undefined);
    get LRType(): string | undefined;
    set LRTypeRTL(rtl: boolean);
    get LRTypeRTL(): boolean;
    set ResourceDict(CLRs: ILRID | undefined);
    private setCurrentLRTypeRTLByResourceDict;
    GetResource({ context, key, dataSource }: {
        context: ContextManager;
        key: string;
        dataSource?: object | null;
    }): string | null | undefined;
    ImportResourceDict(langCode: string, localization: Record<string, string>, options?: {
        overrite?: boolean;
    }): void;
    private addQuotesToStr;
}
//# sourceMappingURL=DoryBasedLRManager.d.ts.map