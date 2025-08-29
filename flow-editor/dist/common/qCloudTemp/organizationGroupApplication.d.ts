import { IApplicationExtended } from "../../ui/src/domain/model/models";
export interface IAllOrgGroupApplication {
    appInfo: IApplicationExtended;
    orgInfo: {
        id: string;
        dbName: string;
    };
    jobInfo: {
        runDate: Date;
    };
}
export interface IAllOrgGroupApplicationData extends IAllOrgGroupApplication {
    mainOrgGroupInfo: {
        id: string;
        dbName: string;
    };
}
//# sourceMappingURL=organizationGroupApplication.d.ts.map