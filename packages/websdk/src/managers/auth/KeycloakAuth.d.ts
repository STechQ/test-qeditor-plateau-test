import { KeycloakInstance } from 'keycloak-js';
import { IPlateauUIOptions } from '@stechquick/algae/lib/quick/IPlateauUI';
import { Logger } from '../../../../../common/shrimp/helpers/logger';
export declare type KeycloakAuthOptions = {
    url?: string;
    realm?: string | null;
    clientId?: string;
    onLoad?: 'login-required' | 'check-sso' | string;
    responseMode?: 'query' | 'fragment' | string;
    language?: string | null;
    popup?: boolean;
    sessionStorageNamePrefix: string;
    preserveTokens?: boolean;
    redirectUri?: string;
};
export declare class KeycloakAuth {
    private readonly logger;
    keycloak?: KeycloakInstance;
    private sessionStorageNamePrefix;
    private preserveTokens;
    constructor(logger?: typeof Logger);
    initAndLogin(plateauUIOptions: IPlateauUIOptions | undefined, keycloakAuthOptions: KeycloakAuthOptions): Promise<{
        token?: string;
        info?: object;
    } | undefined>;
    refresh(updateTime: number, sessionStorageNamePrefix: string, preserveTokens?: boolean): Promise<boolean>;
    logout(buildRedirectUrl: () => string): Promise<void>;
    isAuthenticated(): boolean;
    getSession(): {
        token?: string;
        info?: object;
    };
    private handleIAMPopup;
    private handleInPopup;
    private getTokenFromKeycloak;
    private setToOptions;
    private setTokens;
    private getTokens;
}
//# sourceMappingURL=KeycloakAuth.d.ts.map