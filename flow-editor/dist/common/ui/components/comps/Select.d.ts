import { FC } from "react";
import "../assets/css/components/select.css";
interface ISelectProps {
    label?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    value: string;
    onChange: (value: IOption['value']) => void;
    options: Array<IOption>;
    searchable?: boolean;
}
export interface IOption {
    name: string;
    value: string | number;
    tooltip?: string;
}
export declare const Select: FC<ISelectProps>;
export {};
//# sourceMappingURL=Select.d.ts.map