import { IPlateauUIOptions, ISettingsIAM, ISettingsIAMV2 } from "@stechquick/algae/lib/quick/IPlateauUI";
import { IPlateauIAM } from "../../../../common/shrimp/interfaces/quick/IPlateauIAM";
export declare class PlateauIAM implements IPlateauIAM {
    settingsIAM: ISettingsIAM | undefined;
    private authProvider;
    private get activeAuthProvider();
    setOptions({ iam, iamV2 }: {
        iam: ISettingsIAM["iam"];
        iamV2?: ISettingsIAMV2;
    }): void;
    isAuthenticated(): true | undefined;
    init(callback: Function, PlateauUIOptions?: IPlateauUIOptions): Promise<void>;
    login(PlateauUIOptions?: IPlateauUIOptions): Promise<void>;
    getToken: () => string | undefined;
    getInfo: () => object | undefined;
    refreshPromise(): Promise<boolean | undefined>;
    logout(): void;
}
//# sourceMappingURL=PlateauIAM.d.ts.map