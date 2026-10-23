/**
 * SECURITY: a protocol-relative ("//host") or backslash-obfuscated ("/\\host", "\\host") URL
 * resolves to a DIFFERENT origin in the browser, yet carries no explicit http/https scheme — so a
 * naive startsWith("http") check misses it. This is exactly the WAF-bypass form from the report
 * ("//evil.example.com" sailed through). Whitespace is trimmed and backslashes normalised first,
 * because browsers ignore leading whitespace and treat "\" like "/" when resolving URLs.
 */
declare function isProtocolRelativeUrl(url: string): boolean;
declare function isDirectUrl(url: string): boolean;
declare const _default: {
    isHandlerEnabled: (config: any) => boolean;
    isDirectUrl: typeof isDirectUrl;
    isProtocolRelativeUrl: typeof isProtocolRelativeUrl;
};
export default _default;
//# sourceMappingURL=utils.d.ts.map