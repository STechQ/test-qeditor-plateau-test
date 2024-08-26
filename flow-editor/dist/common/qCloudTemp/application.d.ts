import { IAppSettings } from "@stechquick/algae/lib/quick/IPlateauUI";
export { IAppSettings };
export type IAzureDatabaseType = "cosmon";
export interface IDatabaseConnectionStrings {
    readWrite?: {
        primary?: string;
        secondary?: string;
    };
    readOnly?: {
        primary?: string;
        secondary?: string;
    };
}
export interface IAppCloud {
    azure?: {
        uiStorageID?: string;
        webEndpoint?: string;
        relativeDnsRecord?: string;
        dnsEndpoint?: string;
        web?: {
            publishDate: Date;
            publishedBy: string;
        };
        mobile?: {
            publishDate: Date;
            publishedBy: string;
            publishId: string;
        };
        backend?: {
            appServicePlan?: string;
            funcionAppName?: string;
            functionAppEndpoint?: string;
            database?: {
                name: string;
                type: IAzureDatabaseType;
                connStrings: IDatabaseConnectionStrings;
            };
        };
        organizationStoragePath?: string;
    };
    plateauGCP?: {
        web?: {
            publishDate: Date;
            publishedBy: string;
        };
        mobile?: {
            publishDate: Date;
            publishedBy: string;
        };
        hosts?: Array<string>;
        isActive: boolean;
    };
}
//# sourceMappingURL=application.d.ts.map