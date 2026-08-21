import { Stack, StackReason, StackMessage } from "./Stack";
/**
 * * Evaluation scope Context Object which lasts for whole evaluation.
 * * Context object must be destroyed when evaluation completes. It must not leak to another scope of evaluation//56041
 * @param {*} dataSource
 * Data Source object if any exists.
 * value="{}"
 * @param {*} response
 * Response object
 * @param {*} symDict
 * type="SymbolDict"
 * value="new SymbolDict()"
 * Symbol dictionary for current scope
 * @param {*} global
 * @param {*} controlDict
 * @param {*} extensions
 * @param {*} context
 * Context of Dory instance
 * type=IContext
 */
declare class EvalContext {
    dataSource: any;
    response: any;
    symDict: any;
    global: any;
    controlDict: any;
    extensions: any;
    context: any;
    private forestStack;
    constructor(dataSource: any, response: any, symDict: any, globals: any, controls: any, extensions: any, context: any);
    addStack(stack: Stack): void;
    popStack(): Stack | undefined;
    getStackWithReason(reason: StackReason): Stack | null;
    messageStacksAbove(stack: Stack, message: StackMessage): void;
}
export { EvalContext };
//# sourceMappingURL=EvalContext.d.ts.map