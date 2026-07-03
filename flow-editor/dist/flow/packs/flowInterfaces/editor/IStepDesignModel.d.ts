import { IStepModel } from "../runtime/IStepModel";
import { IPoint } from "./shape/IPoint";
export interface IStepDesignModel {
    ID: string;
    name: string;
    version: string;
    sp: IPoint;
    props: IStepModel["P"];
    swimlaneId?: string;
    compiledCode?: string;
}
//# sourceMappingURL=IStepDesignModel.d.ts.map