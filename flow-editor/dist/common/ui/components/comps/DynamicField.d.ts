import { FC, ReactNode } from 'react';
import '../assets/css/components/dynamicField.css';
type Builtin = string | number | boolean | bigint | symbol | null | undefined | Function | Date | RegExp;
type Leaf = Builtin | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any>;
export type DotPath<T, Seen = never> = T extends Leaf ? never : {
    [K in Extract<keyof T, string>]: NonNullable<T[K]> extends infer V ? V extends Leaf ? `${K}` : V extends ReadonlyArray<infer U> ? `${K}` | (U extends Seen ? never : `${K}.${DotPath<U, Seen | U>}`) : V extends object ? `${K}` | (V extends Seen ? never : `${K}.${DotPath<V, Seen | V>}`) : `${K}` : `${K}`;
}[Extract<keyof T, string>];
type WithIcon = {
    icon?: string;
    suffix?: string;
};
export interface IDialogElements<T extends WithIcon & Record<string, any>> {
    component: FC<any>;
    componentName: string;
    props: Record<string, any>;
    key: DotPath<T>;
    children?: ReactNode;
    isRendered?: (val: T) => boolean;
}
interface IDynamicFieldBase<T extends WithIcon & Record<string, any>> {
    fields: T[];
    disabledFields?: T[];
    fieldLabel: DotPath<T>;
    prefixLabel?: string;
    collapsibleLabel: string;
    dialogElements: Array<IDialogElements<T>>;
    isDeletable?: boolean;
    isRenameable?: boolean;
    createItemLabel?: string;
    dialogTitle: string;
    isCollapsible?: boolean;
    disabled?: boolean;
    isSortable?: boolean;
    triggerDialog?: {
        index: number;
        x?: number;
        y?: number;
    };
    dropdownOptions?: (index: number) => Array<{
        name: string;
        onClick: (e: React.MouseEvent<Element, MouseEvent>, index?: number) => void;
    }>;
    onChange: (fields: T[]) => void;
    onRename?: (oldName: string, newName: string, index: number) => void;
    validate?: (item: T) => string;
    getFieldLabel?: (item: T) => string;
    onClickItem?: (item: T, index: number) => void;
    openModelInNewTab?: (modelID: string) => void;
}
export type IDynamicFieldPropsAddible<T extends WithIcon & Record<string, any>> = IDynamicFieldBase<T> & {
    isAddible: true;
    emptyValues: T;
};
export type IDynamicFieldPropsNonAddible<T extends WithIcon & Record<string, any>> = IDynamicFieldBase<T> & {
    isAddible?: false;
    emptyValues?: T;
};
export type IDynamicFieldProps<T extends WithIcon & Record<string, any>> = IDynamicFieldPropsAddible<T> | IDynamicFieldPropsNonAddible<T>;
export declare const DynamicField: <T extends keyof T extends any ? {
    [key: string]: any;
} : never>({ collapsibleLabel, fields, disabledFields, dialogElements, emptyValues: defaultValues, isAddible, isDeletable, isCollapsible, isRenameable, createItemLabel, prefixLabel, dialogTitle, disabled: readonly, fieldLabel, isSortable, triggerDialog, dropdownOptions, onChange, onRename, validate, getFieldLabel, onClickItem, openModelInNewTab, }: IDynamicFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DynamicField.d.ts.map