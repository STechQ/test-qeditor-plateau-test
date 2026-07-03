import { IContainerServicesWrapper } from "../../../../common/shrimp/interfaces/quick/IContainerServices";
import { IHostTriggerer } from "../../../../common/qshell";
export declare class HostTriggererImp implements IHostTriggerer {
    servicesWrapper: IContainerServicesWrapper;
    contextName: string;
    constructor(servicesWrapper: IContainerServicesWrapper);
    hostTrigger(functionName: string, params: Record<string, any>, pageNameArray: Array<string>): any;
    containerTrigger(functionName: string, params: Record<string, any>, pageNameArray: Array<string>): any;
}
//# sourceMappingURL=HostTriggerer.d.ts.map