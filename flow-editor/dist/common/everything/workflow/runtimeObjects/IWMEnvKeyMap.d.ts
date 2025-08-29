import { IEnvKeyMap } from "./IEnvKeyMap";
export interface IWMEnvKeyMap extends IEnvKeyMap {
    wfmDBName?: string;
    pmHostUrl: string;
    fmClusterId: string;
    wfEnvironmentName: string;
    maxPgLimit?: string;
    targetTimezone: string;
    maxBatchJobTryCount?: string;
}
//# sourceMappingURL=IWMEnvKeyMap.d.ts.map