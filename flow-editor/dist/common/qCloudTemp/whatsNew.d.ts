interface IWhatsNewBaseObj {
    id: string;
    imageUrl?: string;
    title: string;
    description: string;
    createDate: Date | string;
    createdBy: string;
    updateDate?: Date | string;
    updatedBy?: string;
}
export interface IWhatsNewDataObj extends IWhatsNewBaseObj {
    createDate: Date;
    updateDate?: Date;
}
export interface IWhatsNewServiceObj extends IWhatsNewBaseObj {
    createDate: string;
    updateDate?: string;
}
interface IWhatsNewSettingsBaseObj {
    id: string;
    popupName: string;
    startDate?: Date | string;
    endDate?: Date | string;
    updateDate?: Date | string;
    updatedBy?: string;
}
export interface IWhatsNewSettingsDataObj extends IWhatsNewSettingsBaseObj {
    startDate?: Date;
    endDate?: Date;
    updateDate?: Date;
}
export interface IWhatsNewSettingsServiceObj extends IWhatsNewSettingsBaseObj {
    startDate?: string;
    endDate?: string;
    updateDate?: string;
}
export {};
//# sourceMappingURL=whatsNew.d.ts.map