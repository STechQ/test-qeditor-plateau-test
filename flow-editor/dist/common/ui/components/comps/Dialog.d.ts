import { FC, ReactNode } from "react";
import "../assets/css/components/dialog.css";
interface DialogProps {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    children?: ReactNode;
    footer?: Array<JSX.Element>;
    type?: "modal" | "dialog";
    position?: {
        top: number;
    };
}
export declare const Dialog: FC<DialogProps>;
export {};
//# sourceMappingURL=Dialog.d.ts.map