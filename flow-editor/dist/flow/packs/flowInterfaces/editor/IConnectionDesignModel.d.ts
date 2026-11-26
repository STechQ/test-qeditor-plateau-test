import { IPoint } from "./shape/IPoint";
export type ConnectionBoundaryPosition = "left" | "right" | "top" | "bottom";
export interface IConnectionPortDesignModel {
    position: ConnectionBoundaryPosition;
    offset: number;
}
export interface IConnectionRoutingDesignModel {
    points: Array<IPoint>;
    sourcePort?: IConnectionPortDesignModel;
    targetPort?: IConnectionPortDesignModel;
}
export interface IConnectionDesignModel {
    ID: string;
    f: string;
    f_o: string;
    t: string;
    t_i: string;
    routing?: IConnectionRoutingDesignModel;
}
//# sourceMappingURL=IConnectionDesignModel.d.ts.map