import { IContextItem } from "../../../../shrimp/context";
import { IComponent, IComponentClassEngine } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponent";
import { IComponentCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IVnode } from "../../../../shrimp/interfaces/ComponentInterfaces/IVnode";
import { CreateComponentDelegate } from "../../../../shrimp/interfaces/quick/IShellConfiguration";
export declare const ComponentManagerContextName: string;
export interface IComponentManager extends IContextItem {
    componentHasProp(componentName: string, compInstance: IComponent | undefined, propName: string): boolean;
    coreComponentOverrider?(componentName: string): IComponentClassEngine | null;
    createComponent: CreateComponentDelegate;
    tsComponentWrapper?: Function;
    createContainerView?(compUID: string): any;
    updateContainerView(options: {
        givenObject: any;
        elements?: Array<any> | string;
        pageShift: boolean;
    }): any;
    setVisibility(compCollection: IComponentCollection, compVisibility: boolean): void;
    setDisable(compColl: IComponentCollection, compDisable: boolean): void;
    getComponentValue(compCollection: IComponentCollection): any;
    setComponentValue(compCollection: IComponentCollection, value: string): void;
    getComponentStyle(comp: IComponent): any;
    setComponentStyle(compCollection: IComponentCollection, prop?: string, value?: string): void;
    onComponentDestroy?: ({ parentComponent, childVDomElement, childKey, }: {
        parentComponent: IComponent;
        childVDomElement: IVnode;
        childKey: string;
    }) => void;
    createComponentQValue(compCollection: IComponentCollection): any;
}
//# sourceMappingURL=IComponentManager.d.ts.map