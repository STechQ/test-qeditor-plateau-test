import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    element: HTMLDivElement;
    pos1: number;
    pos2: number;
    pos3: number;
    pos4: number;
    _bottom: number;
    _left: number;
    _right: number;
    _top: number;
    rect: DOMRect;
    resizing: boolean;
    resizeHandle: string;
    initialRect: DOMRect | null;
    coords: string[];
    isFullScreen: Boolean;
    isMinimized: Boolean;
    savedPosition: null;
    currentWidth: string;
    currentHeight: string;
    insetRight: string;
}, {
    closeDragElement(): void;
    elementDrag(mouseEvent: MouseEvent): void;
    elementMobileDrag(mouseEvent: TouchEvent): void;
    dragMouseDown(mouseEvent: MouseEvent): void;
    dragElement(elmnt: HTMLDivElement): void;
    closePopup(): void;
    toggleFullscreen(): void;
    minimizeWindow(): void;
    resizeMouseDown(event: MouseEvent, handle: "top-left" | "top-right" | "bottom-left" | "bottom-right"): void;
    resizeMouseMove(event: any): void;
    resizeMouseUp(): void;
    clickEvent(e: Event): void;
    fixZIndex(): void;
    configureForEditor(): void;
}, {
    classObject: {
        [x: string]: any;
        minimized: any;
    };
}, {
    width: string;
    height: string;
    headerPadding: string;
    right: string;
    left: string;
    top: string;
    bottom: string;
    zIndex: string;
    pinned: boolean;
    backgroundColor: string;
    _renderingProps: any;
    class: string;
    border: boolean;
    closeBtn: boolean;
    fullScreen: boolean;
    resizable: boolean;
    minimizable: boolean;
}>;
export default _default;
//# sourceMappingURL=QLightBox.vue.d.ts.map