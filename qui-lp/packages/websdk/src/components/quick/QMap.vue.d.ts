import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    statusText: string;
    infoWindowPos: null;
    infoWinOpen: boolean;
    currentMidx: null;
    markerIcon: {
        url: string;
    };
    infoOptions: {
        content: string;
        pixelOffset: {
            width: number;
            height: number;
        };
    };
    center: {
        lat: number;
        lng: number;
    };
}, {
    toggleInfoWindow: (marker: any, idx: any) => void;
    mark(event: any): void;
}, {
    google: unknown;
}, {
    center: any;
    markers: unknown[];
    zoom: number;
    width: string;
    height: string;
    mapType: string;
    mapKey: string;
    markerIcon: string;
    markerOnClick: boolean;
}>;
export default _default;
//# sourceMappingURL=QMap.vue.d.ts.map