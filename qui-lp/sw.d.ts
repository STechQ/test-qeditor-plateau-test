interface IPromiseData<T> {
    promise: Promise<T>;
    resolver: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
    startTimer: (timeout: number) => void;
}
interface IRequestInfo {
    type: string;
    guid: string;
}
interface IResource {
    resourceId: string;
    resource: string | Uint8Array;
    resourceType: string;
}
interface serviceWorkerRequestResponse {
    resourceModel: string;
    resourceId: string;
    resourceType: string;
}
interface IImportFile {
    type: "entity" | "qjson" | "process" | "bpmn" | "flow" | "png" | "jpg" | "jpeg" | "svg" | "gif" | "json";
}
declare const MIME_BY_EXT: Record<string, string>;
declare const binaryFileTypesSet: Set<string>;
declare function getMimeByExtension(extRaw: string, fallback?: string): string;
declare const KNOWN_PREFIXES: string[];
declare function stripKnownPrefix(uri: string): {
    uri: string;
    prefix: string | null;
};
declare function normalizeForToken(uri: string): string;
declare function base64ToUint8Array(base64: string): Uint8Array;
declare function toBody(resource: string | Uint8Array, mime?: string): BodyInit;
declare const swTimeout = 15000;
declare var doNothing: (() => void) | undefined;
declare let syncResolved: boolean;
declare const syncResolveProblem: boolean;
type ResolveFunc<T> = (value: T | PromiseLike<T>) => void;
/**
 * @param timeout timeout time in ms, undefined if infinite
 */
declare function CreatePromiseData<T>(timeout?: number, opt?: {
    fixSyncResolve?: boolean;
}): IPromiseData<T>;
declare const selfSw: ServiceWorkerGlobalScope;
declare const waiters: Map<string, IPromiseData<IResource>>;
declare const getBase64FileContent: (fileContent: string) => string;
declare function checkBinaryFile(ext: string): boolean;
declare function waitAndGetResource(clientId: string, guid: string, timeout?: number): Promise<IResource>;
declare const run: (event: FetchEvent) => Promise<Response>;
declare const isStartWithLessSign: (uri: string) => boolean;
declare const parseURI: (uri: string) => IRequestInfo | null;
declare const sendMessage: (clientId: string, guid: string) => Promise<void>;
//# sourceMappingURL=sw.d.ts.map