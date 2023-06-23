import { IContainerServicesWrapper } from "../../../../common/shrimp/interfaces/quick/IContainerServices";
import { IPlatformManager } from "../../../../common/qshell";
export declare class PlatformManagerImp implements IPlatformManager {
    servicesWrapper: IContainerServicesWrapper;
    contextName: string;
    constructor(servicesWrapper: IContainerServicesWrapper);
    getDeviceId(): string | undefined;
}
//# sourceMappingURL=PlatformManagerImp.d.ts.map