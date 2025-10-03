export type LocaleType = "en-GB" | "tr-TR" | "en-US";
export interface IDateFormat {
    date?: {
        locale?: LocaleType;
    };
    time?: {
        second?: boolean;
    };
}
export declare class DateHelper {
    static formatDate(date: Date, format: IDateFormat): string;
    static toLocaleIsoString(date?: Date): string;
    static toDefaultTimeStampString(date?: Date): string | undefined;
    static fromDefaultTimeStampString(timestamp: string | undefined): Date | undefined;
    static toUTCDate(date?: Date): Date;
    static convertHourToLocal(hour: number, targetTimezone: number): Promise<number>;
    static toDateInTimezone(date: Date, targetTimezone: number): Date;
}
//# sourceMappingURL=dateHelper.d.ts.map