import { IExpressionData, IPropObject } from "@stechquick/flow-interfaces/runtime";
import { IStoreInParameterMapping, IStoreOutParameterMapping } from "../../../store/runtimemodels/IStoreMapping";
export type ITypescriptExpression = {
    type: "typescript";
    value: string;
};
export type IParallelCase = {
    label?: string;
    condition?: ITypescriptExpression;
};
export type IParallelSplitPropType = IPropObject & {
    blockId: string;
    cases: Array<IParallelCase>;
};
export type IJoinWaitFor = "all" | "any" | {
    count: number;
} | {
    expression: ITypescriptExpression;
};
/** UI-level discriminator for {@link IJoinWaitFor}. */
export type IJoinWaitForMode = "all" | "any" | "count" | "expression";
export type ILoserPolicy = "cancel";
export type IBranchFailurePolicy = "rollback";
export type IParallelJoinPropType = IPropObject & {
    blockId: string;
    waitFor: IJoinWaitFor;
    loserPolicy: ILoserPolicy;
    onBranchFailure: IBranchFailurePolicy;
};
export type ISplitForEachBody = {
    type: "flow" | "workflow";
    id: string;
    mapping: {
        inParamMapping: Array<IStoreInParameterMapping>;
        outParamMapping: Array<IStoreOutParameterMapping>;
    };
};
export type ISplitForEachPropType = IPropObject & {
    collection: IExpressionData;
    mode: "parallel" | "sequential";
    body: ISplitForEachBody;
    waitFor: IJoinWaitFor;
    loserPolicy: ILoserPolicy;
    onBranchFailure: IBranchFailurePolicy;
    /** Upper bound on simultaneously active item threads. Absent => unbounded. Never set in `sequential` mode. */
    maxConcurrency?: number;
};
export type ISpinoffTarget = {
    type: "flow" | "workflow";
    id: string;
    inParamMapping?: Array<IStoreInParameterMapping>;
};
export type ISpinoffPropType = IPropObject & {
    targets: Array<ISpinoffTarget>;
};
export declare const parallelSplitStepName = "parallelSplit";
export declare const parallelJoinStepName = "parallelJoin";
export declare const splitForEachStepName = "splitForEach";
export declare const spinoffStepName = "spinoff";
/** Reads the UI-level mode out of a serialized {@link IJoinWaitFor}. */
export declare function getWaitForMode(waitFor: IJoinWaitFor | undefined): IJoinWaitForMode;
export declare function isLoserPolicyRelevant(waitFor: IJoinWaitFor | undefined): boolean;
//# sourceMappingURL=IParallelPropTypes.d.ts.map