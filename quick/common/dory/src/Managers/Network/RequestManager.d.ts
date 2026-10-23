import { ContextManager } from "../../../../shrimp/context";
import { IRequest } from "../../../../shrimp/interfaces/NetworkInterfaces/IRequest";
import { INetworkResponse } from "../../../../shrimp/interfaces/quick/INetworkResponse";
import { IQjsonRequestObject } from "../../../../shrimp/interfaces/quick/IShellConfiguration";
export declare class RequestManager {
    context: ContextManager;
    constructor(context: ContextManager);
    /**
     * Handle Async Request
     * @param requestObject Request obejct with paramaters
     * @returns void
     */
    RequestHandler(requestObject: IRequest, eventName?: string): Promise<INetworkResponse<Record<string, any>>>;
    /**
     * Runs the pipeline's onBeforeRequest for a page (qjson) fetch, e.g. RenderGo with triggerBeforeRequest.
     * Response hooks are not triggered for page fetches.
     */
    TriggerBeforeQjsonRequest(requestObject: IQjsonRequestObject): Promise<void>;
    /**
     * Triggers a pipeline lifecycle method after publishing the request-origin page's studio info,
     * so the pipeline qjson's `quick.studio` reflects the calling page (not the pipeline itself).
     * Cleared afterwards so non-pipeline evaluations are unaffected.
     */
    private triggerPipelineWithOrigin;
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