import { ICookieManager } from "../../../../common/qshell";
import { ICookieValue } from "../../../../common/shrimp/interfaces/quick/ICookieAccess";
/**
 * SECURITY, embed-safe cookie attributes for JS-set cookies.
 *
 * - Secure: added only on https. Adding it on http (e.g. local dev, http://localhost) would make
 *   the browser silently drop the cookie, so we gate it on the protocol.
 * - SameSite: when we are the top-level document (standalone, or injected into a top-level host
 *   page via a div) we use Lax — good CSRF hygiene and first-party, so it always works. But when
 *   running inside a frame the context may be cross-site, and there Lax/Strict cookies are NOT
 *   sent at all — so forcing Lax would BREAK embedded deployments that rely on cookies. In a frame
 *   we therefore use SameSite=None (which the spec requires to be paired with Secure, hence https
 *   only). On http+framed we cannot use None safely and Lax would break embedding, so we leave
 *   SameSite unset rather than break the app.
 *
 * NB: JS-set cookies can never be HttpOnly (browser-only flag); do not store secrets here.
 */
export declare function cookieSecurityAttributes(): string;
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