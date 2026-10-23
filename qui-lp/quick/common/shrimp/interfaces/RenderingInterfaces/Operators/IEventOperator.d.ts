export interface IEventOperator {
    eventCompleteCb: (options: {
        compUID: string;
        eventName: string;
        isPageComplete: boolean;
        pageId: string;
    }) => void;
}
//# sourceMappingURL=IEventOperator.d.ts.map