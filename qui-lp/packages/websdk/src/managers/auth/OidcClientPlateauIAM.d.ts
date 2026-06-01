import { IPlateauUIOptions, ISettingsIAM, ISettingsIAMV2 } from "@stechquick/algae/lib/quick/IPlateauUI";
import { IPlateauIAM } from "../../../../../common/shrimp/interfaces/quick/IPlateauIAM";
export declare class OidcClientPlateauIAM implements IPlateauIAM {
    settingsIAM: ISettingsIAM | undefined;
    private initOptions;
    private authOptions;
    private userManager?;
    private user;
    private authority;
    private oidcClientId;
    private iamPlateau;
    private popupSessionStoragePrefix;
    setOptions({ iam, iamV2 }: {
        iam: ISettingsIAM["iam"];
        iamV2?: ISettingsIAMV2;
    }): void;
    private getItemFromCookies;
    private configureNewOAuthSettings;
    private getLocale;
    private getRealm;
    private getSubdomain;
    private replaceSubdomain;
    private normalizeAuthBaseUrl;
    isAuthenticated(): true | undefined;
    private isAuthCallbackUrl;
    private cleanCallbackParams;
    private setQueryOrFragment;
    private pathJoin;
    init(callback: Function, PlateauUIOptions?: IPlateauUIOptions, forceFullLogin?: boolean): Promise<void>;
    private handleIAMPopup;
    private handleInPopup;
    private storePopupTokens;
    private bootstrapUserFromToken;
    private getCurrentTokensForPopup;
    private getStaticPrimitiveAttributes;
    login(PlateauUIOptions?: IPlateauUIOptions): Promise<void>;
    getToken: () => string | undefined;
    getInfo: () => object | undefined;
    refreshPromise(): Promise<boolean | undefined>;
    logout(): void;
    private buildLogoutRedirectUri;
    private deriveAuthority;
    private constructIAMPlateau;
}
//# sourceMappingURL=OidcClientPlateauIAM.d.ts.map