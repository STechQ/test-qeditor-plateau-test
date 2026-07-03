import { IContextItem } from "../../../../shrimp/context";
import { IContainerServicesResponseReal, IHostResponseData } from "../../../../shrimp/interfaces/IHostResponseData";
export declare const HostTriggererContextName: string;
export interface IHostTriggerer extends IContextItem {
    hostTrigger: (functionName: string, params: Record<string, any>, pageNameArray: Array<string>) => Promise<IHostResponseData> | undefined;
    containerTrigger(functionName: string, params: Record<string, any>, pageNameArray: Array<string>): Promise<IContainerServicesResponseReal>;
}
//# sourceMappingURL=IHostTriggerer.d.ts.map