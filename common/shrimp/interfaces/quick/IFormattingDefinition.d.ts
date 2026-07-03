export interface IRegionalDefinition {
    region: string;
    FormattingDefinition: IFormattingDefinition;
    length: any;
    filter: any;
    devExLocaleCDNAddress?: string;
}
export interface IFormattingDefinition {
    groupSeperator: IFormattingGroupSeperatorValue;
    radixPoint: IFormattingRadixPointValue;
    digits: IFormattingDigitValue;
    enforceDigitsOnBlur: IFormattingEnforceDigitsOnBlurValue;
    longDateFormat: IFormattingValue;
    shortDateFormat: IFormattingValue;
    longTimeFormat: IFormattingValue;
    shortTimeFormat: IFormattingValue;
    moneyFormat: IFormattingValue;
    serviceDateFormat: IFormattingValue;
    displayDateFormat: IFormattingValue;
}
export interface IFormattingValue {
    overwrite: boolean;
    value: string;
}
export interface IFormattingGroupSeperatorValue extends IFormattingValue {
}
export interface IFormattingRadixPointValue extends IFormattingValue {
}
export interface IFormattingDigitValue extends IFormattingValue {
}
export interface IFormattingEnforceDigitsOnBlurValue extends IFormattingValue {
}
//# sourceMappingURL=IFormattingDefinition.d.ts.map