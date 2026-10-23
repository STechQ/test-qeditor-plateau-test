/**
 * Guard against Excel / CSV formula injection.
 *
 * Excel treats a cell whose content starts with `=`, `+`, `-`, `@` (or a tab / CR) as a
 * formula. A value like `=HYPERLINK("http://attacker/","x")` typed into a free text field
 * and then written verbatim into an export file can therefore run on the machine of
 * whoever opens that file.
 */
export declare class ExcelFormulaGuard {
    /**
     * Is this value a string Excel could interpret as a formula?
     *
     * Number-ish values ("-1500") and trigger-only placeholders ("-") are excluded: they
     * carry no formula risk, and escaping them would visibly break every negative amount
     * in the exported file.
     */
    static isFormulaLike(value: any): boolean;
    /**
     * Single quote escape for text based output (csv).
     *
     * Not used for xlsx: there it is enough to write the cell as text (t: "s"), and the
     * single quote would stay visible in the cell since it is an Excel UI convention
     * rather than a file format one.
     */
    static escape(value: any): any;
}
//# sourceMappingURL=excelFormulaGuard.d.ts.map