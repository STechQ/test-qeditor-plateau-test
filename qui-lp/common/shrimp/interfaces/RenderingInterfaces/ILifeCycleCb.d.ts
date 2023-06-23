export interface IPageCompletedCb {
    (options: {
        pageId: string;
        additionals?: any;
    }): void;
}
export interface IPageJrCompletedCb {
    (options: {
        pageId: string;
    }): void;
}
export interface IPageRenderStartedCb {
    (options: {
        pageId: string;
    }): void;
}
//# sourceMappingURL=ILifeCycleCb.d.ts.map