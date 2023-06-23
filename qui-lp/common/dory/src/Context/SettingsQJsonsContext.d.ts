import { ContextManager, IContextItem } from "../../../shrimp/context";
import { Hook } from "../../../shrimp/helpers/hook";
import { IQJSon } from "../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { StyleJson } from "../../../shrimp/interfaces/ComponentInterfaces/IStyle";
import { IDory } from "../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { ISettingsQJsonContext } from "../../../shrimp/interfaces/RenderingInterfaces/IRenderer";
export declare class SettingsQJsonsContext implements ISettingsQJsonContext, IContextItem {
    static ContextName: string;
    contextName: string;
    PipelineChangeHook: Hook<() => void>;
    AlertChangeHook: Hook<() => void>;
    private context;
    private pipelineMethods?;
    private pipelineQjson?;
    private alertQjson?;
    private loadingQjson?;
    private _quickStyle?;
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
    GetQuickStyle(): StyleJson | undefined;
    SetQuickStyle(value: StyleJson | undefined): void;
    TriggerPipeline(methodName: string, methodArgs: Record<string, any>): Promise<any> | any;
    RerenderPipelineQjson(): Promise<void> | undefined;
}
//# sourceMappingURL=SettingsQJsonsContext.d.ts.map