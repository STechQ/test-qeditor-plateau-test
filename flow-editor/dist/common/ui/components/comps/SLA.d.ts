import { FC } from "react";
import { ISLA } from "../../../everything/workflow/runtimemodels/ISLA";
interface ISLAProps {
    priority?: number;
    onChangePriority: (priority: number) => void;
    sla?: ISLA;
    readOnly?: boolean;
    onChangeSLA: (sla: ISLA) => void;
}
export declare const Sla: FC<ISLAProps>;
export {};
//# sourceMappingURL=SLA.d.ts.map