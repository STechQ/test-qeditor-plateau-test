import { IKeySegment } from "./types";
export declare class PathResolver {
    static encodeKey(segments: IKeySegment[]): string;
    static decodeKey(key: string): IKeySegment[] | undefined;
    static resolveParentAndLeaf(root: Record<string, unknown>, segments: IKeySegment[]): {
        parent: Record<string, unknown>;
        leaf: IKeySegment;
    } | undefined;
    static formatReadablePath(segments: IKeySegment[], separator?: string): string;
}
//# sourceMappingURL=PathResolver.d.ts.map