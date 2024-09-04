import { IPlateauUIOptions, ISettingsIAM, ISettingsIAMV2 } from '@stechquick/algae/lib/quick/IPlateauUI';
import { IPlateauIAM } from "../../../../common/shrimp/interfaces/quick/IPlateauIAM";
export declare class PlateauIAM implements IPlateauIAM {
    settingsIAM: ISettingsIAM | undefined;
    private refreshTime;
    private updateTime;
    private initOptions;
    private authOptions;
    keycloak?: Keycloak.KeycloakInstance;
    private iamPlateau;
    setOptions({ iam, iamV2 }: {
        iam: ISettingsIAM["iam"];
        iamV2?: ISettingsIAMV2;
    }): void;
    private configureNewOAuthSettings;
    private getLocale;
    private replaceSubdomain;
    private getRealm;
    private getSubdomain;
    isAuthenticated(): true | undefined;
    init(callback: Function, PlateauUIOptions?: IPlateauUIOptions): Promise<void>;
    private handleIAMPopup;
    private handleInPopup;
    private pathJoin;
    private setQueryOrFragment;
    private constructIAMPlateau;
    private getTokens;
    private getTokenFromKeycloak;
    private setToOptions;
    private setTokens;
    refreshPromise(): Promise<boolean | undefined>;
    private getKeyCloakOptions;
    private getLoginOptions;
    logout(): void;
    private getRedirectURL;
    private getLogoutURLParams;
    getToken: () => string | undefined;
    getInfo: () => object | undefined;
    login(PlateauUIOptions?: IPlateauUIOptions): Promise<void>;
}
//# sourceMappingURL=PlateauIAM.d.ts.map