import { IPlateauUIOptions, ISettingsIAM, ISettingsIAMV2 } from "@stechquick/algae/lib/quick/IPlateauUI";
import { IPlateauIAM } from "../../../../../common/shrimp/interfaces/quick/IPlateauIAM";
export declare class OidcClientPlateauIAM implements IPlateauIAM {
    settingsIAM: ISettingsIAM | undefined;
    private initOptions;
    private authOptions;
    private sessionStorageNamePrefix;
    private userManager?;
    private user;
    private iamPlateau;
    setOptions({ iam, iamV2 }: {
        iam: ISettingsIAM["iam"];
        iamV2?: ISettingsIAMV2;
    }): void;
    isAuthenticated(): true | undefined;
    private isAuthCallbackUrl;
    private cleanCallbackParams;
    private toAbsoluteUrl;
    init(callback: Function, PlateauUIOptions?: IPlateauUIOptions): Promise<void>;
    login(PlateauUIOptions?: IPlateauUIOptions): Promise<void>;
    getToken: () => string | undefined;
    getInfo: () => object | undefined;
    refreshPromise(): Promise<boolean | undefined>;
    logout(): void;
    private configureLegacySettings;
    private configureNewOAuthSettings;
    private getLocale;
    private getRealm;
    private getSubdomain;
    private replaceSubdomain;
    private deriveAuthority;
    private constructIAMPlateau;
    private maybePersistTokens;
}
//# sourceMappingURL=OidcClientPlateauIAM.d.ts.map