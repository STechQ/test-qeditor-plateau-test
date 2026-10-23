export declare class ComponentBindingValueHelper {
    static getTargetComponentFields({ componentType, field }: {
        componentType: string;
        field: string;
    }): string[];
    static normalizeValueForComponent(componentInstance: Record<string, any> | undefined, value: any): any;
    static normalizeValueForProps(props: Record<string, any>, value: any): any;
    static valuesEqual(left: any, right: any): boolean;
    private static normalizeMultipleValue;
    private static isMultipleEnabled;
    private static isPlainObject;
}
//# sourceMappingURL=ComponentBindingValueHelper.d.ts.map