export type LockObjectType = "task" | "wfInst" | "batchJobs";
export interface ILock {
    lockId: string;
    lockStartTime: number;
    lockExpireTime: number;
    lockExpireTimeForTTL: Date;
    userId: string;
    userName: string;
    objectId: string;
    objectType: LockObjectType;
    objectName: string;
    businessKey: string;
    processInstanceId: string;
}
export interface ILockParam {
    objectId: string;
    objectType: LockObjectType;
    objectName: string;
    processInstanceId: string;
    businessKey: string;
    userId: string;
    userName: string;
    autoRelease?: boolean;
}
//# sourceMappingURL=ILock.d.ts.map