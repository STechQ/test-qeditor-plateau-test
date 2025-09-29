import { FC } from "react";
import { ISLA } from "../../../everything/workflow/runtimemodels/ISLA";
interface ISLAProps {
    sla?: ISLA;
    readOnly?: boolean;
    availableSlaModels: {
        name: string;
        value: string;
    }[];
    onChangeSLA: (sla: ISLA) => void;
    openModelInNewTab: (modelID: string) => void;
}
export declare const Sla: FC<ISLAProps>;
export {};
//# sourceMappingURL=SLA.d.ts.map