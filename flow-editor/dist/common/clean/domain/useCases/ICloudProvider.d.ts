import { ICrypto } from "../infrastructure/ICrypto";
import { ILogger } from "../infrastructure/ILogger";
import { IMime } from "../infrastructure/IMime";
import { ICloudProviderFileSystem } from "../infrastructure/ICloudProviderFileSystem";
import { IOrganizationCloud } from "../../../qCloudTemp/membership";
import { IAppCloud } from "../../../qCloudTemp/application";
export interface ICloudDiContainer {
    logger: ILogger;
    mime: IMime;
    fileSystem: ICloudProviderFileSystem;
    crypto: ICrypto;
}
export interface IOrganizationOptions {
    organizationId: string;
    organizationName: string;
    cloud?: IOrganizationCloud;
}
export interface UpdateOrganizationOnDBCallbackOptions {
    firstCloudCreation?: boolean;
}
export type UpdateOrganizationOnDBCallback = (organizationId: string, params: {
    cloud: IOrganizationCloud;
}, options?: UpdateOrganizationOnDBCallbackOptions) => Promise<void>;
export type UpdateAppOnDBCallback = (organizationId: string, appID: string, params: {
    cloud: IAppCloud;
}) => Promise<void>;
//# sourceMappingURL=ICloudProvider.d.ts.map