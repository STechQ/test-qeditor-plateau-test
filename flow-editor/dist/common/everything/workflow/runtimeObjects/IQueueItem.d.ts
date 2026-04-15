export type QueueItemType = "report";
export interface IQueueItem {
    type: QueueItemType;
    businessKey: string;
    processId: string;
    processInstanceId: string;
    dateTime: number;
    processed: boolean;
}
//# sourceMappingURL=IQueueItem.d.ts.map