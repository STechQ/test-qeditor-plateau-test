import { IUnit } from "./IUnit";
export interface IUser {
    userId: string;
    firstName: string;
    lastName: string;
    fullName: string;
    unit: IUnit;
    roles: Array<string>;
    email?: string;
    swimlanes?: Swimlane;
    isSystemUser?: boolean | false;
}
export type Swimlane = Array<string>;
//# sourceMappingURL=IUser.d.ts.map