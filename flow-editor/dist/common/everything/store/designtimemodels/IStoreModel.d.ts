import { IVariable } from "../../dataType/runtimemodels/IVariable";
import { IStoreModelForService as IStoreModelForServiceRuntime, IStoreContextForService as IStoreContextForServiceRuntime, IStoreModelForWorkflow as IStoreModelForWorkflowRuntime, IStoreContextForWorkflow as IStoreContextForWorkflowRuntime, IStoreModelForFlow as IStoreModelForFlowRuntime, IStoreContextForFlow as IStoreContextForFlowRuntime, IStoreModelDBEntity as IStoreModelDBEntityForFlowRuntime } from "../runtimemodels/IStoreModel";
export type Store = IStoreModelForService | IStoreModelForWorkflow | IStoreModelForFlow | IStoreModelDBEntity;
type IStoreModelPropsAddition = {
    props: IStoreProps;
};
export type IStoreModelForFlow = IStoreModelForFlowRuntime & IStoreModelPropsAddition & {};
export type IStoreModelForWorkflowInlineFlow = IStoreModelForFlow & {};
export type IStoreModelForWorkflow = IStoreModelForWorkflowRuntime & IStoreModelPropsAddition & {};
export type IStoreModelForService = IStoreModelForServiceRuntime & IStoreModelPropsAddition & {};
export type IStoreModelDBEntity = IStoreModelDBEntityForFlowRuntime & IStoreModelPropsAddition & {};
export type IStoreContextForService = IStoreContextForServiceRuntime & {};
export type IStoreContextForWorkflow = IStoreContextForWorkflowRuntime & {};
export type IStoreContextForFlow = IStoreContextForFlowRuntime & {};
export type IStoreProps = {
    insert: Array<string>;
};
export interface INestedStore {
    [key: string]: IVariable | INestedStore;
}
export {};
//# sourceMappingURL=IStoreModel.d.ts.map