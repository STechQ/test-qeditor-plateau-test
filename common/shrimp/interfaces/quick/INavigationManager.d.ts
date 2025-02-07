export interface INavigationOptions {
    newTab?: boolean;
    store?: boolean;
    mobileAnimation?: MobileAnimationType;
}
export declare type MobileAnimationType = MobileAnimation<"slideIn"> | MobileAnimation<"slideOut"> | MobileAnimation<"fade"> | MobileAnimation<"instant">;
export declare type MobileAnimation<T extends keyof MobileAnimationGroupType> = MobileAnimationGroupType[T];
export declare enum SlideInAnimationType {
    FromRight = "FromRight",
    FromLeft = "FromLeft",
    FromTop = "FromTop",
    FromBottom = "FromBottom"
}
export declare enum SlideOutAnimationType {
    ToRight = "ToRight",
    ToLeft = "ToLeft",
    ToTop = "ToTop",
    ToBottom = "ToBottom"
}
export declare type MobileAnimationGroupType = {
    slideIn: {
        type: "slideIn";
        slideInType: SlideInAnimationType;
    };
    slideOut: {
        type: "slideOut";
        slideOutType: SlideOutAnimationType;
    };
    fade: {
        type: "fade";
    };
    instant: {
        type: "instant";
    };
};
export interface INavigationManager {
    go?: ({ url }: {
        url: string;
    } | any) => any;
    triggerPreviousPage?: () => void;
}
//# sourceMappingURL=INavigationManager.d.ts.map