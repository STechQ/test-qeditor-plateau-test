import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    messageListener: ((ev: MessageEvent) => any) | undefined;
    iframeSrc: string;
    currentObjectUrl: string | null;
}, {
    Send(message: any): void;
    createBlobUrl(url: string): string | null;
    updateIframeSrc(): void;
    base64ToBlob(base64: any, type?: string): Blob;
    post(url: string, params: any, enctype?: string): void;
    onLoad(): void;
}, {
    style: string;
}, {
    allow: string;
    url: string;
    width: string;
    height: string;
    border: number;
    isLoading: boolean;
    _renderingProps: any;
}>;
export default _default;
//# sourceMappingURL=QFrame.vue.d.ts.map