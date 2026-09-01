import { IContainerServices } from "../../../common/shrimp/interfaces/quick/IContainerServices";
import { IPlateauIAM } from "../../../common/shrimp/interfaces/quick/IPlateauIAM";
import { IWebSDKSettings } from "../../../common/shrimp/interfaces/quick/IWebSDK";
export declare class Legacy {
    static migrateLegacySettings(settings: any): IWebSDKSettings;
    static fixLegacyPathFormat(url: string): string;
    static containerServicesModifications(containerServices: IContainerServices | undefined, plateauIAM: IPlateauIAM | undefined): IContainerServices;
    static fixQueryString(qjsonPath?: string): string | undefined;
}
//# sourceMappingURL=legacy.d.ts.map