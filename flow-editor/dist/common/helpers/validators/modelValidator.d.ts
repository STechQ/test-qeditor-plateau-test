import { IConnectionDesignModel } from "@stechquick/flow-interfaces/editor/IConnectionDesignModel";
import { IFlowCoreModel, IFlowDesignModel } from "@stechquick/flow-interfaces/editor/IFlowDesignModel";
import { IStepDesignModel } from "@stechquick/flow-interfaces/editor/IStepDesignModel";
import { IPropObject, PropValue } from "@stechquick/flow-interfaces/runtime";
import { IPersonaDesign } from "../../everything/accessmanager/designtime/IPersonaDesign";
import { IPrivilegeDesign } from "../../everything/accessmanager/designtime/IPrivilegeDesign";
import { IRoleDesign } from "../../everything/accessmanager/designtime/IRoleDesign";
import { ISwimlaneDesign } from "../../everything/accessmanager/designtime/ISwimlaneDesign";
import { IDataSetDesign } from "../../everything/dataSet/designtimemodels/IDataSetDesign";
import { IExpressionData, ISetExpressionData } from "../../everything/dataType/runtimemodels/IExpression";
import { IDataTypeDesign } from "../../everything/dataType/designtimemodels/IDataTypeDesign";
import { IJobSchedulerDesign } from "../../everything/dataType/designtimemodels/IJobSchedulerDesign";
import { IVariable } from "../../everything/dataType/runtimemodels/IVariable";
import { IDecisionTableDesign } from "../../everything/decisionTable/designtimeModels/IDecisionTableDesign";
import { IEndpointDesign } from "../../everything/endpoint/designtimeModels/IEndpoint";
import { IRestServiceDesign } from "../../everything/restService/designtimeModels/IRestService";
import { ISLADesign } from "../../everything/sla/designtimemodels/ISLADesign";
import { ISoapServiceDesign } from "../../everything/soapService/designtimeModels/ISoapService";
import { ISoapServiceV2Design } from "../../everything/soapService/designtimeModels/ISoapServiceV2";
import { Store } from "../../everything/store/designtimemodels/IStoreModel";
import { IWorkflowDesignModel } from "../../everything/workflow/designtimemodels/IWorkflowDesignModel";
import { IForm } from "../../everything/workflow/runtimemodels/IWorkflow";
import { IActionDesign } from "../../everything/action/IActionDesign";
/**
 * Store variables as model bodies carry them: IVariable plus the legacy `_name`
 * alias that older bodies use for the runtime-facing name.
 */
export type StoreVariable = IVariable & {
    _name?: string;
};
/** One section of a store (`input` / `output` / `vars`), keyed by variable name. */
export type StoreSection = Record<string, StoreVariable>;
/** The in/out parameter mapping every reference-bearing step and function carries. */
export type ParamMappings = {
    inParamMapping?: Array<ParamMapping>;
    outParamMapping?: Array<ParamMapping>;
};
/** A reference to another model, as a step prop or a model-level field holds it. */
export type ModelFunctionRef = {
    id?: string;
};
/**
 * The fields collectFunctionRefs reads across every model type that can point at
 * a function: flow/workflow bodies (via steps), job schedulers, endpoints and SLAs.
 */
export type ReferencingModel = Partial<IFlowCoreModel> & {
    type?: string;
    functionModel?: string;
    handlers?: Array<{
        trigger?: {
            type?: string;
            modelId?: string;
        };
    } | undefined>;
    slaInfo?: Array<{
        escalationFunctionId?: string;
    } | undefined>;
    sla?: {
        selectedSlaModelId?: string;
    };
};
/** Model-level function/SLA references shared by flow and workflow bodies. */
export type ModelLevelRefs = {
    businessKeyGenerationFunction?: ModelFunctionRef;
    fileUploadFunction?: ModelFunctionRef;
    fileDownloadFunction?: ModelFunctionRef;
    fileDeleteFunction?: ModelFunctionRef;
    sla?: {
        selectedSlaModelId?: string;
    };
};
/** A `switch` step case: a named condition expression. */
export type SwitchCase = {
    name?: string;
    value?: string;
};
/**
 * A user task's form id. `form.id` is an evaluable value (IExpressionData);
 * legacy bodies persisted it as a plain string and the runtime coerces both
 * (see wfeAuthzHelper). Returns undefined for an unset expression too — a bare
 * truthiness check on `form.id` passes those, because the expression object
 * itself is truthy.
 */
