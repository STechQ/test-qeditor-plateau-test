import { ICustomerContext, IUserContext } from "./IUserContext";
export interface IShell {
    isAuthenticated?: () => boolean;
    getResource?: (resource: string) => any;
    callMessageBox?: (messageType: string, messages: string, title: string) => any;
    getUserContext?: () => IUserContext;
    setUserContext?: (user: IUserContext) => void;
    getCustomerContext?: () => ICustomerContext;
    customerContext?: () => any;
    getStoreData?: (storeValue: string) => any;
    setCustomerContext?: (customer: ICustomerContext) => void;
    getContainerName?: () => any;
    logout?: () => any;
    print?: (data: any) => any;
    scan?: (data: any) => any;
    ocr?: (data: any) => any;
    biometric?: (data: any) => any;
    extensions?: Record<string, ((data: any) => any) | Record<string, any>>;
}
//# sourceMappingURL=IShell.d.ts.map