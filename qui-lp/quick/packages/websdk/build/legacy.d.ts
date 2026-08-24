import { IContainerServices } from "../../../common/shrimp/interfaces/quick/IContainerServices";
import { IPlateauIAM } from "../../../common/shrimp/interfaces/quick/IPlateauIAM";
import { IWebSDKSettings } from "../../../common/shrimp/interfaces/quick/IWebSDK";
export declare class Legacy {
    static migrateLegacySettings(settings: any): IWebSDKSettings;
    static fixLegacyPathFormat(url: string): string;
    static containerServicesModifications(containerServices: IContainerServices | undefined, plateauIAM: IPlateauIAM | undefined): IContainerServices;
    /**
     * SECURITY: the `q` query parameter is fully attacker-controllable (it is read straight
     * from window.location.search) and is used as the page-definition path. A page definition
     * legitimately carries executable JS handlers, which the engine evaluates in this origin.
     * If `q` is allowed to point at another origin (absolute URL, protocol-relative `//host`,
     * `data:`/`javascript:` scheme, or any encoded variant that decodes into one of those),
     * an attacker can host a .qjson whose handlers run in our origin — zero-click XSS.
     *
     * A `q` selector must therefore only ever address a definition WITHIN this origin.
     * Legitimate cross-domain definition loading is configured server-side (qjsonURLPrefix /
     * getURL) and never flows through the query string, so this check has no effect on it.
     *
     * Returns true when `value` is NOT a safe same-origin selector and must be rejected.
     */
    static isCrossOriginSelector(value: string | undefined | null): boolean;
    static fixQueryString(qjsonPath?: string): string | undefined;
}
//# sourceMappingURL=legacy.d.ts.map