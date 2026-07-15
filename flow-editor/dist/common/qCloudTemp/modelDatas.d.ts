import { IModelBody, IModelInfo } from "../qCloudTemp/quickCloud";
export type FileSystemModel = IModelInfo & {
    model: Array<IModelBody>;
    path: string;
    ownerName?: string;
};
//# sourceMappingURL=modelDatas.d.ts.map