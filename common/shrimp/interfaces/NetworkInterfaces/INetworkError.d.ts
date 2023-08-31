import { IRequest } from "./IRequest";
import { INetworkResponse } from "../quick/INetworkResponse";
export interface INetworkError extends Error {
    response?: INetworkResponse;
    request: IRequest;
}
//# sourceMappingURL=INetworkError.d.ts.map