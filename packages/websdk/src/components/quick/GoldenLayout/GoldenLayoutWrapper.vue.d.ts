import Vue from "vue";
import GoldenLayout from "golden-layout";
import { IComponentCollection } from "../../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IDomElement } from "../../../../../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
import { ContextManager } from "../../../../../../common/shrimp/context";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    config: {
        settings: {
            showPopoutIcon: boolean;
            selectionEnabled: boolean;
        };
        dimensions: {};
        content: {
            type: string;
            id: string;
            content: {
                type: string;
                componentName: string;
                title: string;
                componentState: {
                    id: string;
                    text: string;
                    class: string;
                };
            }[];
        }[];
    };
    getGoldenLayout: () => GoldenLayout;
    getContentItems: () => Array<any>;
    getComponentInCreation: () => IComponentCollection;
    componentCb: () => IComponentCollection;
    StateChangedForDesign: boolean;
    closedPanes: never[];
    containerWidth: number;
    containerHeight: number;
    childWindows: never[];
}, {
    getClosedPanes(): never[];
    getConfig(): any;
    setConfig(val: GoldenLayout.Config): void;
    findContentItem(paneName: string): any;
    changeTitle(childName: string, newTitle: string): void;
    removePane(paneName: string): void;
    addItem({ childName, config }: {
        childName?: string | undefined;
        config?: GoldenLayout.ContentItem | GoldenLayout.ItemConfigType | undefined;
    }): any;
    goldenLayoutInit(stateChangedForDesign: boolean): void;
    removeItem(deletedChildNames: Array<string>): void;
    customChildAppender({ childName, createdComps }: {
        childName: string;
        createdComps: Array<IDomElement>;
    }): void;
    appendDomElements(container: any, componentConfig: any): void;
    onStackClose(stack: any): void;
    resizeObserver(): void;
    closeChildWindows(): void;
}, unknown, {
    _renderingProps: {
        context: () => ContextManager;
        isEditMode: boolean;
    };
    width: string;
    height: string;
    glConfig: any;
    childNames: unknown[];
    dimensions: any;
}>;
export default _default;
//# sourceMappingURL=GoldenLayoutWrapper.vue.d.ts.map