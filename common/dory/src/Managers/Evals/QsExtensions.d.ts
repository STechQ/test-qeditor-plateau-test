import { Dory } from "../../Dory";
export declare class QsExtensions {
    constructor();
    generateExtensions(dory: Dory): {
        String: {
            length: (stringParam: string) => number;
            toString(stringParam: string): string;
            lowerCase(stringParam: string): string;
        };
        Object: {
            toString(object: Object): string;
            toJSONString(object: Object): string;
        };
        Array: {
            remove: (array: Array<Object>, index: number) => void;
            filter: (array: Array<Object>, operation: Function) => Object[];
            length: (array: any) => any;
            toString(array: Array<any>): string;
        };
        Date: {
            toFormattedString: (date: Date, formatType: string) => string;
            getDate: (date: Date) => number;
            toISOString: (date: Date) => string;
            addDays: (date: Date, value: number) => Date;
            addMonths: (date: Date, value: number) => Date;
            addYears: (date: Date, value: number) => Date;
            getTime: (date: Date) => number;
        };
        Number: {
            toString(number: Number): string;
            toFormattedString: (number: Number, formatType: string, opt?: Intl.NumberFormatOptions | undefined) => string;
            fixed: (number: number, digits: number) => string;
        };
    };
}
//# sourceMappingURL=QsExtensions.d.ts.map