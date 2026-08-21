import { IQErrorOwnerInfo } from "./IQErrorOwnerInfo";
export interface IQError {
    errorDetail: string | {
        message: string;
        errorProm?: Promise<unknown>;
    } | Array<string>;
    errorOwnerInfo: IQErrorOwnerInfo | null;
}
//# sourceMappingURL=IQError.d.ts.map