import { IVariable } from "../everything/dataType/runtimemodels/IVariable";
import { Store } from "../everything/store/runtimemodels/IStoreModel";
type IVariableWithUnderscoreName = IVariable & {
    _name?: string;
};
type IVariables = Store | Record<string, IVariableWithUnderscoreName> | IVariableWithUnderscoreName;
export declare class ValidationHelper {
    static validateVariableName(name: string): string;
    static validateParameterValue(name: string): string;
    static migrateVariableModel(variables: IVariables): IVariables;
    static sanitize(value: string): {
        value: string;
        hasWarning: boolean;
    };
}
export {};
//# sourceMappingURL=validationHelper.d.ts.map