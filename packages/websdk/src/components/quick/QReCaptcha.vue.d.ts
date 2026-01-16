import Vue from "vue";
export declare type Size = "normal" | "compact" | "invisible";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    captchaKeys: String;
    language: string;
    opt_widget_id: number;
}, {
    onLoadCallBack(): void;
    successCallBack(token: string): void;
    expiredCallback(): void;
    errorCallback(): void;
    reset(): void;
}, unknown, {
    _renderingProps: any;
    siteKey: string;
    size: string;
    tabindex: number;
}>;
export default _default;
//# sourceMappingURL=QReCaptcha.vue.d.ts.map