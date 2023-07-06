import { ContextManager } from "../../context";
import { IDictionary } from "../IDictionary";
import { IDomElement } from "../RenderingInterfaces/IDomElement";
import { IDirectiveElement } from "./IDirectiveCollection";
import { IExtention } from "./IExtention";
import { IVnode } from "./IVnode";
export interface IComponentClass {
    new (): IComponent;
    new (currentContext: ContextManager): IComponent;
    new (propsData: IDictionary<any>): IComponent;
}
export interface IComponentClassEngine {
    new ({ props, events, parent, context }: {
        props: IDictionary<any>;
        events: IDictionary<Function>;
        parent: any;
        context: ContextManager;
    }): IComponentEngine;
}
export interface IComponentEngine {
    Render(): unknown | undefined;
}
export interface IComponent extends INativeComponent, IFrameNavigation {
    Render(): IDomElement | undefined;
    $on(eventName: string, eventHandler: Function): void;
    $mount(): void;
    onDoryCallbackEnd(): void;
    onDomReady(compInstance: IComponent): void;
    $props: IDictionary<any>;
    $el: IDomElement;
    $options: {
        name: string;
        propsData: Record<string, any>;
    };
    methods: IComponent;
    extention: IExtention;
    $slots: IDictionary<Array<IVnode>>;
    $scopedSlots?: IDictionary<(scopeObject?: IDictionary<any>) => Array<IVnode>>;
    $children: Array<IComponent>;
    $createElement(//https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
    tag: string, options?: {
        class?: IDictionary<any> | string | Array<string>;
        style?: IDictionary<any>;
        attrs?: IDictionary<any>;
        props?: IDictionary<any>;
        domProps?: IDictionary<any>;
        on?: IDictionary<Function>;
        nativeOn?: IDictionary<Function>;
        directives?: Array<IDirectiveElement>;
        scopedSlots?: IDictionary<(scopeObject?: IDictionary<any>) => Array<IVnode>>;
        slot?: string;
        key?: string;
        ref?: string;
        refInFor?: boolean;
        createElement?: IDictionary<any>;
        text?: IDictionary<any> | string | Array<string>;
    }, children?: Array<IVnode | string>): IVnode;
    parentInst: IDictionary<any>;
    $vnode: IVnode;
    id?: string;
    owner: IComponent;
    $destroy: () => void;
    $forceUpdate: () => void;
    hibernate: () => void;
    resurrect: () => void;
    classes: IDictionary<boolean>;
    $attrs: Record<string, any>;
    attrs$?: Record<string, any>;
    value?: any;
    qValue?: any;
    style?: Record<string, string>;
    styledComponent?: string;
    internalValue?: any;
    Go?: () => any;
    customChildAppender: ({ childName, createdComps }: {
        childName: string;
        createdComps: Array<IDomElement>;
    }) => void;
    _vnode?: any;
    emit?: (handlerName: string) => void;
    props?: IDictionary<any>;
}
export interface INativeComponent {
    validate?: (force: Boolean, showError?: Boolean) => Boolean;
    /**
     * Clear only validation errors, as if no validation has been done
     */
    resetValidation?: () => void;
    /**
     * Clear state, validation, etc...
     */
    reset?: () => void;
    validationRefs?: () => Array<IComponent>;
}
export interface IFrameNavigation {
    RenderGo?: Function;
}
//# sourceMappingURL=IComponent.d.ts.map