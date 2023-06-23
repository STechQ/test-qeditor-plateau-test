import { ISettingsIAM } from '@stechquick/algae/lib/quick/IPlateauUI';
import { IPlateauIAM } from "../../../../common/shrimp/interfaces/quick/IPlateauIAM";
export declare class PlateauIAM implements IPlateauIAM {
    settingsIAM: ISettingsIAM | undefined;
    private refreshTime;
    private updateTime;
    private initOptions;
    private keycloak?;
    private iamPlateau;
    setOptions(initOptions: {
        url: string;
        realm: string;
        clientId: string;
        onLoad: string;
        pkceMethod: string;
        identityProvider: string;
    }): void;
    isAuthenticated(): true | undefined;
    init(callback: Function): Promise<void>;
    private constructIAMPlateau;
    refreshPromise(): Promise<boolean | undefined>;
    logout(): void;
    getToken: () => string | undefined;
    getInfo: () => object | undefined;
    login(): Promise<void>;
}
//# sourceMappingURL=PlateauIAM.d.ts.map