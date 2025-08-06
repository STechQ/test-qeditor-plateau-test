import { FC } from "react";
interface IBoxLabelProps {
    collapsibleLabel?: string;
    label: string;
    disabled?: boolean;
    onChangeLabel: (label: string) => void;
    validationControl?: (value: string) => string;
}
export declare const BoxLabel: FC<IBoxLabelProps>;
export {};
//# sourceMappingURL=BoxLabel.d.ts.map