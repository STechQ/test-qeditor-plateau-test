import { IModelBody, ObjectID } from "./quickCloud";
export type TemplateType = "page" | "bpmn";
export interface ITemplateInfo {
    ID: ObjectID;
    name: string;
    type: TemplateType;
    priority?: number;
    image?: string;
    targetObjectIds?: Array<string>;
}
export interface IPageTemplate extends ITemplateInfo {
    type: "page";
    category: "Web";
    subCategory: string;
}
export interface IPageTemplateModel extends IModelBody {
}
export interface IBpmnTemplateModel extends IModelBody {
}
export type ITemplateModel = IPageTemplateModel | IBpmnTemplateModel;
export interface ITemplateCategoryItem {
    type: "category";
    name: string;
    children: Array<ITemplateCategoryItem | IPageItem>;
}
export interface IPageItem {
    type: "page";
    ID: ObjectID;
    name: string;
}
//# sourceMappingURL=template.d.ts.map