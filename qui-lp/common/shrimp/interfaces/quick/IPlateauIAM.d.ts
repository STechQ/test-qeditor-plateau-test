import { ISettingsIAM } from "@stechquick/algae/lib/quick/IPlateauUI";
export interface IPlateauIAM {
    refreshPromise(): Promise<boolean | undefined>;
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
    logout(): void;
    getToken: () => string | undefined;
    getInfo: () => object | undefined;
    login(): Promise<void>;
    settingsIAM: ISettingsIAM | undefined;
}
//# sourceMappingURL=IPlateauIAM.d.ts.map