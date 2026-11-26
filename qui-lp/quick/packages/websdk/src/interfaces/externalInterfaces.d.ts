import { IPlateauUIOptions } from '@stechquick/algae/lib/quick/IPlateauUI';
import { KeycloakTokenParsed } from 'keycloak-js';
export interface IAmToken {
    idToken: string;
    refreshToken: string;
    token: string;
    info?: KeycloakTokenParsed;
}
export interface IGetIAmToken {
    idToken?: string;
    refreshToken?: string;
    token?: string;
    info?: KeycloakTokenParsed;
}
export type IAmPopupMessage = {
    type: "setTokens";
    tokenInfo: IAmToken;
} | {
    type: "iamReady";
} | {
    type: "iamOptions";
    options?: IPlateauUIOptions;
    tokens?: IGetIAmToken;
    sessionStorageNamePrefix?: string;
    parentWindow?: Object;
};
export declare function doPostMessage(targetWindow: Window, data: IAmPopupMessage): void;
//# sourceMappingURL=externalInterfaces.d.ts.map