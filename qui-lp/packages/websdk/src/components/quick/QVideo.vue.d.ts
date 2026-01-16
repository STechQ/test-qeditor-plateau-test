import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    play(): void;
    pause(): void;
    load(): void;
    currentTime(second?: number | undefined): number | undefined;
    duration(): number;
    currentSrc(): string;
    volume(volume?: number | undefined): number | undefined;
    ended(): void;
    durationChange(): void;
    onPlay(): void;
    onPause(): void;
    onPlaying(): void;
    progress(): void;
    volumeChange(): void;
    rateChange(): void;
    emptied(): void;
    stalled(): void;
    suspend(): void;
    timeUpdate(): void;
    canPlay(): void;
    canPlayThrough(): void;
    waiting(): void;
    error(): void;
}, unknown, {
    src: string;
    controls: boolean;
    width: string;
    height: string;
    autoPlay: boolean;
    muted: boolean;
    loop: boolean;
    controlsList: string;
    poster: string;
    preload: string;
}>;
export default _default;
//# sourceMappingURL=QVideo.vue.d.ts.map