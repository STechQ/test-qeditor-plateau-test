import { ContextManager } from "../../../../shrimp/context";
import { CTyped, ICompJson } from "../../../../shrimp/interfaces/ComponentInterfaces/ICompJson";
import { IComponent } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponent";
import { CreatedFieldsHook, IComponentCollection, ScopedSlotCreatorFunc, qjsonCollectionInfo } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { ICreatedComponent } from "../../../../shrimp/interfaces/ComponentInterfaces/ICreatedComponent";
import { IDirectiveCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IDirectiveCollection";
import { IEventCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IEventCollection";
import { StyleValue } from "../../../../shrimp/interfaces/ComponentInterfaces/IStyle";
import { IVnode } from "../../../../shrimp/interfaces/ComponentInterfaces/IVnode";
import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
import { IDictionaryNullable } from "../../../../shrimp/interfaces/IDictionaryNullable";
import { IDomElement } from "../../../../shrimp/interfaces/RenderingInterfaces/IDomElement";
import { IDoryJr } from "../../../../shrimp/interfaces/RenderingInterfaces/IDoryJr";
import { CompGroupType } from "../../../../shrimp/interfaces/quick/IWebSDK";
import { HistoryItem } from "../History/HistoryItem";
export declare class ComponentCollection implements IComponentCollection {
    static IterateToChild(controlListOrItem: Array<IComponentCollection> | IComponentCollection, callback: (item: IComponentCollection) => boolean, options?: {
        iterateDoryJrs?: boolean;
    }): void;
    collectionRef: {
        ref: ComponentCollection;
    };
    component?: IComponent;
    domElement?: IDomElement;
    vDomElement?: IVnode;
    asChildType: CTyped;
    asChildName?: string;
    events: IEventCollection;
    compId: string;
    compEID: string;
    compType: string;
    children?: IDictionary<Array<IComponentCollection>>;
    childrenCreators?: IDictionaryNullable<ScopedSlotCreatorFunc>;
    context: ContextManager;
    childrenType?: CTyped;
    compGroupType?: CompGroupType;
    parentCompCollection?: IComponentCollection;
    class?: string;
    compDomClass?: string;
    lockedFields?: Record<string, boolean>;
    private createdFieldsHook;
    private _componentVisibility;
    private compInstanceSetCb?;
    asChildIndex: number;
    compareComponent: boolean;
    private doryJr?;
    dynamicCompIdSuffix?: string;
    private rootHistoryItem;
    directiveFields: IDirectiveCollection;
    compStyleValues?: StyleValue;
    qjsonInfo: qjsonCollectionInfo;
    constructor({ compJson, context, asChildType, asChildName, asChildIndex, parentCompCollection, compareComponent, dynamicCompIdSuffix, qjsonVersion }: {
        compJson?: ICompJson;
        context: ContextManager;
        asChildType?: CTyped;
        asChildName?: string;
        asChildIndex: number;
        parentCompCollection?: IComponentCollection;
        compareComponent?: boolean;
        dynamicCompIdSuffix?: string;
        qjsonVersion?: number;
    });
    get RootHistoryItem(): HistoryItem;
    SetChildrenFields({ children, childrenCreators }: {
        children?: IDictionary<Array<IComponentCollection>>;
        childrenCreators?: IDictionaryNullable<ScopedSlotCreatorFunc>;
    }): void;
    SetComponentCreatedFields({ createdComponent, keepAnEyeOnCreatedCompInst }: {
        createdComponent: ICreatedComponent;
        keepAnEyeOnCreatedCompInst?: boolean;
    }): void;
    get componentVisibility(): boolean;
    set componentVisibility(componentVisibility: boolean);
    WatchCreatedFields(cb: CreatedFieldsHook): void;
    SetInitialProps(props: IDictionary<any>): void;
    /**
     * If component makes an internal rendering for a QJSON (ex: customComponent | renderingComponent) retrieves components internal doryJr.
     * Assumed max 1 doryJr
     */
    GetDoryJr(): IDoryJr | undefined;
    SetDoryJr(doryJr: IDoryJr): void;
    GetCompUID(): string;
    SetComponentStyles(compStyles?: StyleValue): void;
    /**
     * Create style field on the component instance and proxify the newly created field
     * @param compCollection Component collection
     * @returns void
     */
    proxifyStyleField(compCollection: IComponentCollection): void;
    private matchThemeColors;
    /**
     * Create style field on the component instance and proxify the newly created field
     * @param compCollection Component collection
     * @returns void
     */
    watchStyledComponent(compCollection: IComponentCollection): void;
}
//# sourceMappingURL=ComponentCollection.d.ts.map