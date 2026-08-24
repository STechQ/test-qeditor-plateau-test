export declare class CompUIDHelper {
    /**
     * Gets First compID from compUID.
     * @example "CustComp.MainComp.topBtn" -> {root: "CustComp", sub: "MainComp.topBtn"}
     * @example "topBtn" -> {root: "topBtn"}
     */
    static GetRootCompId(compUID: string): {
        rootCompId: string;
        subCompUID?: undefined;
    } | {
        rootCompId: string;
        subCompUID: string;
    };
    static CompIDConcat(compUIDPrefix: string | undefined, compId: string): string;
}
//# sourceMappingURL=compUIDHelper.d.ts.map