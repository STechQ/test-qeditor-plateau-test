import { IPlatformClientAdaptor } from "./platform/IPlatformClientAdaptor";
import { IPlatformServerAdaptor } from "./platform/IPlatformServerAdaptor";
import { IPlatformWFEAdaptor } from "./platform/IPlatformWFEAdaptor";
import { IPlatformWFFAdaptor } from "./platform/IPlatformWorkflowAdaptor";
export interface IEnvironment {
    server?: IPlatformServerAdaptor;
    client?: IPlatformClientAdaptor;
    workflow?: IPlatformWFFAdaptor;
    wfe?: IPlatformWFEAdaptor;
}
//# sourceMappingURL=IEnvironment.d.ts.map