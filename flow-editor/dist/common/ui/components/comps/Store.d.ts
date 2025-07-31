import { FC } from "react";
import { Store as StoreModel } from "../../../everything/store/designtimemodels/IStoreModel";
import { IOption } from "./Select";
export interface IStoreProps {
    className?: string;
    store: StoreModel;
    schema: StoreModel;
    dataTypes: Array<{
        ID: string;
        name: string;
    }>;
    typeSelectOptions?: IOption[];
    workflowDataInstances?: Array<{
        ID: string;
        name: string;
    }>;
    readOnly?: boolean;
    onChange: (store: StoreModel) => void;
}
export declare function mountStore(element: HTMLElement, props: IStoreProps): {
    unmount: () => void;
};
export declare const Store: FC<IStoreProps>;
//# sourceMappingURL=Store.d.ts.map