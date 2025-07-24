import { IPlatformClientAdaptor } from "./platform/IPlatformClientAdaptor";
import { IPlatformServerAdaptor } from "./platform/IPlatformServerAdaptor";
import { IPlatformWorkflowAdaptor } from "./platform/IPlatformWorkflowAdaptor";
export interface IEnvironment {
    server?: IPlatformServerAdaptor;
    client?: IPlatformClientAdaptor;
    workflow?: IPlatformWorkflowAdaptor;
}
//# sourceMappingURL=IEnvironment.d.ts.map