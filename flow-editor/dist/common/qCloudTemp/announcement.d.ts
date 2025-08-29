interface IAnnouncementBaseObj {
    id: string;
    text: string;
    createDate: Date | string;
    createdBy: string;
    displayType: "headerBar" | "dialog";
    updateDate?: Date | string;
    updatedBy?: string;
    startDate?: Date | string;
    endDate?: Date | string;
    isActive: boolean;
    isAppAnnouncement?: boolean;
}
export interface IAnnouncementDataObj extends IAnnouncementBaseObj {
    createDate: Date;
    updateDate?: Date;
    startDate?: Date;
    endDate?: Date;
}
export interface IAnnouncementServiceObj extends IAnnouncementBaseObj {
    createDate: string;
    updateDate?: string;
    startDate?: string;
    endDate?: string;
}
export {};
//# sourceMappingURL=announcement.d.ts.map