import { ISettingsIAM } from '@stechquick/algae/lib/quick/IPlateauUI';
import { IPlateauIAM } from "../../../../common/shrimp/interfaces/quick/IPlateauIAM";
export declare class PlateauIAM implements IPlateauIAM {
    settingsIAM: ISettingsIAM | undefined;
    private refreshTime;
    private updateTime;
    private initOptions;
    keycloak?: Keycloak.KeycloakInstance;
    private iamPlateau;
    setOptions(iam: ISettingsIAM["iam"]): void;
    isAuthenticated(): true | undefined;
    init(callback: Function): Promise<void>;
    private pathJoin;
    private setQueryOrFragment;
    private constructIAMPlateau;
    private getTokens;
    private setTokens;
    refreshPromise(): Promise<boolean | undefined>;
    logout(): void;
    getToken: () => string | undefined;
    getInfo: () => object | undefined;
    login(): Promise<void>;
}
//# sourceMappingURL=PlateauIAM.d.ts.map