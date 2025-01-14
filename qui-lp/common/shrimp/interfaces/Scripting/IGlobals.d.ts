import { IFormattingDefinition } from "../quick/IFormattingDefinition";
import { ElementLocation } from "../ComponentInterfaces/ElementLocation";
import { AlertType, ErrorSource, IActionButton } from "../ComponentInterfaces/IAlert";
import { IComponent } from "../ComponentInterfaces/IComponent";
import { LogType } from "../ComponentInterfaces/ILoggerIntellisense";
import { IHostResponseData } from "../IHostResponseData";
import { ILocationPosition } from "../quick/ILocationPosition";
import { IDownloadRequest, IRequest } from "../NetworkInterfaces/IRequest";
import { ICookieValue } from "../quick/ICookieAccess";
import { IEditorInstance } from "../quick/IEditorInstance";
import { INetworkResponse } from "../quick/INetworkResponse";
import { IClientInfo, PlatformType } from "../quick/IPlatform";
import { IShell } from "../quick/IShell";
import { IUrlOptions } from "../quick/IUrl";
import { IExcel, IExcelList } from "../quick/IExcel";
import { IDomElement } from "../RenderingInterfaces/IDomElement";
import { INavigationOptions, MobileAnimation } from "../quick/INavigationManager";
import { IPermanentStoreObject, Plateau_UI_PermanentStore_Name } from "../RenderingInterfaces/Operators/IPermanentStoreOperator";
import { IDecryptDataRequest, IDecryptDataResponse, IEncryptDataRequest, IEncryptDataResponse, IHashDataRequest, IHashDataResponse } from "../../helpers/cryptoHelper";
export interface IGlobals_Request {
    /**
     * Sends a network request.
     *
     * @param requestObject - Request object that contains the request url, http method, data, responseField, onSuccess, onFail, blockRender, showSuccessMessage, showErrorMessage, args, headers, withCredentials, timeout.
     *
     * @example
     * const requestObject = {
     *   url: 'https://api.example.com/data',
     *   http: 'GET',
     *   onSuccess: 'onSuccessfulResponse',
     *   onFail: 'onFailedResponse',
     *   blockRender: true,
     *   responseField: "response",
     *   timeout: 2000
     * };
     * const response = quick.Request.async(requestObject);
    */
    async(requestObject: IRequest): Promise<INetworkResponse<Record<string, any>>> | undefined;
    /**
     * Downloads files and resources through network request.
     *
     * @param requestObject - Request object that contains the request url, http method, data, responseField, onSuccess, onFail, blockRender, showSuccessMessage, showErrorMessage, args, headers, withCredentials, timeout.
     *
     * @example
     * const req: IRequest = {
     *   url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
     *   data: null,
     *   blockRender: false,
     *   http: "get",
     *   onFail: null,
     *   onSuccess: null,
     *   responseField: "respo",
     *   timeout: 2000,
     * };
     * const response = quick.Request.download(req);
    */
    download(requestObject: IDownloadRequest): void;
}
export interface IGlobals_process {
    /**
     * Gets the metadata.
     
     * @returns - The metadata.
     *
     * @example
     * const metadata = quick.process.getMetadata();
     */
    getMetadata: () => any;
    /**
     * Sets the metadata.
     *
     * @param options - Options for setting metadata.
     * @param options.Metadata - The metadata to be set.
     *
     * @example
     * quick.process.setMetadata({
     *   Metadata: { key1: 'value1', key2: 'value2' }
     * });
   */
    setMetadata: ({ Metadata }: {
        Metadata: any;
    }) => void;
    /**
     * Changes the process metadata.
     *
     * @param key - The key of the metadata to change.
     * @param onSuccess - The event name to trigger on success.
     *
     * @example
     * quick.process.changeProcessMetadata('someKey', 'onSuccessEvent');
   */
    changeProcessMetadata?: (key: string | undefined, onSuccess: string | undefined) => void;
}
export interface IGlobals_MM {
    /**
     * Retrieves the custom event from the Page Component.
     * @param eventName - Custom event name to be retrieved.
    */
    get(eventName: string): void;
    /**
     * Triggers a custom event on the Page Component.
     * @param eventName - Custom event name to be triggered.
     * @param parameters - Parameters to be passed to the custom event.
    */
    trigger(eventName: string, parameters?: Array<any>): any;
    /**
     * Triggers a custom event on the Page Component with a delay.
     * @param eventName - Custom event name to be triggered.
     * @param parameters - Parameters to be passed to the custom event.
    */
    delay(eventName: string, parameters?: {
        delayTime?: number;
        options?: Array<any>;
    }): void;
    clearTimeout(timer: any): void;
}
export interface IGlobals_Math {
    /**
     * Rounds a number down to the nearest integer.
     *
     * @param x - The number to round down.
     * @returns - The rounded-down integer.
   */
    floor: (x: number) => number;
    /**
     * Generates a random number between the specified minimum (inclusive) and maximum (exclusive) values.
     *
     * @param min - The minimum value (inclusive).
     * @param max - The maximum value (exclusive).
     * @returns - The generated random number.
   */
    random: (min: number, max: number) => number;
    /**
     * Finds the index of an object in an array based on the specified key and search string.
     *
     * @param array - The array to search.
     * @param searchKey - The key to search in the objects.
     * @param searchString - The string to search for.
     * @returns - The index of the found object, or -1 if not found.
   */
    findIndex: (array: Object[], searchKey: string, seacrhString: string) => number;
    /**
     * Rounds a number to the specified number of decimal places.
     *
     * @param roundNumber - The number to round.
     * @param indexToSplit - The number of decimal places.
     * @returns - The rounded number.
   */
    round(roundNumber: number, indexToSplit: number): number;
}
export interface IGlobals_EM {
    /**
   * Writes a message to the browser console.
   *
   * @param traceMessage - A message to be written to the console.
   * @param options - Options to be passed to specify the log type.
   *
   * @example
   *
   * quick.EM.trace('This is a trace message');
   */
    trace: (traceMessage: any, options?: {
        logType?: LogType;
    }) => void;
}
export interface IGlobals_Quick {
    /**
     * Provides methods for managing regions within the application.
     *
     * @namespace
     * @property setRegion - Sets the active region in the application.
     * @property getRegionList - Retrieves a list of available region names.
     * @property getCurrentRegion - Retrieves the name of the currently active region.
     * @property getFormattingDefinitionByCurrentRegion - Retrieves the formatting definition associated with the currently active region.
     *
     * @example
     *
     * quick.Quick.region.setRegion('us-east');
     * const availableRegions = quick.Quick.region.getRegionList();
     * const currentRegion = quick.Quick.region.getCurrentRegion();
     * const formattingDefinition = quick.Quick.region.getFormattingDefinitionByCurrentRegion();
   */
    region: {
        /**
         * Sets the current region.
         *
         * @function
         * @param {string} regionName - The name of the region to set.
         * @returns {void}
        */
        setRegion: (regionName: string) => void;
        /**
         * Retrieves the list of available regions.
         *
         * @function
         * @returns {Array<string> | undefined} An array of region names or undefined.
        */
        getRegionList: () => Array<string> | undefined;
        /**
         * Gets the name of the currently set region.
         *
         * @function
         * @returns {string | undefined} The name of the current region or undefined.
        */
        getCurrentRegion: () => string | undefined;
        /**
         * Retrieves the formatting definition based on the current region.
         *
         * @function
         * @returns {IFormattingDefinition | undefined} The formatting definition or undefined.
        */
        getFormattingDefinitionByCurrentRegion: () => IFormattingDefinition | undefined;
    };
    /**
     * Provides methods for managing themes within the application.
     * @namespace
     * @property setTheme - Sets the active theme in the application.
     * @property getThemeList - Retrieves a list of available theme names.
     * @property addTheme - Adds a new theme to the list of available themes.
     * @property removeTheme - Removes a theme from the list of available themes.
     *
     * @example
     *
     * quick.Quick.theme.setTheme('dark-theme');
     * const availableThemes = quick.Quick.theme.getThemeList();
     * quick.Quick.theme.addTheme('custom-theme');
     * quick.Quick.theme.removeTheme('obsolete-theme');
    */
    theme: {
        /**
         * Sets the current theme.
         *
         * @function
         * @param {string} themeName - The name of the theme to set.
         * @param {string} isLight - Apply light or dark version of the current theme.
         * @returns {void}
        */
        setTheme: (themeName: string, isLight?: boolean) => void;
        /**
         * Retrieves the list of available themes.
         *
         * @function
         * @returns {Array<string> | undefined} An array of theme names or undefined.
        */
        getThemeList: () => Array<string> | undefined;
        /**
         * Adds a new theme to the list of available themes.
         *
         * @function
         * @param {string} themeName - The name of the theme to add.
         * @returns {void}
        */
        addTheme: (themeName: string) => void;
        /**
         * Removes a theme from the list of available themes.
         *
         * @function
         * @param {string} themeName - The name of the theme to remove.
         * @returns {void}
        */
        removeTheme: (themeName: string) => void;
    };
    /**
     * Attempts to open a URL using the specified options for redirection.
     * @param url - The URL to redirect to.
     * @param {IUrlOptions} [options] - Optional configuration object for the redirection.
     * @param {UrlTarget} [options.target="_self"] - The target window or frame for the URL. Possible values: "_blank", "_parent", "_self", "_top".
     * @returns {void}
     *
     * @example
     * quick.Quick.redirect("https://www.google.com.tr/", { target: "_parent" });
    */
    redirect: (url: string, options?: IUrlOptions) => void;
    performance: () => any;
    back: (...args: any[]) => any;
    /**
     * Navigates between opened pages using the specified step number in the navigation history.
     *
     * To navigate back or forward in the page history, provide a positive or negative step number to
     * the method. For example, quick.Quick.goHistory(1) navigates one step back in the history.
     *
     * @param step - The step number to navigate in the page history. A positive number for forward, a negative number for backward navigation.
     * @returns {void}
    */
    goHistory: (step: number) => void;
    /**
     * Triggers navigation to the specified page with optional configuration options.
     * @param qjsonPath - The path or identifier of the page to navigate to, typically a qjson reference.
     * @param options - Optional configuration object for the navigation.
     * @param [options.newTab=false] - If true, opens the specified page in a new tab.
     * @param [options.store=false] - If true, transmits store values to the new tab (valid only if newTab is true).
     * @param [options.mobileAnimation] - The animation type to use for mobile navigation. Possible values: "push", "presentFullScreen", "fade".
     * @returns - Returns the result of the navigation operation.
     *
     * @example
     * quick.Quick.go("<<qjson:d21r0xpa-krke-m6oi-mo8m-bk7whi3b>>", { newTab: true, store: true });
    */
    go: (qjsonPath: string, options?: INavigationOptions) => any;
    goNative?: ({ code, param, transitionStyle }: {
        code: string;
        param?: Record<string, any>;
        transitionStyle?: MobileAnimation;
    }) => void;
    /**
     * Creates a deep copy of the provided object using a cloning technique.
     * Changes made to the new object will not affect the original object.
     * This method is useful for duplicating complex data structures.
     *
     * @param object - The object to be deep copied.
     * @returns - Returns a new object that is a deep copy of the original.
     *
     * @example
     * const originalObject = { key: 'value', nested: { subKey: 'subValue' } };
     * const copiedObject = quick.Quick.copy(originalObject);
     * copiedObject.nested.subKey = 'modifiedSubValue'; // Does not affect originalObject
    */
    copy(object: Object): any;
    /**
     * Sets the specifed component properties with the given values.
     * @param compId - The id of the component that the properties will be set.
     * @param propertyName - The name of the property that will be set.
     * @param propertyValue - The value of the property that will be set.
     * @returns {void}
    */
    setComponentsProperty: (compId: string, propertyName: string, propertyValue: string) => void;
    /**
     * Initiates the download of a file using a base64-encoded string and specifying the file name.
     *
     * @param options - Configuration object for the download.
     * @param {string} options.data - The base64-encoded string representing the file content.
     * @param {string} options.name - The name to be used for the downloaded file.
     * @returns - Returns true if the download process is initiated successfully; otherwise, false.
     *
     * @example
     * const fileData = 'base64-encoded-string-here';
     * const fileName = 'example-file.txt';
     * quick.Quick.download({ data: fileData, name: fileName });
    */
    download: ({ data, name }: {
        data: string;
        name: string;
    }) => boolean;
    /**
     * Check if the given input is an object.
     * @param obj - The input to be checked.
     * @returns - True if the input is object, false otherwise.
    */
    isObject: (obj: any) => boolean;
    /**
     * Collection of Quick Rule functions for input component validation.
     *
     * @property required - Validates if the input value is not empty.
     * @property minLength - Validates if the input value has a minimum length.
     * @property maxLength - Validates if the input value has a maximum length.
     * @property email - Validates if the input value is a valid email address.
     * @property iban - Validates if the input value is a valid IBAN.
     * @property regex - Validates if the input value matches a regular expression.
     * @property tckn - Validates if the input value is a valid Turkish Identification Number (TCKN).
     * @property vkn - Validates if the input value is a valid Tax Identification Number (VKN).
     *
     * @example
     * quick.Quick.validation.required('Enter a value')(inputValue);
     * quick.Quick.validation.minLength(5, 'Enter at least 5 characters')(inputValue);
     * quick.Quick.validation.maxLength(100, 'Exceeded maximum length')(inputValue);
     * quick.Quick.validation.email('Invalid email address')(inputValue);
     * quick.Quick.validation.iban('Invalid IBAN')(inputValue);
     *
     * // Custom regex validation:
     * const onlyNumbersRegex = '^[0-9\._,]*$';
     * quick.Quick.validation.regex(onlyNumbersRegex, 'Only numbers are allowed')(inputValue);
     *
     * quick.Quick.validation.tckn('Invalid TCKN')(inputValue);
     * quick.Quick.validation.vkn('Invalid VKN')(inputValue);
   */
    validation: {
        /**
         * Validates that a value is not empty.
         *
         * @function
         * @memberof validation
         * @param {any} [message] - Custom error message for validation failure.
         * @returns {(value: any) => any} - Validation function for required values.
       */
        required: (message?: any) => (value: any) => any;
        /**
         * Validates that a value has a minimum length.
         *
         * @function
         * @memberof validation
         * @param {any} minLenght - The minimum length required.
         * @param {any} [message] - Custom error message for validation failure.
         * @param {object} [options] - Additional options for validation.
         * @param {boolean} [options.disableNewlineOnCount] - Whether to disable newline counting in length.
         * @returns {(value: any) => any} - Validation function for minimum length.
        */
        minLength: (minLenght: any, message?: any, options?: {
            disableNewlineOnCount?: boolean;
        }) => (value: any) => any;
        /**
         * Validates that a value has a maximum length.
         *
         * @function
         * @memberof validation
         * @param {any} maxLenght - The maximum length allowed.
         * @param {any} [message] - Custom error message for validation failure.
         * @param {object} [options] - Additional options for validation.
         * @param {boolean} [options.disableNewlineOnCount] - Whether to disable newline counting in length.
         * @returns {(value: any) => any} - Validation function for maximum length.
        */
        maxLength: (maxLenght: any, message?: any, options?: {
            disableNewlineOnCount?: boolean;
        }) => (value: any) => any;
        /**
         * Validates that a value is a valid email address.
         *
         * @function
         * @memberof validation
         * @param {any} [message] - Custom error message for validation failure.
         * @returns {(value: any) => any} - Validation function for email addresses.
        */
        email: (message?: any) => (value: any) => any;
        /**
         * Validates that a value is a valid IBAN.
         *
         * @function
         * @memberof validation
         * @param {any} [message] - Custom error message for validation failure.
         * @returns {(value: any) => any} - Validation function for IBAN.
        */
        iban: (message?: any) => (value: any) => any;
        IBANNumOnly: (message?: any) => (value: any) => any;
        /**
         * Validates that a value matches a specified regular expression.
         *
         * @function
         * @memberof validation
         * @param {any} regexVal - The regular expression to match against.
         * @param {any} [message] - Custom error message for validation failure.
         * @returns {(value: any) => any} - Validation function for regular expressions.
        */
        regex: (regexVal: any, message?: any) => (value: any) => any;
        /**
         * Validates that a value is a valid Turkish Identification Number (TCKN).
         *
         * @function
         * @memberof validation
         * @param {any} [message] - Custom error message for validation failure.
         * @returns {(value: any) => any} - Validation function for TCKN.
        */
        tckn: (message?: any) => (value: any) => any;
        /**
         * Validates that a value is a valid Tax Identification Number (VKN).
         *
         * @function
         * @memberof validation
         * @param {any} [message] - Custom error message for validation failure.
         * @returns {(value: any) => any} - Validation function for VKN.
        */
        vkn: (message?: any) => (value: any) => any;
    };
    /**
     * Validates a component and all its child inputs.
     *
     * @param compEID - The ID of the component to validate, which may be an input or a container with inputs.
     * @param displayAlertBox - If true, calls the alert function in UI configuration (or default alert function) and shows an alert box on validation failure.
     * @param displayError - If true, displays an error message on validation failure.
     * @returns - Returns true if validation is successful; otherwise, returns undefined.
     *
     * @example
     * const validationResult = quick.Quick.validate('exampleComponent', true, true);
     * validationResult ? quick.EM.trace("Validation Success") : quick.EM.trace("Validation Failed");
   */
    validate: (compEID: string, displayAlertBox: boolean, displayError?: boolean) => true | undefined;
    /**
     * Validates all registered inputs in the page.
     *
     * @param displayAlertBox - If true, calls the alert function in UI configuration (or default alert function) and shows an alert box on validation failure.
     * @param displayError- If true, displays an error message on validation failure.
     * @returns - Returns true if all validations are successful; otherwise, returns undefined.
     *
     * @example
     * const result = quick.Quick.validateAll()
     * quick.EM.trace('isValidationSuccess: ' + result)
   */
    validateAll: (displayAlertBox: boolean, displayError?: boolean) => true | undefined;
    /**
     * Only clears validations, it has no effect on other variables.
     * @param compEID - The ID of the component to be reset.
     * @returns {void}
     *
     * @example
     * quick.Quick.resetValidation("myComponent");
    */
    resetValidation: (compEID: string) => void;
    /**
     * Ensures that the set values and validations of the components are cleared.
     * @param compEID - The ID of the component to be reset.
     * @returns {void}
     *
     * @example
     * quick.Quick.reset("myComponent");
    */
    reset: (compEID: string) => void;
    /**
     * Creates a new component based on the provided template component and inserts it into the page at a specified location.
     *
     * @param options - Configuration options for creating the new component.
     * @param options.templateCompQID - The ID of the template component used for creating the new component.
     * @param options.newCompQID - The ID to be assigned to the newly created component. Should be unique.
     * @param options.dataSource - The data source to be used in the new component, accessible with the 'data' prefix in the template.
     * @param options.place='Default'] - The location where the new component should be placed relative to the template component.
     * @param options.placeQID - The ID of the component relative to which the new component should be placed.
     * @param options.childName - The name assigned to the child component, accessible as data.newData in the template.
     * @returns - Returns the newly created component if successful; otherwise, returns undefined or null.
     *
     * @example
     * let createdComp = quick.Quick.createComponent(
     *    templateCompQID: 'EdtrComp_1',
     *    newCompQID: 'uniqueValue',
     *    dataSource: { name: 'Test Comp Name', id: [{ test: 'object' }] },
     *    place: 'Before',
     *    placeQID: 'EdtrComp_2'
     * });
     *
   */
    createComponent: ({ templateCompQID, newCompQID, dataSource, place, placeQID, childName, }: {
        templateCompQID: string;
        newCompQID: string;
        dataSource?: any;
        place?: ElementLocation;
        placeQID?: string;
        childName?: string;
    }) => IComponent | undefined | null;
    /**
     * Finds the desired dynamic component created with a template by giving a child component inside that dynamically created component.
     *
     * @param sourceComp - The instance of the child component used to search for the desired dynamic component.
     * @param targetCompID - The ID of the component template used for creating the desired dynamic component.
     * @returns - Returns the instance of the desired dynamic component if found; otherwise, returns undefined.
     *
     * @example
     * const component = quick.Quick.findCreateComponentRelative(quick.this, 'tmpCrsItemLatePayment');
   */
    findCreateComponentRelative: (sourceComp: IComponent, targetCompID: string) => IComponent | undefined;
    /**
     * Creates a child component based on the provided template child name and inserts it into the specified parent component.
     *
     * @param options - Configuration options for creating the child component.
     * @param options.parentCompQId - The Quick ID of the parent component where the child component will be inserted.
     * @param options.templateChildName - The name of the template child component used for creating the new child component.
     * @param options.newChildName - The optional new name to be assigned to the created child component.
     * @returns {void}
     *
     * @example
     * quick.Quick.createChildren({ parentCompQId: 'parentComponent', templateChildName: 'templateChildComponent', newChildName: 'newChildComponent' });
   */
    createChildren: ({ parentCompQId, templateChildName, newChildName, }: {
        parentCompQId: string;
        templateChildName: string;
        newChildName?: string;
    }) => void;
    /**
     * Deletes a component or DOM element from the page. Also deletes all child components and breaks the connection with the parent component if applicable.
     *
     * @param componentInstance - The instance of the component or DOM element to be deleted.
     *
     * @example
     * const componentInstance = quick.Quick.findCreateComponentRelative(quick.this, 'templateComponent');
     * quick.Quick.deleteComponent(componentInstance);
     *
     * // Or delete a DOM element directly:
     * const domElement = document.getElementById('exampleElement');
     * quick.Quick.deleteComponent(domElement);
   */
    deleteComponent: (componentInstance: IComponent | IDomElement) => void;
    /**
     * Establishes a two-way binding between a specified object and the provided fields, automatically updating related fields when changes occur.
     *
     * @param options - Configuration options for establishing the two-way binding.
     * @param options.bindedObject - The identifier for the object to be bound (e.g., "page", "bag", "global").
     * @param options.fields - An array of field names or an object specifying the fields to be bound.
     * @returns {void}
     *
     * @example
     * // Declare the method in the PreRender stage and store the bound object.
     * // Specify the bound fields as a string array in the second parameter.
     * quick.Quick.bind({ bindedObject: "store", fields: ["testField"] });
   */
    bind: ({ bindedObject, fields, }: {
        bindedObject: string | undefined;
        fields: Array<string> | object | undefined;
    }) => void;
    /**
     * Sets the system language to given parameter if you add it beforehand in the localization file.
     * @param LRType - The language type to set for the system.
     * @returns - Returns a Promise if the language setting is asynchronous; otherwise, returns undefined.
     *
     * @example
     * quick.Quick.setLanguage("en-US");
    */
    setLanguage: (LRType: string) => Promise<void> | undefined;
    /**
     * Retrieves the currently set system language.
     *
     * @returns - Returns the currently set system language as a string.
     *
     * @example
     * const currentLanguage = quick.Quick.getLanguage();
   */
    getLanguage: () => string;
    /**
     * Sets the title of the current page.
     *
     * @param value - The title to be set for the current page.
     * @returns {void}
     *
     * @example
     * quick.Quick.setPageTitle('New Page Title');
   */
    setPageTitle?: (value: string) => void;
    /**
     * Allows copying a specified value to the clipboard.
     * @param value - A value to be store to the clipboard
     * @returns {void}
     *
     * @example
     * quick.Quick.copyToClipboard(components.VTextField.qValue);
    */
    copyToClipboard?: (value: string) => void;
    /**
     * Retrieves the title of the current page.
     *
     * @returns - Returns the title of the current page.
     *
     * @example
     * const pageTitle = quick.Quick.getPageTitle();
   */
    getPageTitle?: () => void;
    /**
     * Retrieves the favicon of the current page.
     *
     * @returns - Returns the URL of the favicon associated with the current page.
     *
     * @example
     * const faviconUrl = quick.Quick.getFavicon();
   */
    getFavicon?: () => void;
    /**
     * Updates a component using its instance. The instance of the component must be given as a parameter.
     *
     * @param Comp - The instance of the component to be updated.
     * @returns Returns the result of updating the component.
     *
     * @example
     * const componentInstance = quick.Quick.findCreateComponentRelative(quick.this, 'templateComponent');
     * quick.Quick.updateComponent(componentInstance);
   */
    updateComponent: (Comp?: IComponent) => any;
    /**
     * Exports data to multiple sheets in an Excel file.
     *
     * @param excelFile - Configuration options for exporting to Excel.
     * @param excelFile.fileName - The name of the Excel file to be generated.
     * @param excelFile.sheetList - An array containing sheet configurations, each specifying headers, items, and an optional sheetName.
     * @param excelFile.sheetList[].headers - The headers for the sheet.
     * @param excelFile.sheetList[].items - The data items to be exported to the sheet.
     * @param [excelFile.sheetList[].sheetName] - Optional name for the sheet.
     *
     * @example
     * quick.Quick.exportToXlsx({
     *    fileName: "MyTable",
     *    sheetList: [
     *        { headers: components.VDataTable.headers, items: components.VDataTable.items, sheetName: "MySheet1" },
     *        { headers: components.VDataTable.headers, items: components.VDataTable.items, sheetName: "MySheet2" }
     *    ]
     * });
   */
    exportToXlsx: (excelFile: IExcel | IExcelList) => void;
    /**
     * Takes the raw date value and converts it to a date format with month, day, year, hour and minute.
     * @param date - The raw date value to be formatted.
     * @param formatType - The format type for displaying the date.
     * @returns  - The formatted long date string.
     *
     * @example
     * const longDate = quick.Quick.toLongDate(new Date(), 'DD.MM.YYYY HH:MM')
   */
    toLongDate: (date: Date, formatType?: string) => string;
    /**
     * Converts a raw date value to a short date format with month, day, and year.
     *
     * @param date - The raw date value to be formatted.
     * @param formatType - The format type for displaying the date.
     * @returns  - The formatted short date string.
     *
     * @example
     * const shortDate = quick.Quick.toShortDate(new Date(), 'DD.MM.YYYY');
   */
    toShortDate: (date: Date, formatType?: string) => string;
    /**
     * Converts a raw date value to a long time format with hour, minute, and second.
     *
     * @param date - The raw date value to be formatted.
     * @param formatType - The format type for displaying the time.
     * @returns - The formatted long time string.
     *
     * @example
     * const longTime = quick.Quick.toLongTime(new Date(), 'HH:MM:SS');
   */
    toLongTime: (date: Date, formatType?: string) => string;
    /**
     * Converts a raw date value to a short time format with hour and minute.
     *
     * @param date - The raw date value to be formatted.
     * @param formatType - The format type for displaying the time.
     * @returns - The formatted short time string.
     *
     * @example
     * const shortTime = quick.Quick.toShortTime(new Date(), 'HH:MM');
   */
    toShortTime: (date: Date, formatType?: string) => string;
    /**
     * Converts a string value to a Date object according to the given format type.
     *
     * @param ateString - The string value representing a date.
     * @param formatType - The format type for parsing the date. If not provided, the format from the UI Settings File parameter 'displayDateFormat' is used. Default formatType is "DDMMYYYY".
     * @returns - The Date object representing the parsed date.
     *
     * @example
     * const dayInfo = quick.Quick.toDate(components.someComponent.qValue, "YYYY-MM-DD");
     *
   */
    toDate: (dateString: string, formatType?: string) => Date;
    /**
     * Calculates the time difference between a specified time and the present moment and returns a human-readable string.
     *
     * @param dateString - The string value representing a date.
     * @param formatType - The format type for parsing the date. If not provided, the format from the UI Settings File parameter 'displayDateFormat' is used. Default formatType is "DDMMYYYY".
     * @returns - A human-readable string representing the time difference.
     *
     * @example
     * const fromNow1 = quick.Quick.dateFromNow("01032023");
   */
    dateFromNow: (dateString: string, formatType?: string) => string;
    platform: IGlobals_platform;
    /**
    * Retrieves the current geographical position of the device.
    *
    * @returns A Promise that resolves to the current location position, or undefined if the position cannot be determined.
    *
    * @example
    *
    * const location = await quick.Quick.getCurrentPosition();
   */
    getCurrentPosition: () => Promise<ILocationPosition> | undefined;
    /**
     * Converts a number or numeric string to a money-formatted string.
     *
     * @param number - The number or numeric string to be formatted.
     * @param formatType - The locale or BCP 47 language tag specifying the formatting rules.
     * @param {Intl.NumberFormatOptions} [opt] - An object with options for formatting the number.
     * @param bigDecimal - A boolean indicating whether to treat the input as a BigDecimal (true) or a regular number (false).
     * @returns - The money-formatted string.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_locales|formatTypeOptions}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_options|NumberFormatOptions}
     *
     * @example
     * const num = Number.parseFloat('49546.3900');
     * const money = quick.Quick.toMoney(num);
     * // money output: '49.546,39'
     *
     * quick.Quick.toMoney(555, 'tr-TR', { minimumFractionDigits: 2 });
     * // Output is '555,00'
     *
     * quick.Quick.toMoney('97888888888888.48', undefined, undefined, true);
     * // Output is '97,888,888,888,888.48'
   */
    toMoney: (number: Number | string, formatType?: string, opt?: Intl.NumberFormatOptions, bigDecimal?: boolean) => string;
    /**
     * Sets the class properties of a component using the specified array of class names.
     *
     * @param componentInstance - The instance of the component to set the class properties for.
     * @param classes - An array of class names to be set for the component.
     *
     * @example
     * quick.Quick.setComponentClass(components.VButton, ["testClass1", "testClass2"]);
   */
    setComponentClass: (componentInstance: IComponent, classes: Array<string>) => void;
    /**
     * Converts a formatted string to its raw decimal value.
     *
     * @param value - The formatted string to be converted.
     * @param radixPoint - The symbol used as the radix point for the decimal value. If not provided, the value from the Settings File parameter 'radixPoint' is used.
     * @returns - The raw decimal value.
     *
     * @example
     * const decimalValue1 = quick.Quick.toDecimal("123.456.789,23 TL");
     * // Settings File => radixPoint: ','
     * // decimalValue1 output: 123456789.23
   */
    toDecimal: (value: string, radixPoint?: string) => number;
    toBigNumber: (value: string) => IGlobals_Bignumber;
    dm: object;
    getEditor: () => IEditorInstance | undefined;
    /**
     * Displays an alert component with the specified configuration.
     *
     * @param options - Configuration options for the alert.
     * @param options.title - The title of the alert.
     * @param options.text - The main text content of the alert.
     * @param options.category - The category of the alert (Warning, Info, Success, Error).
     * @param options.actionButtons - An array of action buttons with names, types, and click event names.
     * @param options.error - Details about an error, if applicable.
     * @param options.error.errorMessage - The error message.
     * @param options.error.errorCode - The error code.
     * @param options.error.errorSource - The source of the error (Page, Network, Validation).
     * @param options.additionals - Additional options for customization.
     * @param options.additionals.props - Additional props to be passed to the alert component.
     * @param options.additionals.events - Additional events to be handled by the alert component.
     * @returns {void}
     *
     * @example
     * quick.Quick.alert({
     *   text: 'Are you sure you want to delete the record?',
     *   category: 'Warning',
     *   actionButtons: [
     *     { name: 'Confirm', type: 'Confirm', clickEventName: 'onConfirmTask' },
     *     { name: 'Cancel', type: 'Cancel', clickEventName: 'onCancelTask' }
     *   ],
     *   additionals: {
     *     props: { isPersistent: true },
     *     events: {}
     *   }
     * });
   */
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
    closeAlert?: () => void;
    host: {
        trigger: (functionName: string, params: Record<string, any>) => Promise<IHostResponseData> | undefined;
    };
    isEditMode: boolean;
    /**
     * Retrieves the ID of a component based on its instance.
     * @param componentInstance - The instance of the component.
     * @returns - The ID of the component, or undefined if the ID cannot be determined.
     *
     * @example
     * quick.Quick.getComponentIdByInstance(sourceComp: ComponentInstance);
    */
    getComponentIdByInstance: (componentInstance: IComponent) => string | undefined;
    /**
     * Methods for interacting with the screen, including scrolling and bringing elements into view.
     *
     * @property YOffset - Retrieves the vertical scrolling offset of the screen or element.
     * @property XOffset - Retrieves the horizontal scrolling offset of the screen or element.
     * @property intoView - Scrolls the webpage to bring a specific element into the visible area of the browser.
     * @property scrollIntoView - Scrolls the webpage to bring a specific element into the visible area of the browser.
     * @property toTop - Scrolls the document to the top of the page.
     *
     * @example
     * const yOffset = quick.Quick.screen.YOffset;
     * const xOffset = quick.Quick.screen.XOffset;
     * quick.Quick.screen.scrollIntoView(someComponent);
     * quick.Quick.screen.toTop()
   */
    screen: {
        /**
         * Returns the vertical (up or down) scrolling offset of the screen or element.
         *
         * @function
         * @memberof screen
         * @returns {number} - The vertical scrolling offset.
        */
        YOffset?: Number;
        /**
         * Returns the horizontal (left or right) scrolling offset of the screen or element.
         *
         * @function
         * @memberof screen
         * @returns {number} - The horizontal scrolling offset.
        */
        XOffset?: Number;
        /**
         * Scrolls the webpage to bring a specific element into the visible area of the browser.
         *
         * @function
         * @memberof screen
         * @param {IComponent} component - The component to scroll into view.
        */
        intoView?: (component: IComponent) => void;
        /**
         * Alias for the intoView method. Scrolls the webpage to bring a specific element into the visible area of the browser.
         *
         * @function
         * @memberof screen
         * @param {IComponent} component - The component to scroll into view.
        */
        scrollIntoView?: (component: IComponent) => void;
        /**
         * Scrolls the document to the top of the page.
         *
         * @function
         * @memberof screen
        */
        toTop?: () => void;
    };
    environment: {
        variable: unknown;
    };
    yamlLogType: any;
    /**
     * Methods for managing loading indicators, including showing and hiding the loading state.
     *
     * @property show - Displays the loading indicator.
     * @property hide - Hides the loading indicator.
     *
     * @example
     * quick.Quick.loading.show();
     * quick.Quick.loading.hide();
   */
    loading: {
        /**
         * Displays the loading indicator.
         *
         * @function
        */
        show: () => void;
        /**
         * Hides the loading indicator.
         *
         * @function
        */
        hide: () => void;
    };
    network: {
        /**
         * Determines the online/offline status of the network.
         *
         * @memberof network
         * @returns {boolean} - The online/offline status of the network.
        */
        isConnected: boolean;
    };
    render: {
        /**
         * Blocks rendering operations.
         *
         * @function
        */
        block(): void;
        /**
         * Resumes rendering operations.
         *
         * @function
        */
        resume(): void;
    };
    authentication: {
        /**
         * Retrieves IAM token.
         *
         * @function
         * @returns {Promise<string | undefined>} IAM token or undefined.
        */
        getIamToken: () => Promise<string | undefined> | undefined;
    };
    config: {
        get: (key: string) => any | undefined;
    };
}
export interface IMessage {
    message: string;
    type: string;
    time: string;
    caller: string;
}
export interface IGlobals_store {
    /**
     * Sets a value to the store.
     * @param name - Key or name under which the data will be stored within the specified store context. Could have one of the prefixes: SharedStoreContext(&), GlobalStoreContext($), BagStoreContext(#), PageStoreContext(default).
     * @param value - Actual data to be stored.
     * @returns {void}
     *
     * @example
     * quick.store.set('someData', somedata);
     * quick.store.set('#someData', somedata);
     * quick.store.set('$someData', somedata);
    */
    set: (name: string, value: any) => void;
    /**
     * Gets a value from the store.
     * @param name - Key or name under which the data will be retrieved from the specified store context. Could have one of the prefixes: SharedStoreContext(&), GlobalStoreContext($), BagStoreContext(#), PageStoreContext(default).
     * @returns - Returns the value associated with the 'name' key in the stored object.
     *
     * @example
     * quick.store.get('someData', somedata);
     * quick.store.get('#someData', somedata);
     * quick.store.get('$someData', somedata);
    */
    get: (name: any) => any;
    /**
     * Gets all values from the store.
     * @param name - Key or name under which the data will be retrieved from every store context.
     * @returns - Returns all the value associated with the 'name' key in the stored object.
    */
    getAll: (name: any) => any;
    /**
     * Deletes a value from the store.
     * @param name - Key or name under which the data will be deleted from the specified store context. Could have one of the prefixes: SharedStoreContext(&), GlobalStoreContext($), BagStoreContext(#), PageStoreContext(default).
     * @returns {void}
     *
     * @example
     * quick.store.delete('someData');
     * quick.store.delete('#someData');
     * quick.store.delete('$someData');
    */
    delete: (name: any) => void;
    /**
     * Deletes all values from the store.
     * @param name - Key or name under which the data will be deleted from every store context.
     * @returns {void}
    */
    deleteAll: (name: any) => void;
}
export interface IGlobals_permanentStore {
    /**
     * Sets a key-value pair object to the Permanent Store.
     * @param {IPermanentStoreObject} [object] - The key-value pair object which will be stored within the permanent store.
     * @param {string} object.key - Key under which the data will be stored within the permanent store.
     * @param {any} object.value - Actual data to be stored.
     * @returns {void}
     *
     * @example
     * quick.permanentStore.set({ key: 'employeeInfo', value: [{ name: 'Ahmet', age: 32 }, { name: 'Mehmet', age: 45 }] });
    */
    set: <T>(object: IPermanentStoreObject<T>) => void;
    /**
     * Gets a key-value pair object from the Permanent Store.
     * @param {string} key - Key under which the data will be retrieved from the permanent store.
     * @returns {IPermanentStoreObject} - Returns the key-value pair object associated with the 'key' in the permanent stored object.
     *
     * @example
     *  await quick.permanentStore.get("employeeInfo");
    */
    get: <T>(key: string) => Promise<IPermanentStoreObject<T> | undefined>;
    /**
    * Deletes a key-value pair object associated with the 'key' in the permanent store .
    * @param {string} key - Key under which the data will be deleted from the permanent store.
    * @returns {void}
    *
    * @example
    * quick.permanentStore.delete("employeeInfo");
   */
    delete: (key: string) => Promise<void | undefined>;
    /**
    * Gets all key-value pair objects from the permanent store.
    * @returns {IPermanentStoreObject[]}- Returns all the key-value pair object list associated in the permanent store.
    *
    * @example
    * await quick.permanentStore.getAll();
   */
    getAll: <T>() => Promise<IPermanentStoreObject<T>[] | undefined>;
    /**
     * Provide the permanent store name that application will use.
     * @param {string}storeName - Create or change using permanent store name.
     * @returns {void}
     *
     * @example
     * quick.permanentStore.createOrChangeStore("myStore");
    */
    createOrChangeStore: (storeName: string | undefined) => Promise<void>;
    /**
     * Deletes the Permanent Store.
     * @param {string}storeName - Store name will be deleted.
     * @returns {void}
     *
     * @example
     * quick.permanentStore.deleteStore("myStore");
    */
    deleteStore: (storeName: string | undefined) => Promise<void>;
    /**
     * Gets default Permanent Store name. If you don't provide the Permanent Store name that your application uses, default using store name will be 'PermanentStore'
     * @returns {string} - Default using store name is  'PermanentStore'
     *
     * @example
     * quick.permanentStore.defaultStoreName;
    */
    readonly defaultStoreName: typeof Plateau_UI_PermanentStore_Name;
    /**
    * Gets the Permanent Store name which provided by createOrChangeStore() method and currently being used.
    * @returns {string} - The name of the permanent store currently being used.
    *
    * @example
    * quick.permanentStore.currentStoreName;
   */
    readonly currentStoreName: string;
}
export interface IGlobals_cookie {
    /**
     * Sets a cookie with the provided key and cookie value.
     *
     * @param key - The key for the cookie.
     * @param cookieValue - The value to be set for the cookie.
     * @returns {void}
     *
     * @example
     * quick.cookie.set('test', { value : 'testValue', expire : '2022-11-01T20:09:39.780Z'})
   */
    set: (key: string, cookieValue: ICookieValue) => void;
    /**
     * Gets the value of the cookie associated with the provided key.
     *
     * @param key - The key of the cookie to retrieve.
     * @returns - Returns the value of the cookie or undefined if not found.
     *
     * @example
     * const myCookieValue = quick.cookie.get('myCookieKey');
   */
    get: (key: string) => string | undefined;
    /**
     * Gets all cookies as key-value pairs.
     *
     * @returns - Returns all cookies as key-value pairs.
     *
     * @example
     * const allCookies = quick.cookie.getAll();
   */
    getAll: () => Record<string, string>;
    /**
     * Deletes the cookie associated with the provided key.
     *
     * @param key - The key of the cookie to delete.
     * @returns {void}
     *
     * @example
     * quick.cookie.delete('myCookieKey');
   */
    delete: (key: string) => void;
}
export interface IGlobals_LocalStorage {
    /**
     * Sets a value in the local storage with the provided key.
     *
     * @param key - The key for the local storage.
     * @param value - The value to be set in the local storage.
     * @returns {void}
     *
     * @example
     * quick.localStorage.set('myKey', 'myValue');
   */
    set: (key: string, value: string) => void;
    /**
     * Gets the value from the local storage associated with the provided key.
     *
     * @param key - The key of the local storage to retrieve.
     * @returns - Returns the value of the local storage or null if not found.
     *
     * @example
     * const myValue = quick.localStorage.get('myKey');
   */
    get: (key: string) => string | null;
    /**
     * Clears all values from the local storage.
     *
     * @returns {void}
     *
     * @example
     * quick.localStorage.clear();
   */
    clear: () => void;
    /**
     * Deletes the value from the local storage associated with the provided key.
     *
     * @param key - The key of the local storage to delete.
     * @returns {void}
     *
     * @example
     * quick.localStorage.delete('myKey');
   */
    delete: (key: string) => void;
}
export interface IGlobals_EncryptedStorage {
    /**
     * Only uses for Mobile Apps.
     * For IOS sets a value in the ios Keychain with the provided key.
     * For Anroid sets a value in the Anroid EncryptedSharedPreferences with the provided key.
     *
     * @param key - The key for the storage.
     * @param value - The value to be set in the storage.
     * @returns {void}
     *
     * @example
     * quick.encryptedStorage.set('myKey', 'myValue');
   */
    set: (key: string, value: string) => void;
    /**
     * Only uses for Mobile Apps.
     * For IOS, gets the value from the ios Keychain associated with the provided key.
     * For Anroid, gets the value from the Anroid EncryptedSharedPreferences associated with the provided key.
     *
     * @param key - The key of the storage to retrieve.
     * @returns Returns the value of the storage or null if not found.
     *
     * @example
     * const myValue = quick.encryptedStorage.get('myKey');
   */
    get: (key: string) => string | null;
    /**
     * Only uses for Mobile Apps.
     * For IOS, clears all values from the ios Keychain.
     * For Anroid, clears all values from the Anroid EncryptedSharedPreferences.
     *
     * @returns {void}
     *
     * @example
     * quick.encryptedStorage.clear();
   */
    clear: () => void;
    /**
     * Only uses for Mobile Apps.
     * For IOS, deletes the value from the ios Keychain associated with the provided key.
     * For Anroid, deletes the value from the Anroid EncryptedSharedPreferences associated with the provided key.
     *
     * @param key - The key of the storage to delete.
     * @returns {void}
     *
     * @example
     * quick.encryptedStorage.delete('myKey');
   */
    delete: (key: string) => void;
}
export interface IGlobals_platform {
    /**
     * Returns whether the platform is a mobile platform (Android or iOS).
     *
     * @returns - True if the platform is mobile (Android or iOS), false otherwise.
     *
     * @example
     * const isMobile = quick.Quick.platform.isMobile();
   */
    isMobile: () => boolean;
    /**
     * Returns whether the platform is a web browser.
     *
     * @returns - True if the platform is a web browser, false otherwise.
     *
     * @example
     * const isWeb = quick.Quick.platform.isWeb();
   */
    isWeb: () => boolean;
    /**
     * Returns the current platform type.
     *
     * @returns - The type of the current platform ("iOS" or "Android" or "Web").
     *
     * @example
     * const platformType = quick.Quick.platform.getPlatformType();
   */
    getPlatformType: () => PlatformType;
    /**
     * Returns the device ID that runs the application. It can be used in mobile devices.
     *
     * @returns - The device ID as a string, or undefined if not available.
     *
     * @example
     * const deviceId = quick.Quick.platform.getDeviceId();
   */
    getDeviceId: () => string | undefined;
    getClientInfo: () => IClientInfo | undefined;
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
    /**
     * Initiates the single sign-on (SSO) process by starting the SSO request.
     *
     * @function
     * @memberof sso
     * @param params - Parameters for starting the SSO request.
     * @param params.clientId - The client ID provided by the authentication service provider.
     * @param params.authorizeEndpoint - The login URL endpoint for initiating the authentication process.
     * @param params.redirectUri - The URL where the authentication service provider will redirect after successful authentication.
     * @param params.scope - The scope of the SSO request, specifying the level of access being requested.
     * @returns {void}
     *
     * @example
     * quick.sso.start({ clientId, authorizeEndpoint, redirectUri, scope });
   */
    start: ({ clientId, authorizeEndpoint, redirectUri, scope, }: {
        clientId: string;
        authorizeEndpoint: string;
        redirectUri: string;
        scope: string;
    }) => void;
    /**
     * Validates the user and completes the single sign-on (SSO) process.
     *
     * @function
     * @memberof sso
     * @param params - Parameters for validating the user and completing the SSO process.
     * @param params.urlParams - Querystring parameters received after authentication (e.g., code, state).
     * @param params.tokenEndpoint - The token endpoint provided by the authentication service provider for validation.
     * @param params.type - The type of SSO validation request (e.g., 'plateau:sso:user:e').
     * @param params.onSuccess - The event or function to trigger on successful SSO validation.
     * @param params.onFail - The event or function to trigger on failed SSO validation.
     * @returns {void}
     *
     * @example
     * quick.sso.validate({ urlParams: params, tokenEndpoint: endpoint, type, onSuccess: 'onSuccess', onFail: 'onFail' });
   */
    validate: ({ urlParams, tokenEndpoint, type, onSuccess, onFail, }: {
        urlParams: Record<string, string>;
        tokenEndpoint: string;
        type: string;
        onSuccess: string;
        onFail: string;
    }) => void;
}
export interface IGlobals_currentPage {
    /**
     * Checks if the rendering process has been completed.
     *
     * @function
     * @memberof quick
     * @returns {boolean} - Returns true if the rendering process is completed; otherwise, returns false.
     *
     * @example
     * const renderCompleted = quick.currentPage.isRenderCompleted();
   */
    isRenderCompleted: () => boolean;
}
/** To replace extensions interface */
export interface IGlobals_ContainerServicesExtensions {
    [key: string]: any;
}
/** To replace extensions interface */
export interface IGlobals_ContainerServices extends IShell {
    extensions?: Record<string, any>; /** To replace extensions interface */
}
export interface IGlobals_devex {
    /**
     * Creates an array store with the provided key and data for DevExtreme.
     *
     * @function
     * @memberof quick.devex
     * @param options - The options for creating the array store.
     * @param options.key - The key for the array store.
     * @param options.data - The data to be stored in the array store.
     * @returns - Returns the created array store for DevExtreme.
     *
     * @example
     * const myArrayStore = quick.devex.createArrayStore({ key: 'myKey', data: [1, 2, 3] });
   */
    createArrayStore: ({ key, data }: {
        key?: string;
        data?: Array<any>;
    }) => any;
    /**
     * Creates a custom store with the provided loadUrl, key, and load options for DevExtreme.
     *
     * @function
     * @memberof quick.devex
     * @param options - The options for creating the custom store.
     * @param options.loadUrl - The load URL for the custom store.
     * @param options.key - The key for the custom store.
     * @param options.load - The load promise for the custom store.
     * @returns - Returns the created custom store for DevExtreme.
     *
     * @example
     * const myCustomStore = quick.devex.createCustomStore({ loadUrl: 'https://api.example.com/data', key: 'myKey' });
   */
    createCustomStore: ({ loadUrl, key, load, }: {
        loadUrl?: string;
        key?: string;
        load?: Promise<any>;
    }) => any;
    /**
     * Creates a data source with the provided store for DevExtreme.
     *
     * @function
     * @memberof quick.devex
     * @param options - The options for creating the data source.
     * @param options.store - The store for the data source.
     * @returns - Returns the created data source for DevExtreme.
     *
     * @example
     * const myDataSource = quick.devex.createDataSource({ store: myArrayStore });
   */
    createDataSource: ({ store }: {
        store?: any | Array<any>;
    }) => any;
    exportDxDataGrid: ({ options, worksheetName, fileName }: {
        options: {
            dataGridInstance: any;
            selectedRowsOnly?: boolean;
            autoFilterEnabled?: boolean;
            customizeCell?: ((options: {
                gridCell?: any;
                excelCell?: any;
            }) => void);
        };
        worksheetName?: string;
        fileName?: string;
    }) => void;
}
export interface IGlobalsBase {
    Request: IGlobals_Request;
    MM: IGlobals_MM;
    EM: IGlobals_EM;
    /**
     * Retrieves the language equivalent of the given key parameter with current language of the system.
     * @param key - The key to retrieve the equivalent localization configuration.
     * @param dataSource - Optional parameter to retrieve the localization configuration from the given data source.
     * @returns - Returns the equivalent localization configuration of the given key parameter as string.
    */
    LR: (key: string, dataSource?: object | null) => string | null | undefined;
    /**
     * Imports localization data for a specific language and adds it to Global Localization.
     *
     * @param langCode - Language code (e.g., "en-US").
     * @param localization - Key-value pairs of localization information.
     * @param {Object} [options] - Optional configuration object.
     * @param {boolean} [options.overwrite=false] - If true, overwrites existing values; if false, ignores existing keys.
     * @returns {void}
    */
    importLocalization: (langCode: string, localization: Record<string, string>, options?: {
        overrite?: boolean;
    }) => void;
    /**
     * Triggers the go command in the shell with integrated WebSDK, routing to another page with the provided parameters.
     *
     * @param args - Variable number of arguments representing the parameters for the go command.
     * @returns - Returns the result of the go command.
     *
     * @example
     * quick.go("<<qjson:d21r0xpa-krke-m6oi-mo8m-bk7whi3b>>");
     * quick.go(pageTitle, "<<qjson:d21r0xpa-krke-m6oi-mo8m-bk7whi3b>>", pageParams);
     * quick.go('customer', 'RenderSecondPage');
    */
    go: (...args: any[]) => any;
    /**
     * Retrieves the component instance by the given component id.
     * @param compID - The ID of the component to be retrieved.
     * @returns - The component instance if found, otherwise null or undefined.
    */
    getComponent(compID: string): IComponent | null | undefined;
    setFormData(compCol: object): void;
    getArrangedNestedData(obj: object, pairChar: string): {};
    getFormData(componentQID?: string): {};
    setDisable(component: IComponent, value: boolean): void;
    getArrangedFormData(formData: object, pairChar: string): {};
    Quick: IGlobals_Quick;
    containerServices?: IGlobals_ContainerServices;
    sso: IGlobals_sso;
    store: IGlobals_store;
    permanentStore: IGlobals_permanentStore;
    cookie: IGlobals_cookie;
    localStorage: IGlobals_LocalStorage;
    encryptedStorage: IGlobals_EncryptedStorage;
    Url: IGlobals_Url;
    findControl: () => void;
    this: IComponent | null | undefined;
    parent: IGlobals_parent;
    process?: IGlobals_process;
    /**
     * Returns a value from the current event (stops execution and returns).
     * @param retVal - The value to return.
     * @returns {retVal}
    */
    return: (retVal: any) => void;
    await: (retVal: any) => void;
    currentPage: IGlobals_currentPage;
    cryptography: IGlobals_cryptography;
    encoding: IGlobals_Encoding;
    integrations: IScripts;
    webScripts: {};
    workflowStore?: IWorkflowStore;
    workflow?: IGlobals_Workflow; /** !!! DON'T CHANGE */
}
export interface IGlobals_Workflow {
    RunFunction: ({ flowId, input, dataInstance }: {
        flowId: string;
        input?: Record<string, any>;
        dataInstance?: Record<string, any>;
    }) => Promise<{
        output: Record<string, any>;
    }>;
    Commit: () => void;
}
export interface IWorkflowStore {
    context: {
        dataInstance: any;
        processInstance: any;
    };
    formContext: {
        task: any;
        form: any;
        swimlanes: Record<string, string>;
    };
}
export interface IScripts {
    Dataroid: IDataroid;
}
export interface IDataroid {
    track(eventName: string, params?: Record<string, any>): void;
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
    /**
    * Hashing transforms specific data into a hash value using a chosen hashing algorithm.
    *
    * @param {IHashDataRequest} data - The hash data request
    * @param {string} data.data - The data to be hashed
    * @param {HashAlgorithm} data.algorithm  - The hashing algorithm to use. HashAlgorithm { SHA1, SHA256, SHA384, SHA512 }
    * @returns {IHashDataResponse} Returns the hashedData.
    *
    * @example
    * let hashResponse = await quick.cryptography.hash(hashRequest);
  */
    hash(data: IHashDataRequest): Promise<IHashDataResponse | undefined>;
    /**
    * Encrypts a specific data using the specified encryption algorithm.
    *
    * @param {IEncryptDataRequest} data - The Encrypt data request
    * @param {string} data.data - The data to be encrypted
    * @param {string} data.key  - The encryption key
    * @param {EncryptionAlgorithm} data.algorithm  - Specifies which encryption algorithm to use.EncryptionAlgorithm { RSAOAEP, AESCTR, AESCBC, AESGCM }
    * @returns {IEncryptDataResponse } Returns the encryptedData.
    *
    * @example
    * let responseEncrypt = await quick.cryptography.encrypt(requestEncrypt);
  */
    encrypt(data: IEncryptDataRequest): Promise<IEncryptDataResponse | undefined>;
    /**
    * Decryption is the process of converting encrypted data back to its original, readable form.
    *
    * @param {IDecryptDataRequest } data - The Decrypt data request
    * @param {string} data.encryptedData - The encrypted data
    * @param {string} data.iv - The initialization vector used during encryption. ( If algorithm is "RSAOAEP", then iv is not used, otherwise it is required. )
    * @param {string} data.key - The encryption key
    * @param {EncryptionAlgorithm} data.algorithm  - Specifies which encryption algorithm to use. EncryptionAlgorithm { RSAOAEP, AESCTR, AESCBC, AESGCM }
    * @returns {IDecryptDataResponse  } Returns the encryptedData.
    *
    * @example
    * let responseDecrypt = await quick.cryptography.decrypt(requestDecrypt);
  */
    decrypt(data: IDecryptDataRequest): Promise<IDecryptDataResponse | undefined>;
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
    /**
     * Transforms binary data into a text format to facilitate storage or transmission.
     * @param encodedString - The encoded string to be decoded.
     * @returns {string}
     *
     * @example
     * quick.encoding.atob(encodedString);
     */
    atob: (encodedString: string) => string;
    /**
     * Transforms Base64-encoded data back into its original binary form.
     * @param stringToEncode - The string to be converted to binary form.
     * @returns  {string}
     *
     * @example
     * quick.encoding.btoa(stringToEncode);
    */
    btoa: (stringToEncode: string) => string;
}
//# sourceMappingURL=IGlobals.d.ts.map