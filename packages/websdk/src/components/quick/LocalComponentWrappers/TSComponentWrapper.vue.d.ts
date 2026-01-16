import { ContextManager } from "../../../../../../common/shrimp/context";
import { IExternalEvents } from "../../../../../../common/shrimp/interfaces/ComponentInterfaces/IExternalEvents";
import { IExternalProp } from "../../../../../../common/shrimp/interfaces/ComponentInterfaces/IExternalProp";
import { IDictionary } from "../../../../../../common/shrimp/interfaces/IDictionary";
import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    GetProps(propsCB: (props?: IExternalProp[] | undefined) => void): any;
    GetEvents(eventsCB: (events?: IExternalEvents[] | undefined) => void): any;
    GetQJson(): any;
    OutBoundProps(props: IDictionary<any | Object>): void;
    OutBoundEvents(events: any): void;
}, unknown, {
    _renderingProps: {
        context: () => ContextManager;
        events: () => IDictionary<Function>;
        props: () => IDictionary<Object>;
        targetLocalComponent: () => any;
    };
}>;
export default _default;
//# sourceMappingURL=TSComponentWrapper.vue.d.ts.map