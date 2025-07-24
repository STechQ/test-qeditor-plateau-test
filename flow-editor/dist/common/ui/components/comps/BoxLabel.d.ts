import { FC } from "react";
import { IExpressionData } from "../../../everything/dataType/runtimemodels/IExpression";
interface IBoxLabelProps {
    collapsibleLabel?: string;
    label: IExpressionData;
    description: string;
    disabled?: boolean;
    onChangeLabel: (label: IExpressionData) => void;
    onChangeDescription: (description: string) => void;
}
export declare const BoxLabel: FC<IBoxLabelProps>;
export {};
//# sourceMappingURL=BoxLabel.d.ts.map