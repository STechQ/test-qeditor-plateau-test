import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    selectedDate: string;
    selectedTime: string | null;
}, {
    selectTime(time: string): void;
    nextDate(event: any): void;
    prevDate(event: any): void;
    formatDate(date: string): string;
}, {
    formattedTimeSlots: {
        value: unknown;
        available: boolean;
    }[];
}, {
    availableDates: unknown[];
    availableTimeSlots: unknown[];
    disabledTimeSlots: unknown[];
    timeFormat: string;
    maxSelectableDays: string | number;
    locale: string;
    weekStartDay: string;
    loading: boolean;
}>;
export default _default;
//# sourceMappingURL=QAppointmentCalendar.vue.d.ts.map