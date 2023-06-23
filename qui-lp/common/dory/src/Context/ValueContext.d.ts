import { ContextManager, IContextItem } from "../../../shrimp/context";
import { ValueStatus } from "../../../shrimp/helpers/compDiffHelper";
import { IComponentCollection } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
export declare type comparedValueType = {
    label: string;
    value: string;
    compareValue: string;
    statu: ValueStatus;
};
export declare class ValueContext implements IContextItem {
    static ContextName: string;
    contextName: string;
    private context;
    constructor({ context }: {
        context: ContextManager;
    });
    private valueContextList;
    private _valueContext;
    getValueContext(): {};
    getValueContextList(referenceCompId: string): comparedValueType[];
    private getAllChildrenComponentCollection;
    getCustomComponentCollectionsByCompId(customComponentId: string): IComponentCollection[];
}
//# sourceMappingURL=ValueContext.d.ts.map