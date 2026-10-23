import { ContextManager, IContextItem } from "../../../shrimp/context";
import { IComponentCollection } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IContextDepTarget } from "../../../shrimp/interfaces/quick/IStore";
import { IStoreBindingPath } from "./StoreManager";
export declare class TwoWayBindingContext implements IContextItem {
    private readonly context;
    static ContextName: string;
    contextName: string;
    private static readonly valueEvents;
    private static readonly silentValueUpdateComponents;
    private readonly bindings;
    private readonly declaredBindings;
    private readonly declaredBindingsByRoot;
    private readonly storeManager;
    suppressWriteBack: boolean;
    constructor(context: ContextManager);
    declareBindingPath(bindingPath: IStoreBindingPath): void;
    hasDeclaredBinding(bindingPath: IStoreBindingPath): boolean;
    hasNestedBindingForRoot(storeName: string): boolean;
    getDeclaredBindingsForRoot(storeName: string): IStoreBindingPath[];
    getStoreUpdateTargetFields({ compCollection, propName }: {
        compCollection: IComponentCollection;
        propName: string;
    }): string[];
    registerBindingPath({ bindingPath, depTarget }: {
        bindingPath: IStoreBindingPath;
        depTarget?: IContextDepTarget;
    }): void;
    private attachWatcherForCurrentInstance;
    private attachWatcher;
    private writeBackBindingValue;
    private watchComponentValueEvent;
    private disposeBinding;
    private getBindingKey;
    private isTwoWayBindableProp;
    private getWatchField;
    private extractChangeEventValue;
    private extractCheckedValue;
    private interceptField;
    private readFieldValue;
    private findPropertyDescriptor;
}
//# sourceMappingURL=TwoWayBindingContext.d.ts.map