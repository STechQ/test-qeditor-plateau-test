import { IEndpointHandler, IEndpointModel } from "../runtimeModels/IEndpointModel";
export interface IEndpointDesign extends IEndpointModel {
}
export interface IEndpointState {
    selectedHandlerIndex?: number;
    handlerData?: IEndpointHandler;
    selectedHandlerTab?: "Request" | "Response";
}
//# sourceMappingURL=IEndpoint.d.ts.map