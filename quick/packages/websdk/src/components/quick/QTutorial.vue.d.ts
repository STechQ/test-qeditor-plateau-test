import "intro.js/minified/introjs.min.css";
import { ContextManager } from "../../../../../common/shrimp/context";
import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    currentStepValue: undefined;
}, {
    start(): void;
    goToStep(value: any): void;
    exit(): void;
    manupilateDom(): void;
}, unknown, {
    _renderingProps: {
        context: () => ContextManager;
        isEditMode: boolean;
    };
    steps: {
        text: string;
        compID: string;
    }[];
    nextButtonLabel: string;
    skipButtonLabel: string;
    prevButtonLabel: string;
    doneButtonLabel: string;
    hidePrevButton: boolean;
    showStepNumbers: boolean;
    keyboardNavigation: boolean;
}>;
export default _default;
//# sourceMappingURL=QTutorial.vue.d.ts.map