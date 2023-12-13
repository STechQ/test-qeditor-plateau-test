import { ISettingsIAM, ISettingsIAMV2 } from "@stechquick/algae/lib/quick/IPlateauUI";
export interface IPlateauIAM {
    refreshPromise(): Promise<boolean | undefined>;
    setOptions({ iam, iamV2 }: {
        iam: ISettingsIAM["iam"];
        iamV2?: ISettingsIAMV2;
    }): void;
    isAuthenticated(): true | undefined;
    init(callback: Function): Promise<void>;
    logout(): void;
    getToken: () => string | undefined;
    getInfo: () => object | undefined;
    login(): Promise<void>;
    settingsIAM: ISettingsIAM | undefined;
    keycloak?: Keycloak.KeycloakInstance | undefined;
}
//# sourceMappingURL=IPlateauIAM.d.ts.map