import { IActionDesign, IActionItem } from "../../everything/action/IActionDesign";
import { ModelValidationOptions, ModelValidationResult } from "./modelValidator";
export declare function validateAction(action: Partial<IActionItem> | null | undefined): Record<string, string>;
export declare function validateActionModel(model: Partial<IActionDesign>, options?: ModelValidationOptions): ModelValidationResult;
//# sourceMappingURL=actionValidator.d.ts.map