import { INamedCompModel } from "./INamedCompModel";
interface IQJsonHandler {
    value: string;
    type: "prefix" | "contains";
}
export interface IExternalQJsonRetriever {
    getQjson: (qjsonPath: string) => Promise<string | undefined | false>;
    getNamedCompModel(compPath: string): Promise<INamedCompModel | undefined>;
    qjsonHandling?: IQJsonHandler | Array<IQJsonHandler>;
}
export {};
//# sourceMappingURL=IExternalQJsonRetriever.d.ts.map