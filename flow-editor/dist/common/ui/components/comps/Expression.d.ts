import { FC } from "react";
import "../assets/css/components/expression.css";
import { IOption } from "./Select";
import { IExpressionData } from "../../../everything/dataType/runtimemodels/IExpression";
import { INestedStore } from "../../../everything/store/designtimemodels/IStoreModel";
interface IExpressionProps {
    label?: string;
    className?: string;
    disabled?: boolean;
    types: Array<IExpressionData["type"]>;
    expression: IExpressionData;
    constantsOptions?: Array<IOption>;
    onChange?: (value: IExpressionData) => void;
    onBlur?: (value: IExpressionData) => void;
    store: INestedStore;
}
export declare const Expression: FC<IExpressionProps>;
export {};
//# sourceMappingURL=Expression.d.ts.map