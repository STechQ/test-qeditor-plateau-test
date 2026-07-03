import { IUserContext } from "../../../shrimp/interfaces/quick/IUserContext";
import { ILanguageExtensions } from "../interfaces/construction/ILanguageExtensions";
import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
export declare class ShellManager {
    private shell;
    private osGlobals;
    private langImpl?;
    constructor(langImpl?: ILanguageExtensions);
    get UserContext(): IUserContext | undefined;
    set UserContext(user: IUserContext | undefined);
    PollyFill(): IDictionary<any>;
}
//# sourceMappingURL=shellManager.d.ts.map