import Vue from "vue";
import { CountryCode } from 'libphonenumber-js';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    defaultMask: string;
    isValid: boolean;
    countryAlpha2Code: CountryCode | undefined;
    allCountries: ({
        name: string;
        international_name: string;
        turkish_name: string;
        code: string;
        dial_code: string;
    } | {
        name: string;
        international_name: string;
        code: string;
        dial_code: string;
        turkish_name?: undefined;
    })[];
    turkishNameCountries: {
        name: string;
        international_name: string;
        code: string;
        dial_code: string;
    }[];
    phoneNumber: string | undefined;
    phoneData: {
        countryPhoneNumber: string;
        phoneNumber: string;
        maskedPhoneNumber: string | undefined;
        mask: string;
        isValid: boolean;
        countryAlpha2Code: CountryCode | undefined;
        countryDialCode: string | null | undefined;
    };
    rules: {
        required: (value: any) => true | "Zorunlu alanı doldurunuz .";
        valid: (value: any) => true | "Lütfen geçerli bir telefon numarası giriniz .";
    };
    uniqueID: string;
    calculatedMaxLength: string | null;
}, {
    setMaxLength(countryCode: CountryCode | undefined): void;
    changePhone(): void;
    changeCountryCode(): void;
    inputPhone(): void;
    itemText: (item: any) => string;
    getCountryDialCode(countryAlpha2Code: any): string | null;
    phoneNumberInput(): void;
    reset(): void;
    validate(checkValid: any): boolean;
}, {
    getPhoneMask: string;
}, {
    countryCodeAppendIcon: string;
    phoneAppendIcon: string;
    fullPhoneNumber: any;
    autoCompleteDisabled: any;
    dense: any;
    textFieldDisabled: any;
    required: any;
    outlined: any;
    label: any;
    locale: string;
    _renderingProps: any;
}>;
export default _default;
//# sourceMappingURL=QPhoneInput.vue.d.ts.map