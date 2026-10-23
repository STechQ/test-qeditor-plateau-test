import Vue from "vue";
import { IRenderingProps } from "../../../../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IGlobalsQS } from "../../../../../common/shrimp/interfaces/Scripting/IGlobals";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    visibleComponents: unknown[];
    currentIndex: number;
    observer: IntersectionObserver | null;
    localItems: unknown[];
    evaluatorGlobal: IGlobalsQS;
    historyManager: any;
    lastHistory: any;
}, {
    initObserver(): void;
    updateVisibleComponents(): void;
    emitIntersection(): void;
    setItems(items: any): void;
    loadNextComponents(): void;
    addItems(items: unknown[]): void;
}, unknown, {
    componentCount: number;
    items: unknown[];
    _renderingProps: IRenderingProps;
}>;
export default _default;
//# sourceMappingURL=InfiniteScroll.vue.d.ts.map