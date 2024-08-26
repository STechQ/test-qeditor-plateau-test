export interface ISelection {
    stepsSelected(stepIDs: Array<string>): void;
    stepsUnselected(stepIDs: Array<string>): void;
    getSelecteds(): Array<string>;
}
export declare const ISelection: unique symbol;
//# sourceMappingURL=ISelection.d.ts.map