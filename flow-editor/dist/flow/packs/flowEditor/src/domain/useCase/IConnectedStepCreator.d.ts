import { IShowConnectedStepMenuRequest } from "../../../../drawArea/types";
import { IStepOptions } from "../../../../flowInterfaces/editor/IStepOptions";
export interface IConnectedStepCreator {
    create(step: IStepOptions, request: IShowConnectedStepMenuRequest): void;
}
export declare const IConnectedStepCreator: unique symbol;
//# sourceMappingURL=IConnectedStepCreator.d.ts.map