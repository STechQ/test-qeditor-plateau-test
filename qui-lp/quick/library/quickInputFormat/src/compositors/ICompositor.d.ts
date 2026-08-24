import { Context } from "../core/context";
export interface ICompositor {
    compose(): void;
    getUnmaskedValue(): string;
}
export interface ICompositorCtor {
    new (context: Context): ICompositor;
}
//# sourceMappingURL=ICompositor.d.ts.map