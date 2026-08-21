import { ContextManager } from "../../../shrimp/context";
import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
import { IStore } from "../../../shrimp/interfaces/quick/IStore";
export interface IStoreBindingPath {
    storeName: string;
    pathSegments: Array<string | number>;
}
declare class StoreContextInfo {
    targetStoreContext: IStore;
    targetFieldName: string;
    constructor(targetStoreContext: IStore, targetName: string);
}
export declare class StoreManager {
    private context;
    constructor(context: ContextManager);
    static readonly WorkflowContextStoreName = "$context_a236711b-aa1b-4b42-b336-3bb486ca07cd";
    static readonly WorkflowFormContextStoreName = "$formContext_a236711b-aa1b-4b42-b336-3bb486ca07cd";
    private static readonly prefixToSymbol;
    static tryParseBindingField(field: string): IStoreBindingPath | undefined;
    static normalizeBindingField(field: string): string;
    static toBindingPathKey(bindingPath: IStoreBindingPath): string;
    static toStoreFieldPath(rootFieldName: string, pathSegments: Array<string | number>): string;
    private decideStoreContext;
    set(name: string, value: any): void;
    get(name: any): any;
    getPath(bindingPath: IStoreBindingPath): any;
    getPathWithoutTracking(bindingPath: IStoreBindingPath): any;
    getWithoutTracking(name: string): any;
    setPath(bindingPath: IStoreBindingPath, value: any): void;
    delete(name: any): void;
    getAll(name: any): any;
    deleteAll(name: any): void;
    bulkSet(items: IDictionary<any>): void;
    getTargetStore(name: string): StoreContextInfo;
    private getNestedValue;
    private setNestedValue;
    private cloneContainer;
    private areStoreValuesEqual;
    private isPlainStoreObject;
    private static parseBracketSegment;
}
export {};
//# sourceMappingURL=StoreManager.d.ts.map