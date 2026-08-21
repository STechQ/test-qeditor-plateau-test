import { ContextManager, IContextItem } from "../../../shrimp/context";
import { IContextDepTarget } from "../../../shrimp/interfaces/quick/IStore";
import { IStoreBindingPath } from "./StoreManager";
export declare class TwoWayBindingContext implements IContextItem {
    private readonly context;
    static ContextName: string;
    contextName: string;
    private static readonly changeEventValueComponents;
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
    registerBindingPath({ bindingPath, depTarget }: {
        bindingPath: IStoreBindingPath;
        depTarget?: IContextDepTarget;
    }): void;
    private attachWatcherForCurrentInstance;
    private attachWatcher;
    private writeBackBindingValue;
    private watchComponentChangeEvent;
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