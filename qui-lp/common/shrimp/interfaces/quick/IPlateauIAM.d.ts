import { IPlateauUIOptions, ISettingsIAM, ISettingsIAMV2 } from "@stechquick/algae/lib/quick/IPlateauUI";
export interface IPlateauIAM {
    refreshPromise(): Promise<boolean | undefined>;
    setOptions({ iam, iamV2 }: {
        iam: ISettingsIAM["iam"];
        iamV2?: ISettingsIAMV2;
    }): void;
    isAuthenticated(): boolean;
    init(PlateauUIOptions?: IPlateauUIOptions): Promise<void>;
    logout(): void;
    getToken: () => string | undefined;
    getInfo: () => object | undefined;
    login(PlateauUIOptions?: IPlateauUIOptions): Promise<void>;
    settingsIAM: ISettingsIAM | undefined;
}
//# sourceMappingURL=IPlateauIAM.d.ts.map