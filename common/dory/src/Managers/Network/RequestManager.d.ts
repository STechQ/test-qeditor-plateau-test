import { ContextManager } from "../../../../shrimp/context";
import { IRequest } from "../../../../shrimp/interfaces/NetworkInterfaces/IRequest";
import { INetworkResponse } from "../../../../shrimp/interfaces/quick/INetworkResponse";
export declare class RequestManager {
    context: ContextManager;
    constructor(context: ContextManager);
    /**
     * Handle Async Request
     * @param requestObject Request obejct with paramaters
     * @returns void
     */
    RequestHandler(requestObject: IRequest): Promise<INetworkResponse<Record<string, any>>>;
    /**
     * Merge response to the main response object with returned response
     * @param responseKey Key that will be attached to the response on last history item
     * @param returnedResponse Response value that has been returned from the request
     * @returns void
     */
    MergeResponseToMainResponse(responseKey: string | null, returnedResponse: INetworkResponse): void;
    private requestMethod;
}
//# sourceMappingURL=RequestManager.d.ts.map