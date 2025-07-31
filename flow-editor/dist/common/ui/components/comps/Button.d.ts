import { FC, ReactNode } from "react";
import "../assets/css/components/button.css";
interface IButtonProps {
    children: ReactNode;
    className?: string;
    color?: "primary" | "secondary";
    disabled?: boolean;
    onClick: () => void;
}
export declare const Button: FC<IButtonProps>;
export {};
//# sourceMappingURL=Button.d.ts.map