import { ViewerLocale } from "./officeSource";
/** Excel stil/format yardimcilari: renk, tema, sayi-tarih formati, css uretimi. */
export declare const colName: (c: number) => string;
export interface CellRange {
    r1: number;
    c1: number;
    r2: number;
    c2: number;
}
export declare const decodeAddr: (a: string) => {
    r: number;
    c: number;
} | null;
export declare const decodeRange: (s: string) => CellRange | null;
export declare const fontStack: (name: any) => string;
export declare function parseTheme(xml: string | undefined): string[];
export type ColorResolver = (color: any) => string | null;
export declare function makeColorResolver(theme: string[]): ColorResolver;
export declare function formatColorFor(fmt: string | undefined, value: any): string | null;
export type ValueFormatter = (value: any, fmt?: string) => string;
export declare function makeFormatter(locale: ViewerLocale, date1904: boolean): ValueFormatter;
export declare function borderCss(b: any, resolve: ColorResolver): string | null;
export declare function fontCss(font: any, resolve: ColorResolver): string;
export declare function textWidth(text: string, font: any): number;
//# sourceMappingURL=excelFormat.d.ts.map