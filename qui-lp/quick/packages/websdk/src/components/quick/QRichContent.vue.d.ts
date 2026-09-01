import Vue from "vue";
import { Editor } from "@tiptap/vue-2";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    editor: Editor | null;
    editorContentStyle: {
        "--height": string;
        "--minHeight": string;
    };
    contentOnFocus: string;
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
    toggleTextAlign(alignment: string): void;
    initEditor(): void;
    getHTML(): string;
    setContent(htmlContent: string, emitUpdate?: boolean): void;
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
}, unknown, {
    height: string;
    width: string;
    minHeight: string;
    ToolbarColor: string;
    disabled: boolean;
    buttonsHide: boolean;
    readonly: boolean;
    content: string;
}>;
export default _default;
//# sourceMappingURL=QRichContent.vue.d.ts.map