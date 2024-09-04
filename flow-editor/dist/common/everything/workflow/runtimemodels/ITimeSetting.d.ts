/**
 * @author {Aykut Sen}
 * @type {Runtime / Design Time Model}
 * @description {SLA and Timer Set Type}
 * 2024-06-14
*/
export type ITimeSetting = {
    label: string;
    day: DaySetting;
    hour: HourSetting;
    minute: MinuteSetting;
};
export type DaySetting = {
    type: DaySettingType;
    dayCorrection: DaySettingDayCorrection;
    setTo: number;
};
export type HourSetting = {
    type: HourSettingType;
    setTo: number;
};
export type MinuteSetting = {
    type: MinuteSettingType;
    setTo: number;
};
export declare const DaySettingTypes: {
    "--days-- Weekdays": string;
    "--days-- Calendar Days": string;
    "--dd--": string;
    "At The End Of The Month": string;
};
export declare const DaySettingDayCorrections: {
    None: string;
    Previous: string;
    Next: string;
};
export type DaySettingType = keyof typeof DaySettingTypes;
export type DaySettingDayCorrection = keyof typeof DaySettingDayCorrections;
export declare const HourSettingTypes: {
    "--hours-- Hours": string;
    "--hh--": string;
};
export type HourSettingType = keyof typeof HourSettingTypes;
export declare const MinuteSettingTypes: {
    "--minutes-- Minutes": string;
    "--mm--": string;
};
export type MinuteSettingType = keyof typeof MinuteSettingTypes;
//# sourceMappingURL=ITimeSetting.d.ts.map