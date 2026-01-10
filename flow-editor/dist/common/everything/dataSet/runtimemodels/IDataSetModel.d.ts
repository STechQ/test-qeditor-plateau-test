import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
export type IDataSetModel = (IModelBaseFields & {
    id: string;
    name: string;
    description?: string;
    type: "set";
    options: Set<string>;
}) | (IModelBaseFields & {
    id: string;
    name: string;
    description?: string;
    type: "dictionary";
    options: {
        [Key in string]: {
            type?: "string" | "number" | "boolean";
            value?: string | number | boolean;
        };
    };
});
export declare const defaultDataSet: IDataSetModel;
//# sourceMappingURL=IDataSetModel.d.ts.map