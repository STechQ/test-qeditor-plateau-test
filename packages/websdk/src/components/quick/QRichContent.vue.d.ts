import Vue from "vue";
import { Editor } from "@tiptap/vue-2";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    editor: Editor | null;
    editorContentStyle: {
        "--height": string;
        "--minHeight": string;
    };
    internalContent: string;
    tableDialog: boolean;
    tableParams: {
        rows: number;
        cols: number;
        withHeader: boolean;
    };
    imageDialog: boolean;
    imageTab: number;
    imageParams: {
        url: string;
        alt: string;
    };
}, {
    initEditor(): void;
    blurEvent(): void;
    focusEvent(): void;
    inputEvent(): void;
    getHTML(): string;
    setContent(htmlContent: string): void;
    insertContent(htmlContent: string): void;
    applyReadOnly(): void;
    addImage(): void;
    confirmAddImageURL(): void;
    triggerFileUpload(): void;
    handleFileSelect(event: any): void;
    handleDrop(event: any): void;
    processFile(file: File): void;
    addTable(): void;
    confirmAddTable(): void;
}, {
    content: string;
}, {
    height: string;
    minHeight: string;
    ToolBarcolor: string;
    disabled: boolean;
    buttonsHide: boolean;
    readonly: boolean;
    value: string;
}>;
export default _default;
//# sourceMappingURL=QRichContent.vue.d.ts.map