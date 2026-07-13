import { IRuntimeSwimlane } from "./IRuntimeSwimlane";
import { IRuntimeRole } from "./IRuntimeRole";
export interface IRuntimePersona {
    name: string;
    application?: Array<{
        id: string;
        name: string;
    }>;
    dashboard?: Array<{
        id: string;
        name: string;
    }>;
    roles: Array<IRuntimeRole>;
    swimlanes: Array<IRuntimeSwimlane>;
}
//# sourceMappingURL=IRuntimePersona.d.ts.map