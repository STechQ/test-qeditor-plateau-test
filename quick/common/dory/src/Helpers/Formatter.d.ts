export declare class Formatter {
    formatDate(selfDate: Date, formatType: string): string;
    getDate(selfDate: Date): number;
    addDays(selfDate: Date, value: number): Date;
    addMonths(selfDate: Date, value: number): Date;
    addYears(selfDate: Date, value: number): Date;
    toDate(dateString: string, formatString: string): Date;
    dateFromNow(dateString: string, formatString: string, lang: string): string;
    dateToFormattedString(selfDate: Date, formatString: string): string;
    formatNumber(selfNumber: Number, formatType?: string, opt?: Intl.NumberFormatOptions): string;
    formatBigNumber(number: string, formatType: string): string;
}
//# sourceMappingURL=Formatter.d.ts.map