import { IVariable, IVariableData } from "../../dataType/runtimemodels/IVariable";
import { IActionData } from "../../workflow/runtimeObjects/IAction";
export type Store = IStoreModelForService | IStoreModelForWorkflow | IStoreModelForFlow;
export type IStoreModelBase<TContext extends IStoreContextBase> = {
    context: TContext;
    input: Record<string, IVariable>;
    output: Record<string, IVariable>;
};
export type IStoreModelForService = IStoreModelBase<IStoreContextForService> & {};
export type IStoreModelForWorkflow = IStoreModelBase<IStoreContextForWorkflow> & {};
export type IStoreModelForFlow = IStoreModelBase<IStoreContextForFlow> & {
    vars?: Record<string, IVariable>;
};
export type StoreContextKeys = keyof IStoreContextForService | keyof IStoreContextForWorkflow | keyof IStoreContextForFlow;
export type IStoreContextBase = {};
export type IStoreContextForService = IStoreContextBase & {
    currentUser?: IVariable;
};
export type IStoreContextForWorkflow = IStoreContextBase & {
    processInstance?: IVariableData;
    dataInstance?: IVariableData | undefined;
    action?: IActionData;
    currentUser?: IVariable;
};
export type IStoreContextForFlow = IStoreContextBase & {};
//# sourceMappingURL=IStoreModel.d.ts.map