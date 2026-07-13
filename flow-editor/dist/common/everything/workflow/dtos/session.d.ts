import { IContext } from "../runtimeObjects/IContext";
import { IFormContextWFE } from "../runtimeObjects/IFormContext";
export interface ISessionResponseWFE {
    context: IContext;
    formContext: IFormContextWFE | undefined;
}
export declare function isISessionResponseWFE(value: unknown): value is ISessionResponseWFE;
//# sourceMappingURL=session.d.ts.map