import { ReactNode } from 'react';
import '../assets/css/components/dynamicField.css';
import { NestedUnionKeyof } from '../../../helpers/typeHelper';
interface IDynamicFieldProps<T extends keyof T extends any ? Record<string, any> : never> {
    fields: Array<T>;
    disabledFields?: Array<T>;
    fieldLabel: string;
    collapsibleLabel: string;
    dialogElements: Array<IDialogElements<T>>;
    emptyValues: T;
    isAddible?: boolean;
    isDeletable?: boolean;
    createItemLabel?: string;
    dialogTitle: string;
    getFieldLabel?: (item: T) => string;
    isCollabsible?: boolean;
    onChange: (fields: Array<T>) => void;
    validate?: (item: T) => string;
    maxItemLen?: number;
    disabled?: boolean;
}
export interface IDialogElements<T extends keyof T extends any ? Record<string, any> : never> {
    component: any;
    componentName: string;
    props: Record<string, any>;
    key: NestedUnionKeyof<T>;
    children?: ReactNode;
    isRendered?: (val: T) => boolean;
}
export declare const DynamicField: <T extends keyof T extends any ? {
    [key: string]: any;
} : never>({ collapsibleLabel, fields, disabledFields, fieldLabel, dialogElements, emptyValues: defaultValues, isAddible, isDeletable, isCollabsible, createItemLabel, dialogTitle, maxItemLen, disabled, onChange, validate, getFieldLabel, }: IDynamicFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DynamicField.d.ts.map