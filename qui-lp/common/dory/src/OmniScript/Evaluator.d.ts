declare var summarizeToken: (self: any) => string;
/**
 * * Evaluate a forest of trees and return value
 * @param {*} forest
 * Forest of trees to be evaluated
 * value="new DNode()"
 * @param {*} response
 * Response object
 * value="{}"
 * @param {*} dataSource
 * Data Source object if any exists.
 * value="{}"
 * @param {*} globals
 * Global instances and libraries: SM, LR, Math, ...
 * value="{}"
 * @param {*} controlDict
 * Component instances
 * value="{}"
 * @param {*} extensions
 * Type extensions: [].length, "".length, [].push, ...
 * value="{}"
 * @param {*} context
 * Context of Dory instance
 */
declare var Eval: (forest: any, response: any, dataSource: any, globals: any, controlDict: any, extensions: any, context: any) => any;
export { Eval, summarizeToken };
//# sourceMappingURL=Evaluator.d.ts.map