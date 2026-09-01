import { IQJSon } from "../../interfaces/ComponentInterfaces/IQJson";
interface PageClass {
    new (): PageInst;
    prototype: PageInst;
}
interface PageInst extends Record<string, Function | undefined> {
}
export declare class PageScripting {
    private cFiles;
    private pageClass?;
    private pageClassGenerated?;
    private pageInst?;
    constructor(cFiles: IQJSon["cFiles"]);
    GetPageClass(): PageClass | undefined;
    GetPageInstance(): PageInst | undefined;
    private createPageInstance;
    private createPageClass;
}
export {};
//# sourceMappingURL=PageScripting.d.ts.map