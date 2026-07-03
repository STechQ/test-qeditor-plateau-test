import { IModelBaseFields } from "../workflow/runtimemodels/IModel";
import { IStoreMapping } from "../store/runtimemodels/IStoreMapping";
export type IActionDesign = IModelBaseFields & {
    type: "action";
    name: string;
    actions: Array<IActionItem>;
};
export interface IActionFunction {
    id: string;
    mapping: IStoreMapping;
}
export interface IActionItem {
    /** Unique action identifier (e.g., "approve", "review"). Displayed as "Name" in UI. */
    id: string;
    privileges: Array<string>;
    description?: string;
    /** QJSON design reference, format: `<<qjson:{modelId}>>` */
    designId?: string;
    function: IActionFunction;
}
//# sourceMappingURL=IActionDesign.d.ts.map