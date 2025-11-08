import { FC } from "react";
import "../assets/css/components/input.css";
interface IInputProps {
    label?: string;
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
export declare const Input: FC<IInputProps>;
export {};
//# sourceMappingURL=Input.d.ts.map