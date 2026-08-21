import { ContextManager, IContextItem } from "../../../shrimp/context";
import { HostTriggerClientStaticFuncType } from "@stechquick/algae/lib/quick/HostTrigger";
export declare class HostTriggerMockManager implements IContextItem {
    static readonly ContextName: string;
    readonly contextName: string;
    private context;
    private clientStaticMockDict;
    constructor(context: ContextManager);
    tryGetMock(funcName: string, params: any[]): HostTriggerClientStaticFuncType | undefined;
    setHostTriggerClientStatic(funcName: string, clientStatic: HostTriggerClientStaticFuncType): HostTriggerClientStaticFuncType;
    clearHostTriggerClientMock(funcName: string | undefined): void;
    private cacheHostTriggerClientStatic;
    private buildFunction;
}
//# sourceMappingURL=HostTriggerMockManager.d.ts.map