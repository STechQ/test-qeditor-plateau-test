import { IPlateauUIOptions } from '@stechquick/algae/lib/quick/IPlateauUI';
import { KeycloakTokenParsed } from 'keycloak-js';
export interface IAmToken {
    idToken: string;
    refreshToken: string;
    token: string;
    info?: KeycloakTokenParsed;
}
export declare type IAmPopupMessage = {
    type: "token";
    tokenInfo: IAmToken;
} | {
    type: "iamReady";
} | {
    type: "iamOptions";
    options?: IPlateauUIOptions;
};
export declare function doPostMessage(targetWindow: Window, data: IAmPopupMessage): void;
//# sourceMappingURL=externalInterfaces.d.ts.map