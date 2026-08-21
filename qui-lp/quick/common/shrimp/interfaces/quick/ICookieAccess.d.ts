export interface ICookieValue {
    value?: string;
    expire?: number | string;
}
export interface ICookieAccess {
    setCookie?({ key, cookieValue }: {
        key: string;
        cookieValue: ICookieValue;
    }): void;
    clearCookies?(): void;
    getItemFromCookies?({ key }: {
        key: string;
    }): string | undefined;
    removeItemFromCookies?({ key }: {
        key: string;
    }): void;
    getAllCookies?(): Record<string, string>;
}
//# sourceMappingURL=ICookieAccess.d.ts.map