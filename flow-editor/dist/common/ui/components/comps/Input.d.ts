import { ChangeEvent, FC } from "react";
import "../assets/css/components/input.css";
interface IInputProps {
    label?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    isDigit?: boolean;
    value: string;
    onChange?: (e: string) => void;
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: FC<IInputProps>;
export {};
//# sourceMappingURL=Input.d.ts.map