export interface IModelOrigInfo {
    modelID: string;
    owner: IModelOrigOwner;
    orgID: string;
    orgGroupID: string;
    date: Date;
    by: string;
}
export interface IModuleOrigInfo {
    moduleID: string;
    orgID: string;
    orgGroupID: string;
    date: Date;
    by: string;
}
export interface IModelOrigOwner {
    id: string;
    type: 'module' | 'application';
}
//# sourceMappingURL=applicationCopy.d.ts.map