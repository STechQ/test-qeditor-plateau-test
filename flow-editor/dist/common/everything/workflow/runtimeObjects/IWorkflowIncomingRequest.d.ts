export declare const additionalHeadersField = "additionalHeaders";
export interface IWorkflowIncomingRequest {
    headers: Record<string, string | undefined>;
    body: {
        additionalInfo: IAdditionalInfo;
    };
}
export interface IAdditionalInfo {
    activityDescription?: string;
    [key: string]: any;
}
//# sourceMappingURL=IWorkflowIncomingRequest.d.ts.map