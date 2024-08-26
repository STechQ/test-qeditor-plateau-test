import { INamedObjectBase } from "./INamedObjectBase";
import { IUnit } from "./IUnit";
export interface IUser extends INamedObjectBase {
    userId: string;
    firstName: string;
    lastName: string;
    fullName: string;
    unit: IUnit;
    roles: Array<string>;
    email?: string;
    swimlanes?: Array<Swimlane>;
}
export type Swimlane = Array<string>;
//# sourceMappingURL=IUser.d.ts.map