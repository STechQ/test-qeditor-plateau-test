import { ContextManager } from "../../../shrimp/context";
import { IComponentCollection } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IRequest } from "../../../shrimp/interfaces/NetworkInterfaces/IRequest";
import { INetworkResponse } from "../../../shrimp/interfaces/quick/INetworkResponse";
import { IShellGlobalMethods } from "../../../shrimp/interfaces/quick/IShellGlobalMethods";
import { IGlobals_Quick } from "../../../shrimp/interfaces/Scripting/IGlobals";
import { Dory } from "../Dory";
import { HistoryManager } from "../Managers/HistoryManager";
interface IFlowClient {
    getFormData(dory: Dory, componentID?: string): {};
    requestAsync(dory: Dory, context: ContextManager, requestObject: IRequest): Promise<INetworkResponse<Record<string, any>>> | undefined;
    go: (context: ContextManager, dory: Dory, qjsonPath: string) => void;
    alert(shellGlobalMethods: IShellGlobalMethods, ownerComponent: IComponentCollection | undefined, historyManager: HistoryManager, options: Parameters<NonNullable<IGlobals_Quick["alert"]>>[0]): void;
}
export declare function triggerFlow(context: ContextManager, script: object, dataSource: object | null | undefined, client: IFlowClient): Promise<void>;
export {};
//# sourceMappingURL=flowRuntimeHelper.d.ts.map