/**
 * QDocumentViewer Office (docx / xlsx) gosterimi icin ortak kaynak cozumleme.
 * Gelen veri tipi ne olursa olsun (URL, data URL, ham base64, File/Blob, ArrayBuffer, TypedArray) ortak tip ArrayBuffer'dir.
 * Eski formatlar (doc / xls) gosterilmez; sadece tanınır (indirme yonlendirmesi icin).
 */
export type ViewerLocale = "tr" | "en";
export type OfficeKind = "docx" | "xlsx";
export type LegacyOfficeKind = "doc" | "xls";
export declare function toArrayBuffer(src: any): Promise<ArrayBuffer>;
/** Gercek tur dosya iceriginden belirlenir; docx/xlsx/doc/xls degilse null. */
export declare function detectOfficeKind(buffer: ArrayBuffer): Promise<OfficeKind | LegacyOfficeKind | null>;
export declare function safeHref(href: any): string | null;
export declare const escapeHtml: (s: any) => string;
//# sourceMappingURL=officeSource.d.ts.map