export interface INavigationOptions {
    newTab?: boolean;
    store?: boolean;
    mobileAnimation?: MobileAnimation;
}
export declare enum MobileAnimation {
    push = "push",
    presentFullScreen = "presentFullScreen",
    fade = "fade",
    present = "present"
}
export interface INavigationManager {
    go?: ({ url }: {
        url: string;
    } | any) => any;
    triggerPreviousPage?: () => void;
}
//# sourceMappingURL=INavigationManager.d.ts.map