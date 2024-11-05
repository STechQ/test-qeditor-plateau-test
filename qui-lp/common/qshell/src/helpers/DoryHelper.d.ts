import { ContextManager } from "../../../shrimp/context";
import { IDory } from "../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { IRendererOperatorCollection } from "../../../shrimp/interfaces/RenderingInterfaces/Operators/IRendererOperatorCollection";
import { ShellManager } from "../managers/shellManager";
import { Renderer } from "./Renderer";
export declare class DoryHelper {
    Dory: IDory;
    store: any;
    cookie: any;
    parentInstance: any;
    isEditor: boolean;
    private doryJr?;
    contextManager: ContextManager;
    shellManager: ShellManager;
    constructor({ doryInstName, context, renderer, operatorCollection, }: {
        doryInstName?: string;
        context: ContextManager;
        renderer?: Renderer;
        operatorCollection: IRendererOperatorCollection;
    });
    private createDoryInstance;
    private initRoleBaseAuthFunc;
    private delayTillPostDisplay;
}
//# sourceMappingURL=DoryHelper.d.ts.map