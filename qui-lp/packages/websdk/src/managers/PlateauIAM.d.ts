import { IPlateauUIOptions, ISettingsIAM, ISettingsIAMV2 } from '@stechquick/algae/lib/quick/IPlateauUI';
import { IPlateauIAM } from '../../../../common/shrimp/interfaces/quick/IPlateauIAM';
export declare class PlateauIAM implements IPlateauIAM {
    settingsIAM: ISettingsIAM | undefined;
    private refreshTime;
    private updateTime;
    private initOptions;
    private authOptions;
    private provider;
    private keycloakAuth?;
    private oidcClientAuth?;
    private iamPlateau;
    private sessionStorageNamePrefix;
    init(PlateauUIOptions?: IPlateauUIOptions): Promise<void>;
    refreshPromise(): Promise<boolean | undefined>;
    logout(): void;
    private doLogout;
    getToken: () => string | undefined;
    getInfo: () => object | undefined;
    setOptions({ iam, iamV2 }: {
        iam: ISettingsIAM["iam"];
        iamV2?: ISettingsIAMV2;
    }): void;
    isAuthenticated(): boolean;
    private decideProvider;
    private getItemFromCookies;
    private configureNewOAuthSettings;
    private getLocale;
    private replaceSubdomain;
    private getRealm;
    private getSubdomain;
    private computeAuthority;
    private buildLogoutRedirectUrl;
    private getRedirectURL;
    private getLogoutURLParams;
    private setQueryOrFragment;
    private pathJoin;
    login(PlateauUIOptions?: IPlateauUIOptions): Promise<void>;
}
//# sourceMappingURL=PlateauIAM.d.ts.map