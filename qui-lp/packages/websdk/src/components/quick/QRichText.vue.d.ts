import Vue from "vue";
import "tiptap-vuetify/dist/main.css";
import "vuetify/dist/vuetify.min.css";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    editorContentStyle: {
        '--height': string;
        '--minHeight': string;
    };
    editor: any;
    extensions: any[];
    htmlContent: string;
    content: string;
}, {
    blurEvent(): void;
    focusEvent(): void;
    inputEvent(): void;
    initEvent({ editor }: {
        editor: any;
    }): void;
    getElementFromString(content: string): HTMLDivElement;
    insertContent(content: string): void;
}, unknown, {
    height: string;
    minHeight: string;
    ToolBarcolor: string;
    disabled: boolean;
    buttonsHide: boolean;
}>;
export default _default;
//# sourceMappingURL=QRichText.vue.d.ts.map