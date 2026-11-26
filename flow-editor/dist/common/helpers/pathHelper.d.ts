import { IStudioUIModelBase } from "../everything/studio/ui/IStudioUIModelBase";
export declare class PathHelper {
    static join(path1: string, path2: string): string;
    /** "/a/b", "a/b" ve "/a/b/" ayni klasoru gosterir; bos yol kok demektir. */
    static isSamePath(path1: string | undefined, path2: string | undefined): boolean;
    static uncamelizeAndCapitalize(str: string, separator?: string): string;
    static getFullPath(item: IStudioUIModelBase): string;
}
//# sourceMappingURL=pathHelper.d.ts.map