export declare function resolveFormId(form: IForm | undefined): string | undefined;
/**
 * The form id as a model reference, or undefined when it is not one. Only a
 * "string" expression (or a legacy plain string) holds a directly picked UI
 * model id; any other type (e.g. "literal" — `${flow.input.variables.formId}`)
 * is evaluated at runtime and cannot be checked against the model catalog.
 */
export declare function resolveFormModelRef(form: IForm | undefined): string | undefined;
export type ModelValidationResult = {
    valid: boolean;
    errors: string[];
};
/**
 * How the `<<type:value>>` references in a model body identify the target model.
 * - "id": the Studio form — `value` is the model id (default).
 * - "path": the exported / pulled / deployed form — every `<<type:id>>` has been
 *   rewritten to `<<type:refPath>>` where refPath is the extensionless, forward-slash
 *   disk path of the model (`[owner/]folder/name`, see common/agentic/modelFiles/
 *   modelRefs.ts). In this mode `knownModelIds` and `requiredInputsByRef` are keyed
 *   by that ref path instead of by id.
 * There is no reliable way to tell the two apart from the value alone (a root-level
 * model's ref path is just its name), so the caller must say which one it holds.
 */
export type ReferenceMode = "id" | "path";
export type ModelValidationOptions = {
    /**
     * Reference keys of every model available to this app: bare ids in "id" mode,
     * ref paths in "path" mode (see ReferenceMode). When provided, referenced
     * models (functions, sub-workflows, decision tables, forms, …) are checked
     * for existence. When omitted, existence checks are skipped entirely so the
     * validator stays usable without a model catalog.
     */
    knownModelIds?: Set<string>;
    /**
     * Map of referenced model key (bare id, or ref path in "path" mode) → set of
     * that model's REQUIRED input parameter names, resolved from the referenced
     * model's current store.input. When provided, reference steps are checked so
     * every required input of the referenced model has a non-empty inParamMapping
     * entry. Build with buildRequiredInputsByRef (common/helpers/requiredInputsResolver).
     */
    requiredInputsByRef?: Map<string, Set<string>>;
    /**
     * Whether references are ids or ref paths. Defaults to "id". Must match how
     * `knownModelIds` / `requiredInputsByRef` are keyed.
     */
    referenceMode?: ReferenceMode;
    /**
     * Item catalog for access-manager container models: model type
     * ("persona" | "role" | "privilege" | "swimlane") → bare model id → item ids.
     * Enables item-level reference checks for the nested `<<type:modelId>>:itemId`
     * form (and bare item ids, which the runtime resolves app-wide, first model
     * wins). When omitted, item existence checks are skipped.
     */
    accessItemsByType?: Map<string, Map<string, Set<string>>>;
};
/**
 * Normalizes a reference value into the lookup key for the given mode. Ids are
 * used verbatim. Ref paths are brought to the canonical exported form (forward
 * slashes, no leading "./" or "/", no trailing "/", no doubled separators) so a
 * hand-edited or OS-specific spelling still hits the same catalog entry.
 */
export declare function normalizeReference(value: string, mode?: ReferenceMode): string;
/**
 * Extracts the model key from a reference. Handles the embedded forms
 * `<<type:id>>` and `<<type:appId:id>>`, the nested form `<<type:id>>:objectId`
 * (returns the model id, ignoring the object suffix), and a plain raw id.
 * In "path" mode the value is a ref path (`<<type:folder/name>>`) and is
 * normalized with normalizeReference. Returns undefined for empty /
 * unparseable values so they are simply skipped.
 */
