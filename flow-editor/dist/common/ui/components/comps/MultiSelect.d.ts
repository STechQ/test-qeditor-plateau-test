import { FC } from "react";
import "../assets/css/components/multiselect.css";
interface IMultiSelectProps {
    label?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    values: Array<IOption['value']>;
    onChange: (value: Array<IOption['value']>) => void;
    options: Array<IOption>;
    searchable?: boolean;
    selectAll?: boolean;
}
export interface IOption {
    name: string;
    value: string | number;
    tooltip?: string;
}
export declare const MultiSelect: FC<IMultiSelectProps>;
export {};
//# sourceMappingURL=MultiSelect.d.ts.map