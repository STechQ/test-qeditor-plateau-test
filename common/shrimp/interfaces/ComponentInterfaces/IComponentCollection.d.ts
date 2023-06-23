import { IPerfable } from "../../src/Performance/IPerfable";
import { ContextManager } from "../../context";
import { IVnode } from "../ComponentInterfaces/IVnode";
import { IDictionary } from "../IDictionary";
import { IDictionaryNullable } from "../IDictionaryNullable";
import { CompGroupType } from "../quick/IWebSDK";
import { IDomElement } from "../RenderingInterfaces/IDomElement";
import { CTyped } from "./ICompJson";
import { IComponent } from "./IComponent";
import { ICreatedComponent } from "./ICreatedComponent";
import { IEventCollection } from "./IEventCollection";
import { IDoryJr } from "../RenderingInterfaces/IDoryJr";
import { IHistoryItem } from "../RenderingInterfaces/IHistoryItem";
import { IDirectiveCollection } from "./IDirectiveCollection";
import { StyleValue } from "./IStyle";
export declare type ScopedSlotCreatorFunc = (scopeObject?: IDictionary<any>) => Array<IComponentCollection>;
export declare type CreatedFieldsHook = (created: ICreatedComponent) => void;
export declare function CreateLightComponentCollection({ compType, compId, parentCompCollection, compDomClass, component }: {
    compType: string;
    compId: string;
    parentCompCollection?: ILightComponentCollection;
    compDomClass?: string;
    component?: IComponent;
}): ILightComponentCollection;
export interface ILightComponentCollection {
    compId: string;
    compType: string;
    compDomClass?: string;
    parentCompCollection?: ILightComponentCollection;
    children?: IDictionary<Array<ILightComponentCollection>>;
    component?: IComponent;
    readonly RootHistoryItem: IHistoryItem;
    /**
     * Unique ID based upon compID(*) throughout the whole page including DoryJr(s) (CustomComponents). (*) has prefixes of owner DoryLike(Dory | DoryJr) creator-comp(CustomComp) UID based on their compID
     */
    GetCompUID(): string;
    GetDoryJr(): IDoryJr | undefined;
    SetDoryJr(doryJr: IDoryJr): void;
}
export interface qjsonCollectionInfo {
    ver?: number;
}
export interface IComponentCollection extends ILightComponentCollection, IPerfable {
    domElement?: IDomElement;
    vDomElement?: IVnode;
    asChildType: CTyped;
    asChildName?: string;
    events: IEventCollection;
    compEID: string;
    children?: IDictionary<Array<IComponentCollection>>;
    childrenCreators?: IDictionaryNullable<ScopedSlotCreatorFunc>;
    context: ContextManager;
    componentVisibility: boolean;
    childrenType?: CTyped;
    asChildIndex: number;
    compGroupType?: CompGroupType;
    lockedFields?: Record<string, boolean>;
    parentCompCollection?: IComponentCollection;
    class?: string;
    compareComponent?: boolean;
    dynamicCompIdSuffix?: string;
    directiveFields: IDirectiveCollection;
    additionals?: Record<string, any>;
    compStyleValues?: StyleValue;
    qjsonInfo: qjsonCollectionInfo;
    SetChildrenFields({ children, childrenCreators }: {
        children?: IDictionary<Array<IComponentCollection>>;
        childrenCreators?: IDictionaryNullable<ScopedSlotCreatorFunc>;
    }): void;
    SetComponentCreatedFields({ createdComponent, keepAnEyeOnCreatedCompInst }: {
        createdComponent: ICreatedComponent;
        keepAnEyeOnCreatedCompInst?: boolean;
    }): void;
    WatchCreatedFields(cb: CreatedFieldsHook): void;
    SetInitialProps(props: IDictionary<any>): void;
    SetComponentStyles(compStyles?: StyleValue): void;
}
//# sourceMappingURL=IComponentCollection.d.ts.map