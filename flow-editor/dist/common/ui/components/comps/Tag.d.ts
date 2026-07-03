import { FC } from "react";
import "../assets/css/components/tag.css";
interface ISelectProps {
    id: string | number;
    label?: string;
    remove: (id: string | number) => void;
    tooltip?: string;
}
export declare const Tag: FC<ISelectProps>;
export {};
//# sourceMappingURL=Tag.d.ts.map