import { IContainerServices } from "../../../common/shrimp/interfaces/quick/IContainerServices";
import { IWebSDKSettings } from "../../../common/shrimp/interfaces/quick/IWebSDK";
export declare class Legacy {
    static migrateLegacySettings(settings: any): IWebSDKSettings;
    static fixLegacyPathFormat(url: string): string;
    static containerServicesModifications(self: any, containerServices?: IContainerServices): IContainerServices;
    static fixQueryString(qjsonPath?: string): string | undefined;
}
//# sourceMappingURL=legacy.d.ts.map