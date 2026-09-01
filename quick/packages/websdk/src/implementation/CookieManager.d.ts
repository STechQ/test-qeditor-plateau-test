import { ICookieManager } from "../../../../common/qshell";
import { ICookieValue } from "../../../../common/shrimp/interfaces/quick/ICookieAccess";
export declare class CookieManager implements ICookieManager {
    contextName: string;
    constructor({ contextName }: {
        contextName: string;
    });
    setCookie?({ key, cookieValue }: {
        key: string;
        cookieValue: ICookieValue;
    }): void;
    clearCookies?(): void;
    getItemFromCookies?({ key }: {
        key: string;
    }): string | undefined;
    getAllCookies(): Record<string, string>;
    removeItemFromCookies?({ key }: {
        key: string;
    }): void;
}
//# sourceMappingURL=CookieManager.d.ts.map