import { IRuntimePersona } from "./IRuntimePersona";
import { IUnit } from "./IUnit";
export interface IRuntimeUser {
    userId: string;
    firstName: string;
    lastName: string;
    fullName: string;
    unit: IUnit;
    persona: IRuntimePersona;
    email?: string;
    isSystemUser?: boolean | false;
}
//# sourceMappingURL=IRuntimeUser.d.ts.map