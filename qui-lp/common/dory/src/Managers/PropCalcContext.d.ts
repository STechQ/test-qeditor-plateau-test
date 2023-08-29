import { ContextManager, IContextItem } from "../../../shrimp/context";
import { ScriptLang } from "../../../shrimp/interfaces/Scripting/scriptLang";
import { ICompDepTarget, IContextDepTarget, IContextTargetInst, IStore } from "../../../shrimp/interfaces/quick/IStore";
export declare class PropCalcContext implements IContextItem {
    static ContextName: string;
    contextName: string;
    private evaluator;
    private contextTarget?;
    context: ContextManager;
    constructor(context: ContextManager, contextTarget?: IContextDepTarget);
    watch(bindObject: IStore, field: string): void;
    /**
     * Return prop context value
     * @param self 'this' will be lost when triggering from Object defined get method
     */
    propContextDepGetter(self: PropCalcContext): IContextDepTarget | undefined;
    /**
     * Trigger the dependent target with new value
     * @param depTarget Dependency target
     * @param dataItem Evaluator dataSource
     * @param self 'this' will be lost when triggering from Object defined get method
     * @param lang Evaluator language option
     */
    propContextDepTriggerer({ depTarget, dataItem, self, lang }: {
        depTarget: IContextDepTarget;
        dataItem: object;
        self: PropCalcContext;
        lang?: ScriptLang;
    }): void;
    /**
     * Set prop context value with field and scriptValue
     * @param instanceHolder Target object instance
     * @param field Binded field
     * @param scriptValue Binded script value
     */
    setContextTarget(instanceHolder: IContextTargetInst, field: string, scriptValue: string | object): void;
    /**
     * Reset prop context
     */
    clearPropTarget(): void;
    isTargetCompInstance(targetInstance: ICompDepTarget): targetInstance is ICompDepTarget;
}
//# sourceMappingURL=PropCalcContext.d.ts.map