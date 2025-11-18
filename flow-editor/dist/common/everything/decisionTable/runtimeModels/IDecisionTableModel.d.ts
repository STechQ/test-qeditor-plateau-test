export type decisionTableOperator = "==" | "<" | ">" | "<=" | ">=" | "any";
export type decisionTableFieldType = "number" | "string" | "boolean";
export type IDecisionTableComparision = {
    operator?: decisionTableOperator;
    not?: boolean;
    value?: any;
};
export type IDecisionTableRule = {
    condition: Record<string, IDecisionTableComparision>;
    output: IDecisionTableOutput;
};
export interface IDecisionTableField {
    type: decisionTableFieldType;
}
export interface IDecisionTableFieldInput {
    type: decisionTableFieldType;
    operator: decisionTableOperator;
}
export interface IDecisionTableModel {
    type: "decisionTable";
    inputs: Record<string, IDecisionTableFieldInput>;
    outputs: Record<string, IDecisionTableField>;
    hitPolicy: "firstMatch" | "collect" | "unique";
    rules: Array<IDecisionTableRule>;
    else: {
        output: IDecisionTableOutput;
    };
}
export type IDecisionTableOutputValue = string | number | boolean | null;
export type IDecisionTableOutput = Record<string, IDecisionTableOutputValue>;
//# sourceMappingURL=IDecisionTableModel.d.ts.map