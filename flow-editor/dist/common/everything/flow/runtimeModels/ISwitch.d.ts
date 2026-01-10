import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
import { IStoreMapping } from "../../store/runtimemodels/IStoreMapping";
export type SwitchType = "decisionTree" | "decisionTable" | "expression";
export type ISwitchProps = ISwitchExpressionProps | ISwitchTableProps | ISwitchTreeProps;
export type ISwitchBaseProps = {
    label: string;
    name: string;
};
export type ISwitchCase = {
    name: string;
    value: string;
};
export type ISwitchTreeProps = ISwitchBaseProps & {
    switchType: "decisionTree";
    cases: Record<string, ISwitchCaseExp | IDefaultCase>;
};
export type ISwitchTableProps = ISwitchBaseProps & {
    switchType: "decisionTable";
    mapping: IStoreMapping;
    decisionTableId: string;
    cases: Record<string, ISwitchCase>;
};
export type ISwitchExpressionProps = ISwitchBaseProps & {
    switchType: "expression";
    cases: Record<string, ISwitchCase>;
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
export type Operator = "and" | "or" | "eq" | "ne" | "in" | "nin" | "gt" | "gte" | "lt" | "lte" | "ns";
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