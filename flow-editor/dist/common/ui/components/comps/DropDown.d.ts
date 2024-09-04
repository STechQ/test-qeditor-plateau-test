import { FC } from "react";
import "../assets/css/components/dropdown.css";
interface IDropDownProps {
    iconClass?: string;
    label?: string;
    options: Array<IOption>;
}
interface IOption {
    name: string;
    onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
export declare const DropDown: FC<IDropDownProps>;
export {};
//# sourceMappingURL=DropDown.d.ts.map