import { CustomError } from "../../../runtime/infrastructure/customError";
import { CollectionName } from "../../../runtime/infrastructure/mongo/IDataStoreManager";
import { IWorkflowExecutionContextStore } from "./IWorkflowExecutionContextStore";
export declare const wfConstants: {
    messages: {
        startWasNotOnUs: (processId: string) => string;
        wfeWasNotOnUs: ({ prefix, suffix }: {
            prefix?: string | undefined;
            suffix?: string | undefined;
        }) => string;
        workflowEngineWasOnUs: ({ prefix, suffix }: {
            prefix?: string | undefined;
            suffix?: string | undefined;
        }) => string;
    };
    errors: {
        di404: (piid: string, isHistory: boolean) => CustomError;
        taskId404: (taskId: string) => CustomError;
        piid404: (piid: string) => CustomError;
        ctxErr: (field: keyof IWorkflowExecutionContextStore) => Error;
        ctxOnUsErr: (field: keyof NonNullable<IWorkflowExecutionContextStore["wfEngineOnUs"]>) => Error;
    };
    wfeStepNames: {
        humanTask: "humantask";
    };
    calculations: {
        collectionName: (processId: string, collectionName: CollectionName) => CollectionName;
        isSystemStep: (stepName: string) => boolean;
    };
};
//# sourceMappingURL=wfConstants.d.ts.map