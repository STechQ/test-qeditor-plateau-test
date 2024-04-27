import { IChildJson, ICompJson } from "../interfaces/ComponentInterfaces/ICompJson";
import { IComponent } from "../interfaces/ComponentInterfaces/IComponent";
import { IComponentCollection } from "../interfaces/ComponentInterfaces/IComponentCollection";
import { IDictionary } from "../interfaces/IDictionary";
export declare enum ValueTypeClasses {
    saved = "sftt-value-saved",
    updated = "sftt-value-updated",
    removed = "sftt-value-removed",
    none = "sftt-value-none"
}
export declare enum ValueStatus {
    saved = "saved",
    updated = "updated",
    removed = "removed",
    none = "none"
}
export declare enum ComparisonEnum {
    labelField = "label",
    valueField = "internalValue",
    compareValueField = "compareValue",
    compareTextValue = "compareText",
    compareTableValue = "compareTableValue",
    tooltipCompType = "Tooltip"
}
export declare type CompComparisonType = {
    labelField: ComparisonEnum.labelField | string;
    valueField: ComparisonEnum.valueField | string;
    classCompare?: boolean;
    applyClassName?: string;
};
export declare class compDiffHelper {
    static componentValueList: Record<string, CompComparisonType>;
    static comparisonComponent: string;
    /**
     * Compares component with the given old and new value.
     * Returns:
     * "saved" when there is no old value and new value is not empty,
     * "updated" when there is an old value different than the new value
     * "removed" when there is an old value and no new value     *
     * @param props Props of the component will be compared with the given list
     * @param valueList Value list of the component includes the old and new value
     */
    static valueCompare({ value, compareValue, compareDataField }: {
        value?: any;
        compareValue?: any;
        compareDataField?: boolean;
    }): ValueStatus;
    static multipleValueCompare(value: any, compareValue: any): ValueStatus;
    static getValueCompareClass({ value, compareValue, compareDataField }: {
        value?: string;
        compareValue?: string;
        compareDataField?: boolean;
    }): ValueTypeClasses;
    static decideTooltipContent({ componentInstance, toolTipValue }: {
        componentInstance: IComponent;
        toolTipValue?: string | Array<any>;
    }): string | undefined;
    static propValueListener({ compCollection, propKey, props }: {
        compCollection: IComponentCollection;
        propKey: string;
        props: IDictionary<any>;
    }): void;
    private static displayTooltip;
    private static calcComparisonClass;
    static removeValueClass(componentClass?: string): string;
    static includeNoneValueClass(componentClass?: string): boolean;
    /**
     * Compare given parameters and set the Tooltip, Chip and Label fields
     * @param compJson Reference component json
     * @param valueField Setted for the current value
     * @param compareValue Compare value
     * @param compareDataField Field that will be compared on
     * @param headerValue Whenever each column is setted, set the fields based on this param
     */
    static compareAndSetFields({ compJson, valueField, compareValue, compareDataField, headerValue }: {
        compJson: IChildJson;
        valueField: Record<string, any>;
        compareValue: Array<Record<string, any>>;
        compareDataField: string;
        headerValue: string;
    }): void;
    /**
     * Create Tooltip within the VChip component if the slot is empty
     * @param compJson Current compJson
     * @param props Check slot fields on the headers prop
     */
    static createChipComponentOnNonSlotChilds(compJson: ICompJson, props: IDictionary<any>): void;
    /**
     * Create tooltip and chip component
     * @param compJson Reference component json
     */
    static createChipComponent(compJson: ICompJson): ICompJson;
    static replaceTooltipComponent(parentComp: ICompJson, childComp: ICompJson): void;
    /**
     * Creates a new tooltip json based on referenced child comp. ChildComp parameter will be placed into the new tooltip
     * @param childComp replaced component and will be referenced by new tooltip comp
     * @returns Tooltip json: ICompJson
     */
    private static createTooltipJson;
}
//# sourceMappingURL=compDiffHelper.d.ts.map