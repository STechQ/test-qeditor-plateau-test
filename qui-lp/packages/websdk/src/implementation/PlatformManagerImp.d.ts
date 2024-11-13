import { IContainerServicesWrapper } from "../../../../common/shrimp/interfaces/quick/IContainerServices";
import { IPlatformManager } from "../../../../common/qshell";
import { IClientInfo } from "../../../../common/shrimp/interfaces/quick/IPlatform";
export declare class PlatformManagerImp implements IPlatformManager {
    servicesWrapper: IContainerServicesWrapper;
    contextName: string;
    constructor(servicesWrapper: IContainerServicesWrapper);
    getDeviceId(): string | undefined;
    getClientInfo(): IClientInfo;
}
//# sourceMappingURL=PlatformManagerImp.d.ts.map