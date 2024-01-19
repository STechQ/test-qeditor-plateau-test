import { ContextManager } from "../../../shrimp/context";
export declare class ValidationManager {
    private currentContext;
    private dory;
    private historyItemBasedLRManager?;
    constructor(currentContext: ContextManager);
    validate(compId: string, displayAlertBox: boolean, displayError?: boolean): true | undefined;
    validateAll(displayAlertBox: boolean, displayError?: boolean): true | undefined;
    resetValidation(compId: string): void;
    reset(compId: string): void;
    /**
     * @description This method checks if the parent component has components such as custom component, rendering component.
     * @param compColl
     * @returns boolean
     */
    private isCreatorComp;
    private isComponentValid;
    /**
     * This method returns control dictionary with subs.
     * @returns controlDict
     */
    private getControlDict;
    /**
     * @description This method returns DoryJr child components.
     * @param compId
     * @returns compCollection
     */
    private getCollectionbyParentID;
    /**
     * This method returns component colleciton by id. If it is not present in the parent, it looks subs. (Actually getComponentCollectionByIdProperty should have called but it is empty?!?!?!)
     * @param compID
     * @returns Component Collection
     */
    private getComponentCollectionbyID;
    private iterateToChild;
    private showAlertBox;
    required(message: any): (value: any) => any;
    minLength(minLength: any, message: any, options?: {
        disableNewlineOnCount?: boolean;
    }): (value: any) => any;
    maxLength(maxLength: any, message: any, options?: {
        disableNewlineOnCount?: boolean;
    }): (value: any) => any;
    email(message: any): (value: any) => any;
    iban(message: any, ibanOnly: boolean): (value: any) => any;
    regex(regexVal: any, message: any): (value: any) => any;
    tckn(message?: any): (value: any) => any;
    vkn(message?: any): (value: any) => any;
}
//# sourceMappingURL=ValidationManager.d.ts.map