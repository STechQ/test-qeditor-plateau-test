export declare class qjsonVersionHelper {
    /**
     * Extracts the fileMap ID from a URL that can be in one of these formats:
     * 1. <<qjson:firstId:secondId>>  → returns secondId
     * 2. <<type:singleId>>           → returns singleId
     * 3. bare ID like "synuv3qo-6rer-kxfx-j799-sn20mdiybq52" → returns as-is
     * 4. normal file path like "/static/inbox.qjson" → returns null (no ID match)
     */
    static extractFileMapId(url: string): string | null;
    static traversePageVersions(url: string, pageVersions: Record<string, Date | unknown>, fileMap?: Array<{
        id: string;
        path: string;
        name: string;
        version: string;
    }>): Date;
}
//# sourceMappingURL=qjsonVersionHelper.d.ts.map