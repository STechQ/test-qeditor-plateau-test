export interface ITypeHelper {
    GetObjectType(param: object): string;
    isArray(param: object): boolean;
    isString(param: any): boolean;
    isNumber(param: object): boolean;
    isJsonString(param: string): boolean;
    isNull(param: object): boolean;
    isFunction(param: object): boolean;
    isObject(param: object): boolean;
    isBool(param: object): boolean;
    isDateString(param: string): boolean;
    isBlob(param: any): boolean;
    cloneObject(obj: any): any;
}
export declare class TypeHelper implements ITypeHelper {
    isJsonString(param: string): boolean;
    GetObjectType(param: object): string;
    /** @deprecated use instanceof for typescript type distinction intellisense. ex: if (variable instanceof Array)*/
    isArray(param: any): boolean;
    isString(param: any): boolean;
    isNumber(param: any): boolean;
    isNull(param?: any): boolean;
    isFunction(param: any): boolean;
    isObject(param: any): boolean;
    isBool(param: any): boolean;
    isBooleanConstructor(param: any): boolean;
    isStringConstructor(param: any): boolean;
    isArrayConstructor(param: any): boolean;
    isObjectConstructor(param: any): boolean;
    isNumberConstructor(param: any): boolean;
    isDateString(param: any): boolean;
    isDate(param: object): boolean;
    isFile(param: object): boolean;
    isBlob(param: any): boolean;
    cloneObject(obj: any): any;
}
//# sourceMappingURL=typeHelper.d.ts.map