export declare function resolveModelId(ref: PropValue, mode?: ReferenceMode): string | undefined;
/**
 * True when a reference value is a literal template (`${flow.input.x}`) rather
 * than a model id. It is evaluated at runtime, so it can never be checked
 * against the model catalog — no reference check may report it as missing.
 */
export declare function isLiteralReference(ref: PropValue): boolean;
export type ModelReferenceCheck = {
    /** Raw reference value as stored on the model (bare id or embedded `<<type:id>>`). */
    ref: PropValue;
    /** Where the reference lives, used in error messages, e.g. `"Scheduled function"`. */
    label: string;
    /** When set, an embedded `<<type:…>>` reference must be of this model type. */
    expectedType?: string;
    /** When true, an empty/unset reference is itself an error. */
    required?: boolean;
};
/**
 * Common model-reference validation shared by every model type (workflow, flow,
 * job scheduler, …): the reference must be present (when required), well-formed,
 * of the expected type, and point at an existing model when a catalog is given.
 */
export declare function validateModelReference(check: ModelReferenceCheck, options?: ModelValidationOptions): string[];
export type NestedItemRefCheck = {
    /** Raw reference: `<<type:modelId>>:itemId`, `<<type:appId:modelId>>:itemId` or a bare item id. */
    ref: PropValue;
    /** Where the reference lives, used in error messages. */
    label: string;
    /** The container model type the reference must point at (role/privilege/swimlane/persona). */
    expectedType: string;
};
/**
 * Validates a reference to an ITEM inside an access-manager container model.
 * Model existence uses knownModelIds; item existence uses accessItemsByType.
 * Bare item ids are legal — the runtime resolves them app-wide (first model wins).
 */
export declare function validateNestedItemReference(check: NestedItemRefCheck, options?: ModelValidationOptions): string[];
/**
 * Common shape check for access-manager container models: the item array must
 * exist, every item needs a non-empty id, and ids must be unique in the model
 * (the runtime resolves bare ids app-wide, first match wins — silently).
 */
export declare function validateContainerItems<TItem extends {
    id?: string;
}>(itemsValue: Array<TItem | null | undefined> | undefined, path: string, itemLabel: string): {
    errors: string[];
    items: Array<TItem>;
};
/**
 * A design-body step, normalized for validation. `props` is the same prop bag
 * the runtime body carries as `P`, so every prop-level check is shape-identical
 * either way; `incoming`/`outgoing` replace the runtime step's `I`/`O`, which
 * the design body does not have - there, connections live in their own list.
 */
export type StepView = {
    /** IStepDesignModel.ID */
    id: string;
    /** Component name, e.g. "humantask" / "switch" (IStepDesignModel.name). */
    name: string;
    version: string;
    props: IPropObject;
    incoming: Array<{
        stepId: string;
        input: string;
    }>;
    outgoing: Array<{
        stepId: string;
        output: string;
    }>;
};
/**
 * Normalizes a design body (IFlowDesignModel / IWorkflowDesignModel) into the
 * step list every step-level check runs on. The adjacency that connectivity
 * checks need is built from `connections` once, here, instead of in each check.
 * Malformed entries are skipped - validateSteps reports those separately.
 */
