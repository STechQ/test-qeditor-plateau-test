export type ValidationSeverity = "error" | "warning";
export interface IValidationIssue {
    rule: string;
    severity: ValidationSeverity;
    stepID?: string;
    message: string;
}
export interface IValidation {
    validate(): Array<IValidationIssue>;
}
export declare const IValidation: unique symbol;
//# sourceMappingURL=IValidation.d.ts.map