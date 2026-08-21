import { IContextItem } from "./IContextItem";
export declare class ContextManager {
    private contextItems;
    constructor();
    /**
     * Register item to context
     * @param item item to register
     */
    RegisterItem(item: IContextItem, options?: {
        override?: boolean;
    }): void;
    GetOrCreate<contextItemType extends IContextItem>(contextItemName: string, contextCreatorCb: () => contextItemType): contextItemType;
    /**
     * Gets last Item. Use ! if it must exist.
     */
    GetItemSingle<contextItemType extends IContextItem>(contextItemName: string): contextItemType | undefined;
    GetItemGroup<contextItemType extends IContextItem>(contextItemName: string): Array<contextItemType> | null;
    ClearItemGroup(contextItemName: string): void;
    ClearItem(c: IContextItem): void;
    /**
     * Shallow copy of self
     * @param fields if specified, only puts those fields in the clone
     */
    Clone(fields?: Array<string>): ContextManager;
    /**
     * Get Contexts registered context item keys
     */
    GetKeys(): string[];
}
//# sourceMappingURL=contextManager.d.ts.map