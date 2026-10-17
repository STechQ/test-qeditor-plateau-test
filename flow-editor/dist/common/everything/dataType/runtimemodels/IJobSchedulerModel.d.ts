import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
import { JobSchedulerModelType } from "./types";
export interface IJobSchedulerModel extends IModelBaseFields, IJobSchedulerProperty {
    type: JobSchedulerModelType;
}
export interface IJobSchedulerProperty {
    name: string;
    _name: string;
    desc: string;
    active: boolean;
    workingInterval?: number;
    recurrencePattern?: IRecurrencePattern;
    functionModel?: string;
    userName?: string;
}
export interface IRecurrencePattern {
    RecurringFrequency: FrequencyTypeEnum;
    Daily: IDailyType;
    Weekly: IWeeklyType;
    Monthly: IMontlyType;
    Yearly: IYearlyType;
}
export interface ITimeUnit {
    StartTime: string;
    TimeZone: string;
}
export interface IDailyType {
    TimeUnit: ITimeUnit;
}
export interface IWeeklyType {
    SelectedWeekDays: Array<DaysOfWeekEnum>;
    TimeUnit: ITimeUnit;
}
export interface IMontlyType {
    RepeatsOnType: RepeatTypeEnum;
    RepeatsOnDay: number;
    TimeUnit: ITimeUnit;
}
export interface IYearlyType {
    RepeatsOnType: RepeatTypeEnum;
    RepeatsOnMonth: MonthsEnum;
    RepeatsOnDay: number;
    TimeUnit: ITimeUnit;
}
export declare enum FrequencyTypeEnum {
    Minutes = "Minutes",
    Hours = "Hours",
    Days = "Days",
    Weeks = "Weeks",
    Months = "Months",
    Years = "Years"
}
export declare enum MultipleTypeEnum {
    Hours = "Hours",
    Minutes = "Minutes",
    Seconds = "Seconds"
}
export declare enum DaysOfWeekEnum {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 0
}
export declare enum RepeatTypeEnum {
    FirstDay = "First Day",
    LastDay = "Last Day",
    FirstWeekday = "First Weekday",
    LastWeekday = "Last Weekday",
    SpecificDay = "Choose A Specific Day"
}
export declare enum MonthsEnum {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
}
//# sourceMappingURL=IJobSchedulerModel.d.ts.map