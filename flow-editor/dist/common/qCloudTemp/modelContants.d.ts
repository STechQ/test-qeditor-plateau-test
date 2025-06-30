import { ModelType } from "../everything/studio/ui/IStudioUIModelBase";
import { ModelAdditionals, ModuleObjectType } from "./quickCloud";
type ValueOf<Type> = Type extends any ? Type[keyof Type] : never;
type FieldValueOf<Type extends typeof typeSafety, Field extends keyof Type[keyof Type]> = Type[keyof Type][Field];
export type EditorModelTypes = ValueOf<FieldValueOf<typeof EditorConsts, "modelKeys">>;
declare let typeSafety: Record<string, {
    modelKeys: Record<string, string>;
}>;
export declare const EditorConsts: {
    readonly quick: {
        readonly modelKeys: {
            readonly self: "qjson";
        };
    };
    readonly flow: {
        readonly modelKeys: {
            readonly design: "flow-design";
            readonly runtime: "flow-runtime";
        };
    };
    readonly workflow: {
        readonly modelKeys: {
            readonly design: "workflow-design";
            readonly runtime: "workflow-runtime";
        };
    };
    readonly dataTypeEditor: {
        readonly modelKeys: {
            readonly single: "dataType";
        };
    };
    readonly serviceEditor: {
        readonly modelKeys: {
            readonly single: "restService";
        };
    };
    readonly soapEditor: {
        readonly modelKeys: {
            readonly single: "soapService";
        };
    };
    readonly enum: {
        readonly modelKeys: {
            readonly single: "enum";
        };
    };
    readonly constantEditor: {
        readonly modelKeys: {
            readonly single: "constant";
        };
    };
};
interface ModelVisualInfo {
    icon: string;
    color: string;
}
export declare class ModelContants {
    static getModelVisualInfo(modelType: ModelType | ModuleObjectType | "folder", modelAdditionals: ModelAdditionals | undefined): ModelVisualInfo;
}
export {};
//# sourceMappingURL=modelContants.d.ts.map