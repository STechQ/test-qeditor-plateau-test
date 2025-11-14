import { FC } from "react";
import "../assets/css/components/select.css";
interface ISelectProps {
    label?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    value: string;
    options: Array<IOption>;
    searchable?: boolean;
    unselect?: boolean;
    errorMessage?: string;
    onChange: (value: IOption['value']) => void;
    openModelInNewTab?: (modelID: string) => void;
}
export interface IOption {
    name: string;
    value: string | number;
    tooltip?: string;
}
export declare const Select: FC<ISelectProps>;
export {};
//# sourceMappingURL=Select.d.ts.map