import { FC } from "react";
import { INestedStore } from "../../../everything/store/designtimemodels/IStoreModel";
import { ISLA } from "../../../everything/workflow/runtimemodels/ISLA";
interface ISLAProps {
    sla?: ISLA;
    readOnly?: boolean;
    availableSlaModels: {
        name: string;
        value: string;
    }[];
    constants: {
        name: string;
        value: string;
        tooltip?: string;
    }[];
    outerStore: INestedStore;
    onChangeSLA: (sla: ISLA) => void;
    openModelInNewTab: (modelID: string) => void;
}
export declare const Sla: FC<ISLAProps>;
export {};
//# sourceMappingURL=SLA.d.ts.map