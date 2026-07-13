import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
export type IPersonaDesign = IModelBaseFields & {
    type: "persona";
    name: string;
    personas: Array<IPersonaItem>;
};
export interface IPersonaItem {
    id: string;
    application?: Array<string>;
    dashboard?: Array<string>;
    roles: Array<string>;
    description?: string;
}
export interface IPersonaWithRef extends IPersonaItem {
    refId: string;
}
//# sourceMappingURL=IPersonaDesign.d.ts.map