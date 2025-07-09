import Vue from "vue";
import { IComponentManager } from "../../../../common/qshell";
import { ContextManager } from "../../../../common/shrimp/context";
import { ElementLocation } from "../../../../common/shrimp/interfaces/ComponentInterfaces/ElementLocation";
import { CType } from "../../../../common/shrimp/interfaces/ComponentInterfaces/ICompJson";
import { IComponent } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IComponent";
import { IComponentCollection, ILightComponentCollection, ScopedSlotCreatorFunc } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { ICreatedComponent } from "../../../../common/shrimp/interfaces/ComponentInterfaces/ICreatedComponent";
import { IDirectiveElement } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IDirectiveCollection";
import { IVnode } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IVnode";
import { IDictionary } from "../../../../common/shrimp/interfaces/IDictionary";
export declare class ComponentManagerImpl implements IComponentManager {
    contextName: string;
    parentInstance: any;
    constructor(contextName: string, parentInstance: any);
    componentHasProp(componentName: string, compInstance: IComponent | undefined, propName: string): boolean;
    private compPropModifier;
    createComponent({ componentName, props, events, asChildType, asChildName, slots, scopedSlots, compClass, text, attrs, componentCollection, directives }: {
        componentName: string;
        props: IDictionary<any>;
        events?: IDictionary<Function> | undefined;
        asChildType: CType | null;
        asChildName?: string;
        slots?: IDictionary<Array<IVnode>>;
        scopedSlots?: IDictionary<ScopedSlotCreatorFunc>;
        compClass?: string;
        text?: string;
        attrs?: IDictionary<any>;
        componentCollection: ILightComponentCollection;
        directives?: Array<IDirectiveElement>;
    }): ICreatedComponent;
    private createChartComp;
    createContainerView(compUID: string): HTMLDivElement;
    updateContainerView({ givenObject, elements }: {
        givenObject: any;
        elements?: string | any[] | undefined;
        pageShift: boolean;
    }): void;
    tsComponentWrapper(): import("vue/types/vue").ExtendedVue<Vue, unknown, {
        GetProps(propsCB: (props?: import("../../common/shrimp/interfaces/ComponentInterfaces/IExternalProp").IExternalProp[] | undefined) => void): any;
        GetEvents(eventsCB: (events?: import("../../common/shrimp/interfaces/ComponentInterfaces/IExternalEvents").IExternalEvents[] | undefined) => void): any;
        GetQJson(): any;
        OutBoundProps(props: IDictionary<any>): void;
        OutBoundEvents(events: any): void;
    }, unknown, {
        _renderingProps: {
            context: () => ContextManager;
            events: () => IDictionary<Function>;
            props: () => IDictionary<Object>;
            targetLocalComponent: () => any;
        };
    }>;
    /**
     * Add new slot(VDomElement) to the parent component and mount it
     * @param parentCompCollection Parent component collection created new component
     * @param slot Created component vDomElement that will be pushed into the parentcompslot array
     * @param compLocater Location of new component will be placed into
     */
    addNewSlotToParentComp({ parentCompCollection, slots, compLocater, childName }: {
        parentCompCollection: IComponentCollection;
        slots: Array<IVnode>;
        compLocater: ElementLocation;
        childName: string;
    }): void;
    setVisibility(compColl: IComponentCollection, compVisibility: boolean): void;
    setDisable(compColl: IComponentCollection, compDisable: boolean): void;
    getComponentValue(compColl: IComponentCollection): any;
    setComponentValue(compColl: IComponentCollection, value: string): void;
    getComponentStyle(comp: IComponent): any;
    setComponentStyle(compCollection: IComponentCollection, prop: string, value: string): void;
    onComponentDestroy({ parentComponent, compColl, childKey }: {
        parentComponent?: IComponent;
        compColl: IComponentCollection;
        childKey?: string;
    }): void;
    createComponentQValue(compCollection: IComponentCollection): void;
}
//# sourceMappingURL=ComponentManagerImpl.d.ts.map