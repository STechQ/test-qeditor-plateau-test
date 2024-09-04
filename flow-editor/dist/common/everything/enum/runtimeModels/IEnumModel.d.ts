import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
import { EnumModelType } from "./types";
export type IEnumModel = IModelBaseFields & {
    name: string;
    type: EnumModelType;
    description: string;
    values: Record<string | number, string>;
};
//# sourceMappingURL=IEnumModel.d.ts.map