import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
export type ISwitchProps = {
    label: IExpressionData;
    type: 'switch';
    name: string;
    description: string;
    cases: Record<string, ISwitchCaseExp | IDefaultCase>;
};
export type ICaseInfo = {
    props?: {
        name: string;
        _name: string;
    };
};
export type ICase = ICaseInfo & {
    left: ISwitchExpression;
    operator: Operator;
    right: ISwitchExpression;
};
export type IDefaultCase = ICaseInfo & {};
export type Operator = "and" | "or" | "eq" | "ne" | "in" | "nin" | "gt" | "gte" | "lt" | "lte";
export type ISwitchExpression = ISwitchVariableExp | ISwitchCaseExp;
export type ISwitchExpressionBase = {
    vType: "variable" | "case";
    negation?: boolean;
};
export type ISwitchVariableExp = ISwitchExpressionBase & {
    vType: 'variable';
    v: IExpressionData;
};
export type ISwitchCaseExp = ISwitchExpressionBase & ICaseInfo & {
    vType: 'case';
    v: ICase;
};
//# sourceMappingURL=ISwitch.d.ts.map