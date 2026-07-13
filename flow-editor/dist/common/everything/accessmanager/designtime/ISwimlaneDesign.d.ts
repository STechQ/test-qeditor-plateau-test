import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
export type ISwimlaneDesign = IModelBaseFields & {
    type: "swimlane";
    name: string;
    swimlanes: Array<ISwimlaneItem>;
};
export interface ISwimlaneItem {
    id: string;
    roles: Array<string>;
}
export type ISwimlaneItemWithRef = ISwimlaneItem & {
    refId: string;
};
//# sourceMappingURL=ISwimlaneDesign.d.ts.map