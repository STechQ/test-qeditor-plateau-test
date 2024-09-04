import { FC } from "react";
import "../assets/css/components/picker.css";
import { VariableTypes, ObjectID } from "../../../everything/dataType/runtimemodels/types";
import { INestedStore } from "../../../everything/store/designtimemodels/IStoreModel";
interface IVariableTypeForPicker {
    type: VariableTypes;
    list?: boolean;
    objectID?: ObjectID;
}
export interface IPickerProps {
    className?: string;
    items: INestedStore;
    types?: Array<IVariableTypeForPicker>;
    position?: {
        top: number;
    };
    isOpen: boolean;
    selected: string;
    onClose: () => void;
    onSelected: (selected: string) => void;
}
export declare function mountPicker(element: HTMLElement, props: IPickerProps): {
    unmount: () => void;
};
export declare const Picker: FC<IPickerProps>;
export {};
//# sourceMappingURL=Picker.d.ts.map