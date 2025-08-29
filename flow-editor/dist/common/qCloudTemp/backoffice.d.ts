import { IOrganization } from "./membership";
export interface IMainStatisticInfo {
    organizations: Array<IOrganization>;
    userCount: number;
    licensedUserCount?: number;
    organizationCount?: number;
    licensedOrgCount?: number;
    applicationCount?: number;
    licensedAppCount?: number;
    tagCount: number;
    userRequestCount: number;
    orgGroupCount: number;
    sdUserCount?: number;
    announcement: {
        count: number;
        activeCount: number;
    };
}
export type DBConfigKeyTypes = {
    legacyDeletableVersions: Array<string>;
    abc: number;
};
export type DBConfigKeysType = keyof DBConfigKeyTypes;
export interface IDBConfig<T extends keyof DBConfigKeyTypes> {
    key: T;
    value?: DBConfigKeyTypes[T];
}
//# sourceMappingURL=backoffice.d.ts.map