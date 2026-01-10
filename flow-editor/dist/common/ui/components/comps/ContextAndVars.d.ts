import { FC } from "react";
import { Store } from "../../../everything/store/designtimemodels/IStoreModel";
interface IContextAndVarsProps {
    dataTypes: Array<{
        ID: string;
        name: string;
        tooltip?: string;
    }>;
    dataSets: Array<{
        ID: string;
        name: string;
        tooltip?: string;
    }>;
    workflowDataInstances?: Array<{
        ID: string;
        name: string;
    }>;
    store: Store;
    schema: Store;
    readonly?: boolean;
    onChange: (store: Store) => void;
    openModelInNewTab?: (modelID: string) => void;
}
export declare const ContextAndVars: FC<IContextAndVarsProps>;
export {};
//# sourceMappingURL=ContextAndVars.d.ts.map