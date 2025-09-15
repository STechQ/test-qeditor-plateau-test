import { IPropObject } from "@stechquick/flow-interfaces/runtime";
import { StepRuntime } from "@stechquick/flow-interfaces/runtime/StepRuntime";
export interface ICodePropType extends IPropObject {
    code: string;
    waitTillNext?: boolean;
    errors?: Array<string>;
}
declare const code: StepRuntime<ICodePropType>;
export default code;
//# sourceMappingURL=code.d.ts.map