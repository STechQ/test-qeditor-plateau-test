import { IJumpParam } from "../../../flowInterfaces/runtime/StepRuntime";
import { RuntimeContext } from "./runtimeContext";
import { IThreadStepInfo } from "@stechquick/flow-interfaces/runtime/IThreadStepInfo";
export declare class Thread {
    private readonly ctx;
    private currentStep?;
    private threadId;
    constructor(ctx: RuntimeContext, step: IThreadStepInfo);
    next(fromStep: IThreadStepInfo, output: string | undefined): Promise<void>;
    jump(jumpTo: IJumpParam, fromStep: IThreadStepInfo): Promise<void>;
    tick(): Promise<boolean>;
    private flaggerize;
    private cancel;
    private fail;
    private pause;
    private stop;
    private kill;
}
//# sourceMappingURL=thread.d.ts.map