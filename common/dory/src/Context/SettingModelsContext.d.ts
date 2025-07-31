import { ContextManager, IContextItem } from "../../../shrimp/context";
import { Hook } from "../../../shrimp/helpers/hook";
import { IQJSon } from "../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { IDory } from "../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { ISettingModelsContext } from "../../../shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IContainerModel } from "@stechquick/algae/lib/quick/IContainerModel";
export declare class SettingModelsContext implements ISettingModelsContext, IContextItem {
    static ContextName: string;
    contextName: string;
    PipelineChangeHook: Hook<() => void>;
    AlertChangeHook: Hook<() => void>;
    ContainerConfigurationChangeHook: Hook<() => void>;
    private context;
    private pipelineMethods?;
    private pipelineQjson?;
    private alertQjson?;
    private loadingQjson?;
    private hostTriggerModel?;
    private dory;
    constructor({ context, dory }: {
        context: ContextManager;
        dory: IDory;
    });
    SetPipelineQjson(qjson: IQJSon): Promise<void>;
    GetPipelineQjson(): IQJSon | undefined;
    private renderQJson;
    SetAlertQjson(qjson: IQJSon): void;
    GetAlertQjson(): IQJSon | undefined;
    SetLoadingQjson(qjson: IQJSon): void;
    GetLoadingQjson(): IQJSon | undefined;
    SetGlobalLocalizationQjson(qJson: IQJSon): void;
    SetHostTriggerModel(model: IContainerModel | undefined): void;
    GetHostTriggerModel(): IContainerModel | undefined;
    TriggerPipeline(methodName: string, methodArgs: Record<string, any>): Promise<any> | any;
    RerenderPipelineQjson(): Promise<void> | undefined;
}
//# sourceMappingURL=SettingModelsContext.d.ts.map