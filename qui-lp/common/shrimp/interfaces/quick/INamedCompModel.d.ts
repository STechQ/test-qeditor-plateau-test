export declare type VFS = {
    [key: string]: string | VFS;
};
export interface INamedCompModel extends INamedCompModelOnly {
    files?: VFS;
}
export interface INamedCompModelOnly {
    pim: unknown;
}
//# sourceMappingURL=INamedCompModel.d.ts.map