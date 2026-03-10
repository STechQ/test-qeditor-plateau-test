import { IStoreMapping } from "../../store/runtimemodels/IStoreMapping";
import { ITimeSetting } from "./ITimeSetting";
export type ISLA = {
    selectedSlaModelId?: string;
    mapping?: IStoreMapping;
};
export type ILegacySLA = {
    slaGoal?: ITimeSetting;
    slaDeadline?: ITimeSetting;
    slaCritical?: ITimeSetting;
};
//# sourceMappingURL=ISLA.d.ts.map