import { ContextManager } from "../../../shrimp/context";
import { CType, IOptJson } from "../../../shrimp/interfaces/ComponentInterfaces/ICompJson";
import { IComponentCollection, ScopedSlotCreatorFunc } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { ICreatedComponent } from "../../../shrimp/interfaces/ComponentInterfaces/ICreatedComponent";
import { IDirectiveElement } from "../../../shrimp/interfaces/ComponentInterfaces/IDirectiveCollection";
import { IEventCollection } from "../../../shrimp/interfaces/ComponentInterfaces/IEventCollection";
import { StyleValue } from "../../../shrimp/interfaces/ComponentInterfaces/IStyle";
import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
export declare class ComponentCommunicator {
    CreateComponent({ componentName, props, events, context, asChildType, asChildName, children, parentInst, childrenCreators, compCollection, compClass, text, attrs, compareCompValue, directives, styles }: {
        componentName: string;
        props: IDictionary<any>;
        events: IEventCollection;
        context: ContextManager;
        asChildType: CType | null;
        asChildName?: string;
        children?: IDictionary<Array<IComponentCollection>>;
        parentInst: any | null;
        childrenCreators?: IDictionary<ScopedSlotCreatorFunc>;
        compCollection: IComponentCollection;
        compClass?: string;
        text?: string;
        attrs?: IDictionary<any>;
        compareCompValue: boolean;
        directives?: Array<IDirectiveElement>;
        styles?: StyleValue;
    }): ICreatedComponent;
    private setDoryProps;
    private static compCreatePostActions;
    private static injectFields;
    /**
     * Define component properties of the component dictionary from the quick-shrimp.
     * Listen those defined props to calculate its border and tooltip.
     * Also listen component instance whenever a change has been made on it.
     * @param createdComponent Created component instance
     * @param compCollection Created component collection(can't use only this collection to get comp instance bc the instance is not on it yet)
     */
    private calcComponentDiff;
    ComponentHasProp(componentName: string, options: IOptJson, propName: string, context: ContextManager): boolean;
    private arrangeChildren;
    private arrangeSiteSettingsProps;
    private findLocalComponent;
    private createLocalComponent;
    private doStyle;
}
//# sourceMappingURL=ComponentCommunicator.d.ts.map