export interface INavigationOptions {
    newTab?: boolean;
    store?: boolean;
    mobileAnimation?: MobileAnimationType;
}
export declare type MobileAnimationType = MobileAnimation<"slideIn"> | MobileAnimation<"slideOut"> | MobileAnimation<"fade"> | MobileAnimation<"instant">;
export declare type MobileAnimation<T extends keyof MobileAnimationGroupType> = MobileAnimationGroupType[T];
export declare type MobileAnimationGroupType = {
    slideIn: {
        type: "slideIn";
        slideType: "fromRight" | "fromLeft" | "fromTop" | "fromBottom";
    };
    slideOut: {
        type: "slideOut";
        slideType: "toRight" | "toLeft" | "toTop" | "toBottom";
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