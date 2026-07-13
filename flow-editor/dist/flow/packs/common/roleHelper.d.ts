import { IRoleProp } from '../flowInterfaces/editor/IStepOptions';
import { IForm } from "../../../common/everything/workflow/runtimemodels/IWorkflow";
import { IAction } from '../../../common/everything/workflow/runtimeObjects/IAction';
export declare function migrateRoles(fixItem: IAction[] | IForm[] | undefined, roles: IRoleProp[] | undefined): (IAction[] | IForm[]);
export declare function fixValidation(fixItem: IAction[] | undefined): (IAction[]);
//# sourceMappingURL=roleHelper.d.ts.map