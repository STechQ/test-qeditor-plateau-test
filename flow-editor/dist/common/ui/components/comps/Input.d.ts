import { ReactNode } from "react";
import "../assets/css/components/input.css";
interface IInputProps {
    /** Rendered as-is, so a node can be passed when part of the label needs its own styling. */
    label?: ReactNode;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    isDigit?: boolean;
    value: string;
    errorMessage?: string;
    validationControl?: (value: string) => string;
    onChange?: (e: string) => void;
    onBlur?: (e: string) => void;
}
export declare const Input: import("react").ForwardRefExoticComponent<IInputProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Input.d.ts.map