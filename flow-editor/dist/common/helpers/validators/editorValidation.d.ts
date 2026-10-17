import type { ModelValidationResult } from "./modelValidator";
/** Errors keyed by a UI location the editor can highlight (e.g. a decision-table cell). */
export type KeyedErrors = Record<string, string>;
/**
 * The one result shape every editor's validateAndFixModel returns. It is the
 * runtime validators' { valid, errors[] } plus two optional editor concerns:
 * keyedErrors for grid-style editors that highlight errors in place, and
 * modifiedModel for editors that normalise the model while validating.
 */
export interface EditorValidationResult<TModel extends object = object> extends ModelValidationResult {
    keyedErrors?: KeyedErrors;
    modifiedModel?: TModel;
}
export declare function validResult<TModel extends object = object>(modifiedModel?: TModel): EditorValidationResult<TModel>;
export declare function invalidResult<TModel extends object = object>(errors: string | string[]): EditorValidationResult<TModel>;
/** Builds a result from a collected error list; valid (with the model) when the list is empty. */
export declare function fromErrors<TModel extends object = object>(errors: string[], modifiedModel?: TModel): EditorValidationResult<TModel>;
/** Builds a result from a keyed error map, keeping the keys so the editor can highlight each location. */
export declare function fromKeyedErrors<TModel extends object = object>(keyedErrors: KeyedErrors, modifiedModel?: TModel): EditorValidationResult<TModel>;
/** Keyed view of any result; unkeyed errors are indexed so consumers always get a map. */
export declare function toKeyedErrors(result: ModelValidationResult & {
    keyedErrors?: KeyedErrors;
}): KeyedErrors;
/** Distinct messages, one per line, for a notification or dialog. */
export declare function formatErrors(errors: string[]): string;
//# sourceMappingURL=editorValidation.d.ts.map