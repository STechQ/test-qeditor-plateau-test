import Vue from "vue";
interface ITrackedPost {
    url: string;
    documentBeforePost?: Document | null;
    resend?: () => void;
}
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    messageListener: ((ev: MessageEvent) => any) | undefined;
    iframeSrc: string;
    currentObjectUrl: string | null;
    hasLoaded: boolean;
    isDestroyed: boolean;
    postQueue: Promise<void>;
    pendingPosts: ((submitForm: boolean) => void)[];
    postTimeoutHandle: number | undefined;
    lastPostTimeoutAt: number;
}, {
    Send(message: any): void;
    createBlobUrl(url: string): string | null;
    updateIframeSrc(): void;
    base64ToBlob(base64: any, type?: string): Blob;
    post(url: string, params: any, enctype?: string): Promise<void>;
    waitUntilReady(): Promise<void>;
    waitUntil(check: () => boolean, deadline: number): Promise<boolean>;
    startPostTimeout(post: ITrackedPost, attempts?: number): void;
    getPostRetryLimit(): number;
    isPostUnanswered(documentBeforePost?: Document | null): boolean;
    clearPostTimeout(): void;
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
    postTimeout: number;
    postRetryCount: number;
    _renderingProps: any;
}>;
export default _default;
//# sourceMappingURL=QFrame.vue.d.ts.map