import { ModelRetriever } from "../../flowInterfaces/runtime/ModelRetriever";
import { IEnvironment } from "../../flowInterfaces/runtime/IEnvironment";
import { FlowExecutionType, IFlowModelBase } from "../../flowInterfaces/runtime/IFlowModel";
import { StepRetriever } from "../../flowInterfaces/runtime/stepRetriever";
import { RuntimeMessage } from "../../flowInterfaces/runtime/StepRuntime";
import { IRuntime, IRuntimeConstructor } from "./runtimes/runtime";
import { IFlowLogger } from "../../flowInterfaces/runtime/IFlowLogger";
import { IFlowEvents } from "@stechquick/flow-interfaces/runtime/IFlowEvents";
import { IStepStates } from "../../../../common/everything/flow/runtimeObjects/IStepStates";
import { StepRepo } from "./manager/stepRepo";
import { RequestCacheOptions } from "../../../../common/runtime/infrastructure/cache/IServiceCacheRequest";
import { IRequest, IResponse } from "../../../../common/everything/flow/runtimeObjects/INetwork";
export declare const flowBatchOn: "on" | "off";
export interface IRuntimeOptions {
    debug?: boolean;
    msg?: RuntimeMessage;
    stepRetriever: StepRetriever;
    modelRetriever: ModelRetriever;
    logger: IFlowLogger["log"];
    environment: IEnvironment;
    executionMode: "canRunBatch" | "mustBeAlive" | "mustRunBatch";
    batchRuntime?: {
        ctor: IRuntimeConstructor;
        createdCb: (runtime: IRuntime) => void;
    };
    events?: IFlowEvents;
    stepStates?: IStepStates;
    stepRepo?: StepRepo;
    isKnownError?: (error: Error, detail: string) => boolean;
    network: <TReqBody, TRespBody>(requestOptions: IRequest<TReqBody>, cacheOptions?: RequestCacheOptions<TRespBody>) => Promise<IResponse<TRespBody>>;
    disableFlowCache?: boolean;
}
export interface IFlowExecutionResult {
    executedType: FlowExecutionType;
    result: any;
}
export declare function executeFlow(flow: IFlowModelBase, options: IRuntimeOptions): Promise<IFlowExecutionResult>;
//# sourceMappingURL=flow.d.ts.map