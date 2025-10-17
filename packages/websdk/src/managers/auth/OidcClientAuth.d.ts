import { ISettingsIAMOptions } from '@stechquick/algae/lib/quick/IPlateauUI';
declare type OidcAuthOptions = {
    url?: string;
    realm?: string | null;
    clientId?: string;
    redirectUri?: string;
    language?: string | null;
    subdomain?: string | null;
    active?: boolean;
};
export declare class OidcClientAuth {
    private userManager;
    private user;
    private authOptions;
    private initOptions;
    constructor();
    configure(authOptions: OidcAuthOptions, initOptions: ISettingsIAMOptions): void;
    isAuthenticated(): boolean;
    init(): Promise<void>;
    login(): Promise<void>;
    getSession(): {
        token?: string;
        info?: object;
    };
    private getTokens;
    private setTokens;
    logout(): Promise<void>;
    private getRedirectURL;
    private getLogoutURLParams;
    private joinAuthority;
}
export {};
//# sourceMappingURL=OidcClientAuth.d.ts.map