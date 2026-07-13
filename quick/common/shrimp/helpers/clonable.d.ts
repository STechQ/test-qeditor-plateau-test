export interface IClonable extends Record<string, any> {
    CreateSelf(): IClonable;
}
export declare class Clonable {
    static DeepClone(obj: IClonable): IClonable;
}
//# sourceMappingURL=clonable.d.ts.map