export declare function toStepViews(model: Partial<IFlowCoreModel> | undefined): StepView[];
export type ParamMapping = {
    variable?: {
        value?: string;
    };
    mapping?: {
        value?: string;
    };
};
export declare function validateStore(store: Store | undefined, path: string): string[];
export declare function rootName(value: string): string;
export declare function declaredNames(vars: StoreSection | undefined): Set<string>;
export type ExpressionContext = {
    inputNames: Set<string>;
    hasStoreInput: boolean;
    options?: ModelValidationOptions;
};
export declare function validateExpression(exp: IExpressionData | undefined, label: string, ctx: ExpressionContext): string[];
export declare function validateSetTarget(exp: ISetExpressionData | undefined, label: string, outputNames: Set<string>, hasStoreOutput: boolean): string[];
export declare function validateStoreVariableNames(vars: StoreSection | undefined, section: string, path?: string): string[];
export declare function validateServiceRequestBody(requestBody: Array<{
    bodyKey: string;
    value: IExpressionData;
}> | undefined, storeInput: StoreSection | undefined, ctx: ExpressionContext): string[];
export declare function getStepLabel(step: StepView): string;
export declare function validateSteps(steps: Array<IStepDesignModel> | undefined, path: string): string[];
export declare function validateStepConnections(views: StepView[], connections?: Array<IConnectionDesignModel>): string[];
export declare function validateRequiredMappings(mapping: ParamMappings | undefined, label: string, requiredNames?: Set<string>, direction?: "input" | "output"): string[];
export type FunctionRefKind = "flow" | "workflow" | "befunc" | "restService" | "soapService" | "soapServiceV2" | "decisionTable" | "dbEntity" | "sla";
export type FunctionRef = {
    id: string;
    kind: FunctionRefKind;
    /**
     * Sub-model discriminator for kinds whose inputs are scoped below the model
     * (dbEntity: the query id; sla: SLA_OUTPUT_DISCRIMINATOR for the required
     * OUTPUTS). Refs with a discriminator are keyed as `${id}#${discriminator}`
     * in requiredInputsByRef.
     */
    discriminator?: string;
};
export declare const SLA_OUTPUT_DISCRIMINATOR = "output";
export declare function requiredInputsKey(id: string, discriminator?: string): string;
export declare function collectFunctionRefs(model: ReferencingModel | undefined, mode?: ReferenceMode): Array<FunctionRef>;
export declare function validateReferenceSteps(views: StepView[], requiredInputsByRef?: Map<string, Set<string>>, mode?: ReferenceMode): string[];
export declare function validateReferencedModels(model: ModelLevelRefs, views: StepView[], knownModelIds: Set<string>, referenceMode?: ReferenceMode): string[];
export declare function validateDecisionTableStoreCollisions(views: StepView[], store: Store | undefined): string[];
export declare function validateDecisionSteps(views: StepView[]): string[];
export declare function validateStepRequiredProps(views: StepView[]): string[];
/** Every model type validateModel can dispatch on. */
export type ValidatableFuncType = "workflow" | "flow" | "befunc" | "jobScheduler" | "restService" | "sla" | "soapService" | "soapServiceV2" | "decisionTable" | "dataSet" | "dataType" | "persona" | "role" | "privilege" | "swimlane" | "action" | "endpoint";
/**
 * A design-time model body, as read from storage. Every field is optional: legacy,
 * hand-edited and half-built bodies reach the validators too, so each check guards
 * rather than trusting the declared shape.
 */
export type DesignModelBody = Partial<IWorkflowDesignModel> | Partial<IFlowDesignModel> | Partial<IJobSchedulerDesign> | Partial<IRestServiceDesign> | Partial<ISLADesign> | Partial<ISoapServiceDesign> | Partial<ISoapServiceV2Design> | Partial<IDecisionTableDesign> | Partial<IDataSetDesign> | Partial<IDataTypeDesign> | Partial<IActionDesign> | Partial<IPersonaDesign> | Partial<IRoleDesign> | Partial<IPrivilegeDesign> | Partial<ISwimlaneDesign> | Partial<IEndpointDesign>;
export declare function validateModel(model: DesignModelBody, funcType: ValidatableFuncType, options?: ModelValidationOptions): ModelValidationResult;
//# sourceMappingURL=modelValidator.d.ts.map