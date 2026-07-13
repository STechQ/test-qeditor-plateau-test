import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
export type IPrivilegeDesign = IModelBaseFields & {
    type: "privilege";
    name: string;
    privileges: Array<IPrivilegeItem>;
};
export interface IPrivilegeItem {
    id: string;
    description: string;
}
//# sourceMappingURL=IPrivilegeDesign.d.ts.map