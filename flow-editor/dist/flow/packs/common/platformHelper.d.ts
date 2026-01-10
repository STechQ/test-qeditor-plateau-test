import { IPropObject, StateValues } from "@stechquick/flow-interfaces/runtime";
import { IPlatformServerAdaptor } from "@stechquick/flow-interfaces/runtime/platform/IPlatformServerAdaptor";
import { IPlatformWFFAdaptor } from "@stechquick/flow-interfaces/runtime/platform/IPlatformWorkflowAdaptor";
import { IRuntimeParam } from "@stechquick/flow-interfaces/runtime/StepRuntime";
import { IStoreMapping } from "../../../common/everything/store/runtimemodels/IStoreMapping";
export type RuntimePlatform = {
    platformName: "workflow";
    platformInstance: IPlatformWFFAdaptor;
} | {
    platformName: "server";
    platformInstance: IPlatformServerAdaptor;
};
export type IDBEntityPropType = IPropObject & {
    id: string;
    queryId: string;
    mapping: IStoreMapping;
};
interface IEnvironment {
    workflow?: IPlatformWFFAdaptor;
    server?: IPlatformServerAdaptor;
}
export declare class PlatformHelper {
    constructor();
    private decideRuntimePlatform;
    resolveRuntime<PropType = IPropObject>(param: IRuntimeParam<PropType, string, StateValues>): {
        platformName: "workflow" | "server";
        platformInstance: IPlatformWFFAdaptor | IPlatformServerAdaptor;
        environment: IEnvironment;
        targetRuntimePlatfrom: IPlatformWFFAdaptor | IPlatformServerAdaptor;
    };
}
export {};
//# sourceMappingURL=platformHelper.d.ts.map