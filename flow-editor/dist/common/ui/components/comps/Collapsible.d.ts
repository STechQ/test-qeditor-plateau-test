import { FC, ReactNode } from "react";
import "../assets/css/components/collapsible.css";
export interface ICollapsibleProps {
    label?: string;
    className?: string;
    children?: ReactNode;
    isKeepOpen?: boolean;
    onAddButton?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    addButtonIconClass?: string;
    listStyle?: React.CSSProperties;
}
export declare const Collapsible: FC<ICollapsibleProps>;
//# sourceMappingURL=Collapsible.d.ts.map