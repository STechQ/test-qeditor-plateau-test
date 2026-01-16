import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    pageX: number;
    pageY: number;
    bigImgWidth: number;
    bigImgHeight: number;
    bigImgLeft: number;
    bigImgTop: number;
    show: boolean;
    imgWidth: number;
    isClick: boolean;
    rotateDeg: number;
    margin_left: number;
    margin_top: number;
    divHeight: number;
    divWidth: number;
    backSizeX: number;
    backSizeY: number;
    mouseX: number;
    mouseY: number;
}, {
    mouseMove(event: any): void;
    mouseLeave(): void;
    imageClick(): void;
    rotate(angle?: 0 | 90 | 180 | 270 | 360 | -90 | -180 | -270 | -360 | undefined): void;
    zoomTypeOn(x: number, y: number): void;
    zoomTypeNextTo(x: number, y: number): void;
}, {
    imageStyle: any;
    divStyle: any;
}, {
    src: string;
    zoomedAreaHeight: number;
    zoomedAreaWidth: number;
    zoomedAreaOpacity: string;
    zoomedAreaColor: string;
    zoomedImageHeight: number;
    zoomedImageWidth: number;
    marginLeft: number;
    height: number;
    width: number;
    zoomType: string;
    zoomRate: number;
    imageFit: string;
    disableZoom: boolean;
    hideRotation: boolean;
    zoomInUrl: string;
    zoomOutUrl: string;
}>;
export default _default;
//# sourceMappingURL=QImgZoom.vue.d.ts.map