import { IEnvKeyMap } from "./IEnvKeyMap";
import type { RdbmsType } from "../../../runtime/rdbms/types";
export interface IWMEnvKeyMap extends IEnvKeyMap {
    wfmDBName?: string;
    pmHostUrl: string;
    fmClusterId: string;
    wfEnvironmentName: string;
    maxPgLimit?: string;
    targetTimezone: string;
    maxBatchJobTryCount?: string;
    failedJobRetryDelayMs?: string;
    nodeType?: string;
    reportMode?: string;
    dbType?: RdbmsType;
    dbTechnicalIdKey?: string;
    maxTableNameLen?: string;
    maxConstraintNameLen?: string;
    maxTokenLen?: string;
    dbConnectionString?: string;
    dbUser?: string;
    dbPassword?: string;
    ldapCertificatePath?: string;
    ldapIdentityCertificatePath?: string;
    ldapIdentityCertificateKeyPath?: string;
}
//# sourceMappingURL=IWMEnvKeyMap.d.ts.map