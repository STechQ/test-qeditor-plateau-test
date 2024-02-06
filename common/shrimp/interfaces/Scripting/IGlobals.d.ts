import { IFormattingDefinition } from "../quick/IFormattingDefinition";
import { ElementLocation } from "../ComponentInterfaces/ElementLocation";
import { AlertType, ErrorSource, IActionButton } from "../ComponentInterfaces/IAlert";
import { IComponent } from "../ComponentInterfaces/IComponent";
import { LogType } from "../ComponentInterfaces/ILogger";
import { IHostResponseData } from "../IHostResponseData";
import { ILocationPosition } from "../quick/ILocationPosition";
import { IDownloadRequest, IRequest } from "../NetworkInterfaces/IRequest";
import { ICookieValue } from "../quick/ICookieAccess";
import { IEditorInstance } from "../quick/IEditorInstance";
import { INetworkResponse } from "../quick/INetworkResponse";
import { PlatformType } from "../quick/IPlatform";
import { IShell } from "../quick/IShell";
import { IUrlOptions } from "../quick/IUrl";
import { IExcel, IExcelList } from "../quick/IExcel";
import { IDomElement } from "../RenderingInterfaces/IDomElement";
import { IPermanentStoreObject, Plateau_UI_PermanantDB_Name } from "../RenderingInterfaces/Operators/IIndexedDbOperator";
export interface IGlobals_Request {
    async(requestObject: IRequest): Promise<INetworkResponse<Record<string, any>>> | undefined;
    download(requestObject: IDownloadRequest): void;
}
export interface IGlobals_process {
    getMetadata: () => any;
    setMetadata: ({ Metadata }: {
        Metadata: any;
    }) => void;
    changeProcessMetadata?: (key: string | undefined, onSuccess: string | undefined) => void;
}
export interface IGlobals_MM {
    get(eventName: string): void;
    trigger(eventName: string, parameters?: Array<any>): any;
    delay(eventName: string, parameters?: {
        delayTime?: number;
        options?: Array<any>;
    }): void;
    clearTimeout(timer: any): void;
}
export interface IGlobals_Math {
    floor: (x: number) => number;
    random: (min: number, max: number) => number;
    findIndex: (array: Object[], searchKey: string, seacrhString: string) => number;
    round(roundNumber: number, indexToSplit: number): number;
}
export interface IGlobals_EM {
    trace: (traceMessage: any, options?: {
        logType?: LogType;
    }) => void;
}
export interface IGlobals_Quick {
    region: {
        setRegion: (regionName: string) => void;
        getRegionList: () => Array<string> | undefined;
        getCurrentRegion: () => string | undefined;
        getFormattingDefinitionByCurrentRegion: () => IFormattingDefinition | undefined;
    };
    theme: {
        setTheme: (themeName: string) => void;
        getThemeList: () => Array<string> | undefined;
        addTheme: (themeName: string) => void;
        removeTheme: (themeName: string) => void;
    };
    redirect: (url: string, options?: IUrlOptions) => void;
    performance: () => any;
    back: (...args: any[]) => any;
    goHistory: (step: number) => void;
    go: (qjsonPath: string, options?: {
        newTab?: boolean;
        store?: boolean;
    }) => any;
    goNative?: ({ code, param }: {
        code: string;
        param?: Record<string, any>;
    }) => void;
    copy(object: Object): any;
    setComponentsProperty: (compId: string, propertyName: string, propertyValue: string) => void;
    download: ({ data, name }: {
        data: string;
        name: string;
    }) => boolean;
    isObject: (obj: any) => boolean;
    validation: {
        required: (message?: any) => (value: any) => any;
        minLength: (minLenght: any, message?: any, options?: {
            disableNewlineOnCount?: boolean;
        }) => (value: any) => any;
        maxLength: (maxLenght: any, message?: any, options?: {
            disableNewlineOnCount?: boolean;
        }) => (value: any) => any;
        email: (message?: any) => (value: any) => any;
        iban: (message?: any) => (value: any) => any;
        IBANNumOnly: (message?: any) => (value: any) => any;
        regex: (regexVal: any, message?: any) => (value: any) => any;
        tckn: (message?: any) => (value: any) => any;
        vkn: (message?: any) => (value: any) => any;
    };
    validate: (compEID: string, displayAlertBox: boolean, displayError?: boolean) => true | undefined;
    validateAll: (displayAlertBox: boolean, displayError?: boolean) => true | undefined;
    resetValidation: (compEID: string) => void;
    reset: (compEID: string) => void;
    createComponent: ({ templateCompQID, newCompQID, dataSource, place, placeQID, childName, }: {
        templateCompQID: string;
        newCompQID: string;
        dataSource?: any;
        place?: ElementLocation;
        placeQID?: string;
        childName?: string;
    }) => IComponent | undefined | null;
    findCreateComponentRelative: (sourceComp: IComponent, targetCompID: string) => IComponent | undefined;
    createChildren: ({ parentCompQId, templateChildName, newChildName, }: {
        parentCompQId: string;
        templateChildName: string;
        newChildName?: string;
    }) => void;
    deleteComponent: (componentInstance: IComponent | IDomElement) => void;
    bind: ({ bindedObject, fields, }: {
        bindedObject: string | undefined;
        fields: Array<string> | object | undefined;
    }) => void;
    setLanguage: (LRType: string) => Promise<void> | undefined;
    getLanguage: () => string;
    setPageTitle?: (value: string) => void;
    copyToClipboard?: (value: string) => void;
    getPageTitle?: () => void;
    getFavicon?: () => void;
    updateComponent: (Comp?: IComponent) => any;
    exportToXlsx: (excelFile: IExcel | IExcelList) => void;
    toLongDate: (date: Date, formatType?: string) => string;
    toShortDate: (date: Date, formatType?: string) => string;
    toLongTime: (date: Date, formatType?: string) => string;
    toShortTime: (date: Date, formatType?: string) => string;
    toDate: (dateString: string, formatType?: string) => Date;
    dateFromNow: (dateString: string, formatType?: string) => string;
    platform: IGlobals_platform;
    getCurrentPosition: () => Promise<ILocationPosition> | undefined;
    toMoney: (number: Number | string, formatType?: string, opt?: Intl.NumberFormatOptions, bigDecimal?: boolean) => string;
    setComponentClass: (componentInstance: IComponent, classes: Array<string>) => void;
    toDecimal: (value: string, radixPoint?: string) => number;
    toBigNumber: (value: string) => IGlobals_Bignumber;
    dm: object;
    getEditor: () => IEditorInstance | undefined;
    alert?: (options: {
        title?: string | undefined;
        text?: string | undefined;
        category?: keyof typeof AlertType | undefined;
        actionButtons?: IActionButton[] | undefined;
        error?: {
            errorMessage?: string | undefined;
            errorCode?: string | undefined;
            errorSource?: keyof typeof ErrorSource | undefined;
        } | undefined;
        additionals?: {
            props?: any;
            events?: any;
        } | undefined;
    }) => void;
    host: {
        trigger: (functionName: string, params: Record<string, any>) => Promise<IHostResponseData> | undefined;
    };
    isEditMode: boolean;
    getComponentIdByInstance: (componentInstance: IComponent) => string | undefined;
    screen: {
        YOffset?: Number;
        XOffset?: Number;
        intoView?: (component: IComponent) => void;
        scrollIntoView?: (component: IComponent) => void;
        toTop?: () => void;
    };
    environment: {
        variable: unknown;
    };
    yamlLogType: any;
    loading: {
        show: () => void;
        hide: () => void;
    };
    network: {
        isConnected: boolean;
    };
    render: {
        block(): void;
        resume(): void;
    };
    authentication: {
        getIamToken: () => Promise<string | undefined> | undefined;
    };
}
export interface IGlobals_store {
    set: (name: string, value: any) => void;
    get: (name: any) => any;
    getAll: (name: any) => any;
    delete: (name: any) => void;
    deleteAll: (name: any) => void;
}
export interface IGlobals_permanentStore {
    set: <T>(object: IPermanentStoreObject<T>) => void;
    get: <T>(key: string) => Promise<IPermanentStoreObject<T> | undefined>;
    delete: (key: string) => Promise<void | undefined>;
    getAll: <T>() => Promise<IPermanentStoreObject<T>[] | undefined>;
    changeDb: (dbName: string | undefined) => Promise<void>;
    deleteDb: (dbName: string | undefined) => Promise<void>;
    originalDbName: typeof Plateau_UI_PermanantDB_Name;
    getCurrentDbName: () => string;
}
export interface IGlobals_cookie {
    set: (key: string, cookieValue: ICookieValue) => void;
    get: (key: string) => string | undefined;
    getAll: () => Record<string, string>;
    delete: (key: string) => void;
}
export interface IGlobals_LocalStorage {
    set: (key: string, value: string) => void;
    get: (key: string) => string | null;
    clear: () => void;
    delete: (key: string) => void;
}
export interface IGlobals_platform {
    isMobile: () => boolean;
    isWeb: () => boolean;
    getPlatformType: () => PlatformType;
    getDeviceId: () => string | undefined;
}
export interface IGlobals_Date {
    parse: (value: string | number, month: number | null) => Date;
    now: () => Date;
    time: () => number;
    compare: (first: string | Date, second: string | Date) => boolean | "Equal";
    getTimezoneOffset: (date: Date) => number;
    ISOString: () => string;
    differenceInDays(first: Date, second: Date): number;
    differenceInMonths(first: Date, second: Date): number;
}
export interface IGlobals_Number {
    parse: (value: string) => number;
    parseFloat: (value: string) => number;
    mod: (firstValue: number, secondValue: number) => number;
}
export interface IGlobals_Json {
    parse: (jsonString: string) => any;
}
export interface IGlobals_parent {
    /**
     * Properties defined in Messaging P: ExternalProps
     */
    props: Record<string, any> | undefined;
    /**
     * Events defined in Messaging P: ExternalEvents
     */
    events: Record<string, Function> | undefined;
}
export interface IGlobals_string {
    space: string;
    replace: (string: string, searchValue: string, replaceValue: string) => string;
}
export interface IGlobals_Url {
    resolve: ({ url }: {
        url: string;
    }) => string;
    getDeepLinkParams?: () => Record<string, string | undefined>;
    getUrl?: () => string | undefined;
}
export interface IGlobals_js {
    Object: ObjectConstructor;
    String: StringConstructor;
    Math: Math;
    Date: DateConstructor;
    Number: NumberConstructor;
}
export interface IGlobals_sso {
    start: ({ clientId, authorizeEndpoint, redirectUri, scope, }: {
        clientId: string;
        authorizeEndpoint: string;
        redirectUri: string;
        scope: string;
    }) => void;
    validate: ({ urlParams, tokenEndpoint, type, onSuccess, onFail, }: {
        urlParams: Record<string, string>;
        tokenEndpoint: string;
        type: string;
        onSuccess: string;
        onFail: string;
    }) => void;
}
export interface IGlobals_currentPage {
    isRenderCompleted: () => boolean;
}
export interface IGlobals_ContainerServices extends IShell {
    extensions?: Record<string, any>;
}
export interface IGlobals_devex {
    createArrayStore: ({ key, data }: {
        key?: string;
        data?: Array<any>;
    }) => any;
    createCustomStore: ({ loadUrl, key, load, }: {
        loadUrl?: string;
        key?: string;
        load?: Promise<any>;
    }) => any;
    createDataSource: ({ store }: {
        store?: any | Array<any>;
    }) => any;
}
export interface IGlobalsBase {
    Request: IGlobals_Request;
    MM: IGlobals_MM;
    EM: IGlobals_EM;
    LR: (key: string, dataSource?: object | null) => string | null | undefined;
    importLocalization: (langCode: string, localization: Record<string, string>, options?: {
        overrite?: boolean;
    }) => void;
    go: (...args: any[]) => any;
    getComponent(compID: string): IComponent | null | undefined;
    setFormData(compCol: object): void;
    getArrangedNestedData(obj: object, pairChar: string): {};
    getFormData(componentQID?: string): {};
    getArrangedFormData(formData: object, pairChar: string): {};
    Quick: IGlobals_Quick;
    containerServices?: IGlobals_ContainerServices;
    sso: IGlobals_sso;
    store: IGlobals_store;
    permanentStore: IGlobals_permanentStore;
    cookie: IGlobals_cookie;
    localStorage: IGlobals_LocalStorage;
    Url: IGlobals_Url;
    findControl: () => void;
    this: IComponent | null | undefined;
    parent: IGlobals_parent;
    process?: IGlobals_process;
    return: (retVal: any) => void;
    await: (retVal: any) => void;
    currentPage: IGlobals_currentPage;
    cryptography: IGlobals_cryptography;
    encoding: IGlobals_Encoding;
}
export interface IGlobalsTS extends IGlobalsBase {
    devex?: IGlobals_devex;
}
export interface IGlobalsQS extends IGlobalsBase {
    Math: IGlobals_Math;
    regex: (value: string) => RegExp;
    typeOf: (value: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    Date: IGlobals_Date;
    Number: IGlobals_Number;
    JSON: IGlobals_Json;
    string: IGlobals_string;
    Object: Object;
    js: IGlobals_js;
    Url: IGlobals_Url;
}
export interface IGlobals_cryptography {
    generateKeyPair: () => Record<string, string> | undefined;
    store(keyPair: Record<string, string>): void;
    hash: {
        sha512(value: string): string | undefined;
    };
    sign(value: string, privateKey: string, options?: {
        digestAlgorithm: string | "sha512";
        padding: string | "pkcs15";
    }): string | undefined;
}
export interface IGlobals_Bignumber {
    absoluteValue?: () => IGlobals_Bignumber;
    minus?: (n: string, base?: number) => IGlobals_Bignumber;
    times?: (n: string, base?: number) => IGlobals_Bignumber;
    plus?: (n: string, base?: number) => IGlobals_Bignumber;
    div?: (n: string, base?: number) => IGlobals_Bignumber;
    toString?: (base?: number) => string;
    toFixed?: () => string;
}
export interface IGlobals_Encoding {
    atob: (encodedString: string) => string;
    btoa: (stringToEncode: string) => string;
}
//# sourceMappingURL=IGlobals.d.ts.map