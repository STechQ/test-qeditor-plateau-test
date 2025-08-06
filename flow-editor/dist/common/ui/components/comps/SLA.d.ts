import { FC } from "react";
import { ISLA } from "../../../everything/workflow/runtimemodels/ISLA";
interface ISLAProps {
    sla?: ISLA;
    readOnly?: boolean;
    onChangeSLA: (sla: ISLA) => void;
    availableSlaModels: {
        name: string;
        value: string;
    }[];
}
export declare const Sla: FC<ISLAProps>;
export {};
//# sourceMappingURL=SLA.d.ts.map