import Vue from "vue";
import { AnimationItem } from "lottie-web";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    lottieInstance: import("lottie-web").LottiePlayer;
    lottieComp: AnimationItem;
}, {
    loadAnimation(src: string | object): void;
    play(): void;
    stop(): void;
    pause(): void;
    setSpeedMethod(setSpeedData: number): void;
    setDirectionMethod(direction: "left" | "right"): void;
    setloopMethod(loopData: boolean): void;
    hibernate(): void;
    resurrect(): void;
}, {
    showTemplate: boolean;
    lottieStyle: {
        position: "static" | "absolute" | "relative" | "fixed";
        top: string;
        bottom: string;
        left: string;
        right: string;
        zIndex: string;
    };
}, {
    _renderingProps: any;
    src: any;
    loop: boolean;
    autoplay: boolean;
    speed: number;
    direction: string;
    position: string;
    zIndex: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
}>;
export default _default;
//# sourceMappingURL=QAnimation.vue.d.ts.map