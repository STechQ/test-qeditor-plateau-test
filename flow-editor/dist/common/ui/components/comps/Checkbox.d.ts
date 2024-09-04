import { FC } from "react";
import "../assets/css/components/checkbox.css";
interface ICheckboxProps {
    label?: string;
    className?: string;
    disabled?: boolean;
    checked: boolean;
    onChange: (e: boolean) => void;
}
export declare const Checkbox: FC<ICheckboxProps>;
export {};
//# sourceMappingURL=Checkbox.d.ts.map