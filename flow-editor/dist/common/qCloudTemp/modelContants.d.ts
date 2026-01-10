import { ModelType } from "../everything/studio/ui/IStudioUIModelBase";
import { ModelAdditionals, ModuleObjectType } from "./quickCloud";
interface IEditorConst {
    modelKeys: IModelKeys;
}
type IModelKeys = ({
    single: string;
} | {
    design: string;
    runtime: string;
}) & {
    view?: string;
};
type ValueOf<Type> = Type extends any ? Type[keyof Type] : never;
type FieldValueOf<Type extends typeof typeSafety, Field extends keyof Type[keyof Type]> = Type[keyof Type][Field];
export type EditorModelTypes = ValueOf<FieldValueOf<typeof EditorConsts, "modelKeys">>;
declare let typeSafety: Record<string, IEditorConst>;
export declare const EditorConsts: {
    readonly quick: {
        readonly modelKeys: {
            readonly single: "qjson";
        };
    };
    readonly container: {
        readonly modelKeys: {
            readonly design: "container-design";
            readonly runtime: "container-runtime";
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
    readonly certificate: {
        readonly modelKeys: {
            readonly single: "certificate";
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
    readonly themeEditor: {
        readonly modelKeys: {
            readonly single: "theme";
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
    readonly namedComponent: {
        readonly modelKeys: {
            readonly design: "pim";
            readonly runtime: "files";
            readonly view: "qjson";
        };
    };
    readonly appAssetList: {
        readonly modelKeys: {
            readonly single: "yaml";
            readonly view: "qjson";
        };
    };
    readonly soapEditorV2: {
        readonly modelKeys: {
            readonly single: "soapServiceV2";
        };
    };
    readonly jobSchedulerEditor: {
        readonly modelKeys: {
            readonly single: "jobScheduler";
        };
    };
    readonly slaEditor: {
        readonly modelKeys: {
            readonly single: "sla";
        };
    };
    readonly endpointEditor: {
        readonly modelKeys: {
            readonly single: "endpoint";
        };
    };
    readonly backendFuncEditor: {
        readonly modelKeys: {
            readonly design: "befunc-design";
            readonly runtime: "befunc-runtime";
        };
    };
    readonly decisionTable: {
        readonly modelKeys: {
            readonly single: "decisionTable";
        };
    };
    readonly dataSetEditor: {
        readonly modelKeys: {
            readonly single: "dataSet";
        };
    };
};
type ModelVisualInfo = {
    type: "icon";
    icon: string;
    color?: string;
} | {
    type: "svg";
    src: string;
    activeSrc: string;
};
export declare class ModelContants {
    static getModelVisualInfo(modelType: ModelType | ModuleObjectType | "folder", modelAdditionals: ModelAdditionals | undefined): ModelVisualInfo;
    static getModelBodyKeys(modelType: ModelType): string | string[] | undefined;
}
export {};
//# sourceMappingURL=modelContants.d.ts.map