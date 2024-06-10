// ! Fold All folds all regions Ctrl + (K + 0(zero))
// ! Unfold All folds all regions Ctrl + (K + J)
// -----------------------------------------
//    PDS COMPONENTLIST.JS CODE VERSION: 3.1   
// -----------------------------------------

//#region JS Section
var componentOptions = {
    QReCaptcha: {
        siteKey: {
            type: String
        },
        size: {
            type: String,
            options: ["'compact'", "'normal'", "'invisible'"],
            editorDefaultValue: "'normal'"
        },
        tabindex: {
            type: Number
        }
    },
    QOtp: {
        qValue: {
            type: "Array<any>"
        },
        customClass: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        length: {
            editorDefaultValue: "4",
            type: Number
        },
        type: {
            type: String,
            options: ["'number'", "'text'", "'password'"],
            editorDefaultValue: "'text'"
        },
        preventPaste: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        width: {
            type: String,
            editorDefaultValue: "'147px'"
        },
        height: {
            type: String,
            editorDefaultValue: "'56px'"
        },
        readonly: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorMessage: {
            type: String
        }
    },
    VAlert: {
        qValue: {
            type: Boolean
        },
        border: {
            type: String,
            options: ["'top'", "'left'"],
            editorDefaultValue: "'top'"
        },
        class: {
            type: String
        },
        color: {
            editorDefaultValue: "'warning'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        closeIcon: {
            type: String,
            editorDefaultValue: "'mdi-close-circle'"
        },
        closeLabel: {
            type: String
        },
        coloredBorder: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        dark: {
            type: Boolean
        },
        dismissible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        elevation: {
            type: String,
            editorDefaultValue: "4",
            options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
        },
        icon: {
            type: String,
            editorDefaultValue: "'mdi-check-circle'",
            options: ["'mdi-alert-circle'", "'mdi-alert'", "'mdi-check-circle'", "'mdi-information'", "'mdi-help-circle'", "'mdi-close-circle'"]
        },

        mode: {
            type: String
        },
        origin: {
            type: String
        },
        prominent: {
            type: Boolean
        },
        tag: {
            type: String
        },
        tile: {
            type: Boolean
        },
        text: {
            type: Boolean
        },
        transition: {
            type: String
        },
        type: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        }
    },
    VAppBar: {
        absolute: {
            type: Boolean
        },
        app: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        class: {
            type: String
        },
        clippedLeft: {
            type: Boolean
        },
        clippedRight: {
            type: Boolean
        },
        collapse: {
            type: Boolean
        },
        color: {
            type: String
        },
        dark: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        elevation: {
            type: Number | String
        },
        extended: {
            type: Boolean
        },
        fadeImgOnScroll: {
            type: Boolean,
        },
        fixed: {
            type: Boolean,
            editorDefaultValue: "true"
            },
        flat: {
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        prominent: {
            type: Boolean
        },
        rounded: {
            type: Boolean | String
        },
        src: {
            type: Object | String
        },
        maxWidth: {
            type: "number | string"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VAutocomplete: {
        appendIcon: {
            type: String
        },
        appendOuterIcon: {
            type: String
        },
        qValue: {
            type: "any"
        },
        attach: {
            type: Boolean
        },
        autofocus: {
            type: Boolean
        },
        avoidClearableTabIndex: {
            type: Boolean
        },
        backgroundColor: {
            type: String
        },
        autoSelectFirst: {
            type: Boolean
        },
        class: {
            type: String
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        compareValue: {
            type: "any"
        },
        compareText: {
            type: String
        },
        compareTableValue: {
            type: String
        },
        counter: {
            type: "boolean | string | number"
        },
        counterValue: {
            type: Function
        },
        dark: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        deletableChips: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        format: {
            type: String,
            options: ["'regex'"]
        },
        formatValues: {
            type: "Array<any>"
        },
        flat: {
            type: Boolean
        },
        height: {
            type: "number | string"
        },
        hideDetails: {
            type: "string | boolean",
            editorDefaultValue: "false"
        },
        hideNoData: {
            type: Boolean
        },
        hideSelected: {
            type: Boolean
        },
        itemDisabled: {
            type: "string | Array<any> | Function"
        },
        internalSearch: {
            type: "string"
        },
        items: {
            type: "Array<any>",
            editorDefaultValue: `[{text = 'test1', value = 1},
{ text = 'test2', value = 2}]`
        },
        itemText: {
            type: "string | Array<any> | Function",
            editorDefaultValue: "'text'"
            },
        itemValue: {
            type: "string | Array<any> | Function",
            editorDefaultValue: "'value'"
            },
        label: {
            type: String
        },
        loading: {
            type: "boolean | string"
        },
        maxlength: {
            type: "number | string",
            propType: "attr"
        },
        menuProps: {
            type: "{closeOnClick: boolean, closeOnContentClick: boolean, disableKeys: boolean, openOnClick: boolean, maxHeight: number, offsetY: boolean, offsetOverflow: boolean, transition: boolean}"
        },
        outlined: {
            type: Boolean
        },
        multiple: {
            type: Boolean
        },
        noDataText: {
            type: String
        },
        noFilter: {
            type: Boolean
        },
        persistentPlaceholder: {
            type: Boolean
        },
        prefix: {
            type: String
        },
        prependIcon: {
            type: String
        },
        prependInnerIcon: {
            type: String
        },
        preventPaste: {
            type: Boolean
        },
        placeholder: {
            type: String
        },
        rules: {
            type: "Array<any>"
        },
        smallChips: {
            type: Boolean
        },
        solo: {
            type: Boolean
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        suffix: {
            type: String
        },
        validateOnBlur: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        },
        hint: {
            type: String
        },
        persistentHint: {
            type: Boolean
        }
    },
    VAvatar: {
        class: {
            type: String,
                editorDefaultValue: "'primary'"
        },
        color: {
            editorDefaultValue: "'primary'"
        },
        height: {
            type: "number | string"
        },
        width: {
            type: "number | string"
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        size: {
            type: "number | string"
        },
        icon: {
            type: String,
            editorDefaultValue: "'mdi-account'"
        },
        tile: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        }
    },
    VBadge: {
        qValue: {
            type: Boolean
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        bordered: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        class: {
            type: String
        },
        content: {
            type: String
        },
        dark: {
            type: Boolean
        },
        dot: {
            type: Boolean
        },
        icon: {
            type: String,
            editorDefaultValue: "'mdi-account'"
        },
        left: {
            type: Boolean
        },
        label: {
            editorDefaultValue: "'My Badge'"
        },
        mode: {
            type: String
        },
        offsetX: {
            type: "string | number"
        },
        offsetY: {
            type: "string | number"
        },
        origin: {
            type: String
        },
        overlap: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tile: {
            type: Boolean
        },
        transition: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        inline: {
            type: Boolean
        },
        avatar: {
            type: Boolean
        }
    },
    VBanner: {
        app: {
            type: Boolean
        },
        class: {
            type: String
        },
        color: {
            type: String
        },
        dark: {
            type: Boolean
        },
        elevation: {
            type: "number | string"
        },
        height: {
            type: "number | string"
        },
        icon: {
            type: String
        },
        "icon-color": {
            type: String
        },
        light: {
            type: Boolean
        },
        "max-height": {
            type: "number | string"
        },
        "max-width": {
            type: "number | string"
        },
        "min-height": {
            type: "number | string"
        },
        "min-width": {
            type: "number | string"
        },
        "mobile-breakpoint": {
            type: "number | string"
        },
        outlined: {
            type: Boolean
        },
        rounded: {
            type: "boolean | string"
        },
        shaped: {
            type: Boolean
        },
        "single-line": {
            type: Boolean
        },
        sticky: {
            type: Boolean
        },
        tag: {
            type: String
        },
        tile: {
            type: Boolean
        },
        value: {
            type: Boolean
        },
        width: {
            type: "number | string"
        },
    },
    VBottomNavigation: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        fixed: {
            type: Boolean
        },
        grow: {
            type: Boolean
        },
        hideOnScroll: {
            type: Boolean
        },
        horizontal: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        scrollTarget: {
            type: String
        },
        scrollThreshold: {
            type: "string | number"
        },
        shift: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        }
    },
    VBottomSheet: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        scrollable: {
            type: Boolean,
            editorDefaultValue: "false"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        hideOverlay: {
            type: Boolean
        },
        persistent: {
            type: Boolean,
            editorDefaultValue: "false"
        }
    },
    VBreadcrumbs: {
        dark: {
            type: Boolean
        },
        divider: {
            type: String
        },
        items: {
            type: "Array<any>",
            editorDefaultValue: `[{text = 'Dashboard', disabled = false, href = 'breadcrumbs_dashboard'},
{text = 'Google', disabled = false, href = 'https://www.google.com', exact = true, target ='_blank'},
{text = 'Link 1', disabled = true, href = 'breadcrumbs_link_1'}]`
        },
        large: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VBreadcrumbsItem: {
        class: {
            type: String
        },
        append: {
            type: Boolean
        },
        exact: {
            type: Boolean
        },
        href: {
            type: "object | string"
        },
        link: {
            type: Boolean
        },
        replace: {
            type: Boolean
        },
        ripple: {
            type: "object | string"
        },
        tag: {
            type: String
        },
        target: {
            type: String
        },
        to: {
            type: "object | string"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VBtn: {
        absolute: {
            type: Boolean
        },
        activeClass: {
            type: String
        },
        appendIcon: {
            type: String
        },
        block: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        class: {
            type: String
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'", "'white'"]
        },
        dark: {
            type: Boolean
        },
        depressed: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        disabled: {
            type: Boolean
        },
        elevation: {
            type: "number | string",
            options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
            editorDefaultValue: "0"
        },
        fab: {
            type: Boolean
        },
        fixed: {
            type: Boolean
        },
        height: {
            type: "number | string",
            editorDefaultValue: "'40px'"
        },
        href: {
            type: "string | object"
        },
        icon: {
            type: Boolean
        },
        inputValue: {
            type: String
        },
        link: {
            type: Boolean
        },
        loading: {
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        prependInnerIcon: {
            type: String
        },
        large: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        replace: {
            type: Boolean
        },
        retainFocusOnClick: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        ripple: {
            type: "boolean | object"
        },
        small: {
            type: Boolean
        },
        tag: {
            type: String
        },
        text: {
            type: Boolean
        },
        tile: {
            type: Boolean
        },
        to: {
            type: "string | object"
        },
        top: {
            type: Boolean
        },
        type: {
            type: String
        },
        xLarge: {
            type: Boolean
        },
        xSmall: {
            type: Boolean
        },
        width: {
            type: "number | string"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        rounded: {
            type: Boolean
        },
        tabindex: {
            type: "number | string"
        },
        target: {
            type: String
        },
    },
    VBtnToggle: {
        qValue: {
            type: "any"
        },
        borderless: {
            type: Boolean
        },
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        group: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        max: {
            type: "number | string"
        },
        multiple: {
            type: Boolean
        },
        tile: {
            type: Boolean
        },
        activeClass: {
            type: String
        },
        backgroundColor: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        }
    },
    VCalendar: {
        qValue: {
            type: "any",
        },
        categories: {
            type: "Array<any> | string"
        },
        categoryDays: {
            type: "number | string"
        },
        categoryForInvalid: {
            type: String
        },
        categoryHideDynamic: {
            type: Boolean
        },
        categoryShowAll: {
            type: Boolean
        },
        categoryText: {
            type: "string | Function"
        },
        color: {
            type: String
        },
        dark: {
            type: Boolean
        },
        dayFormat: {
            type: Function
        },
        end: {
            type: "string | number | date "
        },
        eventCategory: {
            type: "string | Function"
        },
        eventEnd: {
            type: String,
            editorDefaultValue: "'end'"
        },
        eventHeight: {
            type: Number,
            editorDefaultValue: 20
        },
        eventMarginBottom: {
            type: Number
        },
        eventMore: {
            type: Boolean
        },
        eventMoreText: {
            type: String
        },
        eventName: {
            type: "string | Function",
            editorDefaultValue: "'name'"

        },
        eventColor: {
            type: "string | Function",
            editorDefaultValue: "'primary'",
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]

        },
        eventOverlapMode: {
            type: "string | Function",
            editorDefaultValue: "'stack'"
        },
        eventOverlapThreshold: {
            type: "string | number "
        },
        eventRipple: {
            type: "boolean | object"
        },
        eventStart: {
            type: String,
            editorDefaultValue: "'start'"
        },
        eventTextColor: {
            type: "string | Function"
        },
        eventTimed: {
            type: "string | Function",
            editorDefaultValue: "'timed'"
        },
        events: {
            type: "Array<any>",
            editorDefaultValue: `[{'name'= 'Event 1', 'start'= '2023-06-01', 'timed'= false,'color'='primary' },{'name'= 'Event 2', 'start'= '2023-06-03T11:30:00', 'end'= '2023-06-03T15:30:00', 'timed'= true,'color'='secondary'  },{'name'= 'Event 3', 'start'= '2023-06-13', 'end'= '2023-06-17', 'timed'= true,'color'='error'  },{'name'= 'Event 4', 'start'= '2023-06-21', 'end'= '2023-06-21', 'timed'= true,'color'='primary'  },{'name'= 'Event 5', 'start'= '2023-06-21', 'end'= '2023-06-23', 'timed'= true,'color'='secondary'  },{'name'= 'Event 6', 'start'= '2023-06-25', 'end'= '2023-06-25', 'timed'= true,'color'='error'  },{'name'= 'Event 7', 'start'= '2023-06-25', 'end'= '2023-06-25', 'timed'= true,'color'='success'  },{'name'= 'Event 8', 'start'= '2023-06-25', 'end'= '2023-06-25', 'timed'= true,'color'='warning'  } ]`
        },
        firstInterval: {
            type: "number | string "
        },
        firstTime: {
            type: "number | string | object"
        },
        hideHeader: {
            type: Boolean
        },
        intervalCount: {
            type: "number | string "
        },
        intervalFormat: {
            type: Function
        },
        intervalHeight: {
            type: "number | string "
        },
        intervalMinutes: {
            type: "number | string "
        },
        intervalStyle: {
            type: Function
        },
        intervalWidth: {
            type: "number | string "
        },
        light: {
            type: Boolean
        },
        locale: {
            type: String
        },
        localeFirstDayOfYear: {
            type: "string | number "
        },
        maxDays: {
            type: Number
        },
        minWeeks: {
            type: "any"
        },
        monthFormat: {
            type: Function
        },
        now: {
            type: String
        },
        shortIntervals: {
            type: Boolean
        },
        shortMonths: {
            type: Boolean
        },
        shortWeekdays: {
            type: Boolean
        },
        showIntervalLabel: {
            type: Function
        },
        showMonthOnFirst: {
            type: Boolean
        },
        showWeek: {
            type: Boolean
        },
        start: {
            type: "string | number | date "
        },
        type: {
            type: String,
            editorDefaultValue: "'month'"
        },
        weekdayFormat: {
            type: Function
        },
        weekdays: {
            type: "Array<any> | string",
            editorDefaultValue: [0, 1, 2, 3, 4, 5, 6]
        }

    },
    VCard: {
        activeClass: {
            type: String
        },
        append: {
            type: Boolean
        },
        class: {
            type: String,
                options: ["'overflow-auto'"]
        },
        color: {
            type: String,
            options: ["'white'", "'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"],
            editorDefaultValue: "'white'"
        },
        dark: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        elevation: {
            type: String,
            options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
        },
        exact: {
            type: Boolean
        },
        flat: {
            type: Boolean
        },
        height: {
            type: String
        },
        hover: {
            type: Boolean
        },
        href: {
            type: "string | object"
        },
        img: {
            type: String
        },
        link: {
            type: Boolean
        },
        loaderHeight: {
            type: "string | number"
        },
        loading: {
            type: Boolean
        },
        maxHeight: {
            type: Number | String
        },
        outlined: {
            type: Boolean
        },
        raised: {
            type: Boolean
        },
        replace: {
            type: Boolean
        },
        ripple: {
            type: Boolean
        },
        rounded: {
            type: "boolean | string"
        },
        shaped: {
            type: Boolean
        },
        tag: {
            type: String
        },
        target: {
            type: String
        },
        tile: {
            type: Boolean
        },
        to: {
            type: "string | object"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        width: {
            type: String
        }
    },
    VCarousel: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        continuous: {
            type: Boolean
        },
        cycle: {
            type: Boolean
        },
        dark: {
            type: Boolean
        },
        delimiterIcon: {
            type: String
        },
        height: {
            type: String
        },
        hideDelimiterBackground: {
            type: Boolean
        },
        hideDelimiters: {
            type: Boolean
        },
        interval: {
            type: "number | string"
        },
        light: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        max: {
            type: "number | string"
        },
        multiple: {
            type: Boolean
        },
        nextIcon: {
            type: String
        },
        prevIcon: {
            type: String
        },
        progress: {
            type: Boolean
        },
        progressColor: {
            type: String
        },
        reverse: {
            type: Boolean
        },
        showArrows: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        showArrowsOnHover: {
            type: Boolean
        },
        tabindex: {
            type: "number | string"
        },
        touch: {
            type: Object
        },
        touchless: {
            type: Boolean
        },
        vertical: {
            type: Boolean
        },
        verticalDelimiters: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VCarouselItem: {
        qValue: {
            type: "any"
        },
        activeClass: {
            type: String
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        append: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        exact: {
            type: Boolean
        },
        href: {
            type: "string | object"
        },
        link: {
            type: Boolean
        },
        replace: {
            type: Boolean
        },
        src: {
            type: String
        },
        tabindex: {
            type: "number | string"
        },
        target: {
            type: String
        },
        to: {
            type: String
        },
        transition: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        }
    },
    VCheckbox: {
        qValue: {
            type: Boolean
        },
        class: {
            type: String
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        compareValue: {
            type: "any"
        },
        compareText: {
            type: String
        },
        compareTableValue: {
            type: String
        },
        dark: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hideDetails: {
            type: "string | boolean",
            editorDefaultValue: "false"
        },
        indeterminateIcon: {
            type: String
        },
        label: {
            editorDefaultValue: "'My CheckBox'"
        },
        loading: {
            type: "boolean | string"
        },
        multiple: {
            type: Boolean
        },
        offIcon: {
            type: String
        },
        onIcon: {
            type: String
        },
        hint: {
            type: String
        },
        persistentHint: {
            type: Boolean
        },
        ripple: {
            type: "boolean | object"
        },
        rules: {
            type: "Array<any>"
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        validateOnBlur: {
            type: Boolean,
            // default: false
        },
        readonly: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VChip: {
        activeClass: {
            type: String
        },
        active: {
            type: Boolean
        },
        append: {
            type: Boolean
        },
        class: {
            type: String
        },
        close: {
            type: Boolean
        },
        closeIcon: {
            type: String,
            options: ["'mdi-delete'", "'mdi-close'", "'mdi-close-circle'"]
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'default'", "'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        draggable: {
            type: Boolean
        },
        exact: {
            type: Boolean
        },
        filter: {
            type: Boolean
        },
        filterIcon: {
            type: String
        },
        href: {
            type: "string | object"
        },
        label: {
            type: Boolean
        },
        large: {
            type: Boolean
        },
        link: {
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        pill: {
            type: Boolean
        },
        replace: {
            type: Boolean
        },
        ripple: {
            type: "boolean | object"
        },
        small: {
            type: Boolean
        },
        tabindex: {
            type: "number | string"
        },
        tag: {
            type: String
        },
        to: {
            type: "string | object"
        },
        textColor: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        xSmall: {
            type: Boolean
        },
        xLarge: {
            type: Boolean
        },
    },
    VChipGroup: {
        qValue: {
            type: String
        },
        activeClass: {
            type: String,
            editorDefaultValue: "'primary'"
        },
        centerActive: {
            type: Boolean
        },
        color: {
            type: String
        },
        column: {
            type: Boolean
        },
        dark: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        max: {
            type: String
        },
        multiple: {
            type: Boolean
        },
        nextIcon: {
            type: String
        },
        prevIcon: {
            type: String
        },
        showArrows: {
            type: Boolean
        },
        tabindex: {
            type: "number | string"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VCol: {
        class: {
            type: String,
                options: ["'align-self-start'", "'align-self-center'", "'align-self-end'"]
        },
        noGutters: {
            type: Boolean,
            default: false,
        }
    },
    VCombobox: {
        qValue: {
            type: "any"
        },
        allowOverflow: {
            type: Boolean
        },
        appendIcon: {
            type: String
        },
        attach: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        autofocus: {
            type: Boolean
        },
        autoSelectFirst: {
            type: Boolean
        },
        avoidClearableTabIndex: {
            type: Boolean
        },
        backgroundColor: {
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        cacheItems: {
            type: Boolean
        },
        chips: {
            type: Boolean
        },
        class: {
            type: String
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        color: {
            type: String,
        },
        compareTableValue: {
            type: String
        },
        compareText: {
            type: String
        },
        compareValue: {
            type: "any"
        },
        counter: {
            type: "boolean | string | number"
        },
        counterValue: {
            type: Function
        },
        dark: {
            type: Boolean
        },
        deletableChips: {
            type: Boolean
        },
        delimiters: {
            type: "Array<any>"
        },
        dense: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        format: {
            type: String
        },
        formatValues: {
            type: "Array<any>"
        },
        filter: {
            type: Function
        },
        height: {
            type: "number | string"
        },
        hideDetails: {
            type: "string | boolean",
            editorDefaultValue: "false"
        },
        hideNoData: {
            type: Boolean
        },
        hideSelected: {
            type: Boolean
        },
        hint: {
            type: String
        },
        itemColor: {
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        itemDisabled: {
            type: "string | Array<any> | Function"
        },
        itemText: {
            type: "string | Array<any> | Function"
        },
        itemValue: {
            type: "string | Array<any> | Function"
        },
        items: {
            editorDefaultValue: `[{text = 'test1', value = 1},
{ text = 'test2', value = 2}]`
        },
        label: {
            editorDefaultValue: "'My Combobox'"
        },
        loading: {
            type: "boolean | string"
        },
        menuProps: {
            type: "string | object | Array<any>"
        },
        multiple: {
            type: Boolean
        },
        noDataText: {
            type: String
        },
        noFilter: {
            type: Boolean
        },
        openOnClear: {
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        persistentHint: {
            type: Boolean
        },
        persistentPlaceholder: {
            type: Boolean,
        },
        placeholder: {
            type: String
        },
        prefix: {
            type: String
        },
        prependInnerIcon: {
            type: String
        },
        preventPaste: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        },
        rounded: {
            type: Boolean
        },
        rules: {
            type: "Array<any>"
        },
        searchInput: {
            type: String
        },
        singleLine: {
            type: Boolean
        },
        smallChips: {
            type: Boolean
        },
        solo: {
            type: Boolean
        },
        soloInverted: {
            type: Boolean
        },
        step: {
            type: Number
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        suffix: {
            type: String
        },
        type: {
            type: String
        },
        validateOnBlur: {
            type: Boolean,
            // default: false
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VContainer: {
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        class: {
            type: String,
                editorDefaultValue: "'container'",
                options: ["'container--fluid'", "'devx-datagrid-header-left'", "'devx-datagrid-header-right'", "'devx-datagrid-header-center'", "'devx-datagrid-header-text-compact'"]
        },
        noGutters: {
            type: Boolean,
            default: false,
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        }
    },
    VDataIterator: {
        qValue: {
            type: "Array<any>"
        },
        class: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        disableFiltering: {
            type: Boolean
        },
        disablePagination: {
            type: Boolean
        },
        disableSort: {
            type: Boolean
        },
        expanded: {
            type: "Array<any>",
        },
        footerProps: {
            editorDefaultValue: `{showFirstLastPage = true,
                                firstIcon = 'mdi-arrow-collapse-left',
                                lastIcon = 'mdi-arrow-collapse-right',
                                prevIcon = 'mdi-minus',
                                nextIcon = 'mdi-plus'}`
        },
        groupBy: {
            type: "Array<any> | boolean"
        },
        groupDesc: {
            type: "Array<any> | boolean"
        },
        items: {
            editorDefaultValue: `[{name = 'Frozens Yogurt', calories = 159, fat = '6.0', carbs = 24, protein = '4.0', iron = '1%'},
                                {name = 'Ice cream sandwich', calories = 237, fat = '9.0', carbs = 37, protein = '4.3', iron = '1%'},
                                {name = 'Eclair', calories = 262, fat = '16.0', carbs = 23, protein = '6.0', iron = '7%'},
                                {name = 'Cupcake', calories = 305, fat = '3.7', carbs = 67, protein = '4.3', iron = '8%'},
                                {name = 'Gingerbread',calories = 356, fat = '16.0', carbs = 49, protein = '3.9', iron = '16%'},
                                {name = 'Jelly bean', calories = 375,  fat = '0.0', carbs = 94, protein = '0.0', iron = '0%'},
                                {name = 'Lollipop', calories = 392, fat = '0.2', carbs = 98, protein = '0.0', iron = '2 %'},
                                {name = 'Honeycomb', calories = 408, fat = '3.2', carbs = 87, protein = '6.5', iron = '45%'},
                                {name = 'Donut', calories = 452, fat = '25.0', carbs = 51, protein = '4.9', iron = '22%'},
                                {name = 'KitKat', calories = 518, fat = '26.0', carbs = 65, protein = '7', iron=  '6 %'}]`
        },
        itemsPerPage: {
            editorDefaultValue: "5"
        },
        loading: {
            type: "string | boolean",
        },
        locale: {
            type: String
        },
        mobileBreakpoint: {
            type: Number | String,
            editorDefaultValue: "md",
            runTimeDefaultValue: "md"
        },
        multiSort: {
            type: Boolean,
        },
        mustSort: {
            type: Boolean,
        },
        noDataText: {
            type: String,
        },
        noResultsText: {
            type: String
        },
        options: {},
        page: {
            type: Number
        },
        search: {
            type: String
        },
        selectableKey: {
            type: String
        },
        serverItemsLength: {
            type: Number
        },
        singleExpand: {
            type: Boolean
        },
        singleSelect: {
            type: Boolean
        },
        sortBy: {
            type: "string | Array<any>"
        },
        sortDesc: {
            type: "boolean | Array<any>"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VVirtualScroll: {
        qValue: {
            type: "Array<any>"
        },
        class: {
            type: String
        },
        bench: {
            type: Number | String
        },
        height: {
            type: Number | String
        },
        itemHeight: {
            type: Number | String
        },
        items: {
            type: "Array<any>"
        },
        maxHeight: {
            type: Number | String
        },
        maxWidth: {
            type: Number | String
        },
        minHeight: {
            type: Number | String
        },
        minWidth: {
            type: Number | String
        },
        width: {
            type: Number | String
        },
    },
    VDataTable: {
        qValue: {
            type: "Array<any>"
        },
        CompareDataField: {
            type: String
        },
        compareValue: {
            type: "any"
        },
        caption: {
            type: String
        },
        class: {
            type: String,
                options: ["'v-table-denser'", "'v-table-hover-hidden'", "'v-table-border-b-hidden'", "'stickytable'", "'stickytableleft'"]
        },
        calculateWidths: {
            type: Boolean
        },
        customFilter: {
            type: Function
        },
        customGroup: {
            type: Function
        },
        customSort: {
            type: Function
        },
        dark: {
            type: Boolean
        },
        disableFiltering: {
            type: Boolean
        },
        disablePagination: {
            type: Boolean
        },
        disableSort: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        expandIcon: {
            type: String
        },
        expanded: {
            type: "Array<any>",
        },
        fixedHeader: {
            type: Boolean
        },
        footerProps: {
            editorDefaultValue: `{showFirstLastPage = true,
firstIcon = 'mdi-arrow-collapse-left',
lastIcon = 'mdi-arrow-collapse-right',
prevIcon = 'mdi-minus',
nextIcon = 'mdi-plus'}`
        },
        groupBy: {
            type: "Array<any> | boolean"
        },
        groupDesc: {
            type: "Array<any> | boolean"
        },
        headers: {
            editorDefaultValue: `[{ text = 'Dessert (100g serving)', align= 'start', sortable= false, value= 'name'},
{ text = 'Calories', value= 'calories', sortable = true },
{ text = 'Fat (g)', value= 'fat' },
{ text = 'Carbs (g)', value= 'carbs' },
{ text = 'Protein (g)', value= 'protein' },
{ text = 'Iron (%)', value= 'iron' }]`
        },
        headerProps: {
            type: Object
        },
        hideDefaultFooter: {
            type: Boolean,
        },
        hideDefaultHeader: {
            type: Boolean
        },
        headersLength: {
            type: Number
        },
        height: {
            type: "number | string"
        },
        loaderHeight: {
            type: "number | string"
        },
        loadingText: {
            type: String
        },
        itemClass: {
            type: "string | Function"
        },
        itemKey: {
            type: String
        },
        items: {
            editorDefaultValue: `[{name = 'Frozens Yogurt', calories = 159, fat = '6.0', carbs = 24, protein = '4.0', iron = '1%'},
{name = 'Ice cream sandwich', calories = 237, fat = '9.0', carbs = 37, protein = '4.3', iron = '1%'},
{name = 'Eclair', calories = 262, fat = '16.0', carbs = 23, protein = '6.0', iron = '7%'},
{name = 'Cupcake', calories = 305, fat = '3.7', carbs = 67, protein = '4.3', iron = '8%'},
{name = 'Gingerbread',calories = 356, fat = '16.0', carbs = 49, protein = '3.9', iron = '16%'},
{name = 'Jelly bean', calories = 375,  fat = '0.0', carbs = 94, protein = '0.0', iron = '0%'},
{name = 'Lollipop', calories = 392, fat = '0.2', carbs = 98, protein = '0.0', iron = '2 %'},
{name = 'Honeycomb', calories = 408, fat = '3.2', carbs = 87, protein = '6.5', iron = '45%'},
{name = 'Donut', calories = 452, fat = '25.0', carbs = 51, protein = '4.9', iron = '22%'},
{name = 'KitKat', calories = 518, fat = '26.0', carbs = 65, protein = '7', iron=  '6 %'}]`
        },
        itemsPerPage: {
            editorDefaultValue: "5"
        },
        loading: {
            type: "string | boolean",
        },
        locale: {
            type: String
        },
        mobileBreakpoint: {
            type: Number | String,
            editorDefaultValue: "600"
        },
        multiSort: {
            type: Boolean,
        },
        mustSort: {
            type: Boolean,
        },
        noDataText: {
            type: String,
        },
        noResultsText: {
            type: String
        },
        options: {},
        page: {
            type: Number
        },
        search: {
            type: String
        },
        selectableKey: {
            type: String
        },
        serverItemsLength: {
            type: Number
        },
        showExpand: {
            type: Boolean
        },
        showGroupBy: {
            type: Boolean
        },
        showSelect: {
            type: Boolean
        },
        singleExpand: {
            type: Boolean
        },
        singleSelect: {
            type: Boolean
        },
        sortBy: {
            type: "string | Array<any>"
        },
        sortDesc: {
            type: "boolean | Array<any>"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        },
        uniqueSlots: {
            type: Boolean
        }
    },
    VDatePicker: {
        qValue: {
            type: "Array<any> | string",
            editorDefaultValue: "Date.now().toFormattedString('YYYY-MM-DD')"
        },
        dark: {
            type: Boolean
        },
        dayFormat: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        eventColor: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        events: {
            type: "Array<any>"
        },
        firstDayOfWeek: {
            editorDefaultValue: "1"
        },
        headerDateFormat: {
            type: String
        },
        height: {
            type: "number | string"
        },
        landscape: {
            type: Boolean
        },
        locale: {
            editorDefaultValue: "'tr-tr'"
        },
        localeFirsDayOfYear: {
            type: "number | string"
        },
        max: {
            type: String
        },
        min: {
            type: String
        },
        monthFormat: {
            type: Function
        },
        multiple: {
            type: Boolean
        },
        nextIcon: {
            type: String
        },
        prevIcon: {
            type: String
        },
        noTitle: {
            type: Boolean
        },
        pickerDate: {
            type: String
        },
        range: {
            type: Boolean
        },
        reactive: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        },
        scrollable: {
            type: Boolean
        },
        selectedItemsText: {
            type: String
        },
        showCurrent: {
            type: "string | boolean"
        },
        showWeek: {
            type: Boolean
        },
        titleDateFormat: {
            type: Function
        },
        weekdayFormat: {
            type: Function
        },
        type: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VDialog: {
        qValue: {
            type: Boolean
        },
        class: {
            type: String
        },
        contentClass: {
            type: String
        },
        dark: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        fullscreen: {
            type: Boolean
        },
        hideOverlay: {
            type: Boolean
        },
        internalActivator: {
            type: Boolean
        },
        noClickAnimation: {
            type: Boolean
        },
        openOnHover: {
            type: Boolean
        },
        origin: {
            type: String
        },
        overlayColor: {
            type: String
        },
        overlayOpacity: {
            type: "string | number"
        },
        persistent: {
            type: Boolean
        },
        retainFocus: {
            type: Boolean
        },
        scrollable: {
            type: Boolean
        },
        transition: {
            type: "string | boolean"
        },
        width: {
            type: Number,
            editorDefaultValue: "500",
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        attach: {
            type: String,
            showInEditor: false
        }
    },
    VDivider: {
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        inset: {
            type: Boolean
        },
        vertical: {
            type: Boolean,
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VEditDialog: {
        dark: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        returnValue: {
            type: "string | object"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VExpansionPanel: {
        activeClass: {
            type: String,
        },
        class: {
            type: String
        },
        flat: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        disabled: {
            type: Boolean
        },

    },
    VExpansionPanelContent: {
        class: {
            type: String
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        color: {
            type: String
        }
    },
    VExpansionPanelHeader: {
        class: {
            type: String,
        },
        color: {
            type: String,
        },
        disableIconRotate: {
            type: Boolean,
        },
        expandIcon: {
            type: Boolean,
        },
        hideActions: {
            type: Boolean,
        },
        ripple: {
            type: "boolean | object",
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VExpansionPanels: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        activeClass: {
            type: String
        },
        dark: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        accordion: {
            type: Boolean
        },
        focusable: {
            type: Boolean
        },
        hover: {
            type: Boolean
        },
        inset: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        max: {
            type: "string | number"
        },
        multiple: {
            type: Boolean
        },
        popout: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        },
        tile: {
            type: Boolean
        },
        flat: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VFileInput: {
        qValue: {
            type: "any"
        },
        accept: {
            type: String
        },
        appendIcon: {
            type: String
        },
        autofocus: {
            type: Boolean
        },
        chips: {
            type: Boolean
        },
        class: {
            type: String
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        counter: {
            type: "boolean | string | number"
        },
        counterSizeString: {
            type: String
        },
        dark: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "string | number"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        filled: {
            type: Boolean
        },
        flat: {
            type: Boolean
        },
        height: {
            type: "number | string"
        },
        hideDetails: {
            type: "string | boolean",
            editorDefaultValue: "false"
        },
        hideInput: {
            type: Boolean
        },
        hint: {
            type: String
        },
        label: {
            type: String
        },
        loading: {
            type: "boolean | string"
        },
        multiple: {
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        persistentHint: {
            type: Boolean
        },
        placeholder: {
            type: String,
            editorDefaultValue: "'Select a file(Placeholder)'"
        },
        prefix: {
            type: String
        },
        prependIcon: {
            type: String
        },
        prependInnerIcon: {
            type: String
        },
        rounded: {
            type: Boolean
        },
        rules: {
            type: "Array<any>"
        },
        shaped: {
            type: Boolean
        },
        solo: {
            type: Boolean
        },
        soloInverted: {
            type: Boolean
        },
        suffix: {
            type: String
        },
        showSize: {
            type: "boolean | number"
        },
        singleLine: {
            type: Boolean
        },
        smallChips: {
            type: Boolean
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        truncateLength: {
            type: "string | number"
        },
        type: {
            type: String,
        },
        validateOnBlur: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VFooter: {
        absolute: {
            type: Boolean
        },
        color: {
            type: String
        },
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        fixed: {
            type: Boolean
        },
        inset: {
            type: Boolean
        },
        padless: {
            type: Boolean
        },
        tag: {
            type: String
        },
        tile: {
            type: Boolean
        },
        width: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        rounded: {
            type: "boolean | string"
        },
    },
    VForm: {
        action: {
            type: String
        },        
        class: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        method: {
            type: String,
            options: ["'post'"]
        },
        validate: {
            type: Function
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        qValue: {
            type: Boolean
        }   
        
    },
    VIcon: {
        class: {
            type: String
        },
        color: {
            type: String
        },
        dark: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        large: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        size: {
            type: "string | number"
        },
        small: {
            type: Boolean
        },
        tag: {
            type: String
        },
        text: {
            type: String,
            editorDefaultValue: "'mdi-home'"
        },
        xSmall: {
            type: Boolean
        },
        xLarge: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VImg: {
        class: {
            type: String
        },
        alt: {
            type: String
        },
        aspectRatio: {
            type: "string | number"
        },
        contain: {
            type: Boolean
        },
        dark: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        height: {
            type: "string | number",
            editorDefaultValue: "'50'"
        },
        lazySrc: {
            type: String
        },
        maxHeight: {
            type: "string | number"
        },
        maxWidth: {
            type: "string | number"
        },
        minHeight: {
            type: "string | number"
        },
        minWidth: {
            type: "string | number"
        },
        options: {
            type: Object
        },
        position: {
            type: String
        },
        sizes: {
            type: String
        },
        src: {
            type: "string | object",
            editorDefaultValue: "'https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Image-01-512.png'"
        },
        srcset: {
            type: String
        },
        transition: {
            type: "string | boolean"
        },
        width: {
            type: "string | number",
            editorDefaultValue: "'50'"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VList: {
        class: {
            type: String
        },
        activeClass: {
            type: String
        },
        dark: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        expand: {
            type: Boolean
        },
        maxHeight: {
            type: String
        },
        maxWidth: {
            type: String
        },
        rounded: {
            type: Boolean
        },
        shaped: {
            type: Boolean
        },
        subheader: {
            type: Boolean
        },
        tabindex: {
            type: "number | string"
        },
        tag: {
            type: String
        },
        threeLine: {
            type: Boolean
        },
        tile: {
            type: Boolean
        },
        twoLine: {
            type: Boolean,
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VListGroup: {
        qValue: {
            type: "any"
        },
        appendIcon: {
            type: String
        },
        activeClass: {
            type: String
        },
        class: {
            type: String
        },
        color: {
            type: String
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        group: {
            type: String
        },
        noAction: {
            type: Boolean
        },
        prependIcon: {
            type: String
        },
        subGroup: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VListItem: {
        append: {
            type: Boolean
        },
        activeClass: {
            type: String
        },
        class: {
            type: String
        },
        color: {
            type: String
        },
        dark: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        exact: {
            type: Boolean
        },
        inputValue: {
            type: 'any'
        },
        href: {
            type: "string | object"
        },
        inactive: {
            type: Boolean
        },
        link: {
            type: Boolean
        },
        replace: {
            type: Boolean
        },
        ripple: {
            type: Boolean
        },
        selectable: {
            type: Boolean
        },
        tabindex: {
            type: "number | string"
        },
        tag: {
            type: String
        },
        target: {
            type: String
        },
        threeLine: {
            type: Boolean
        },
        to: {
            type: String
        },
        twoLine: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VListItemAction: {
        class: {
            type: String
        }
    },
    VListItemActionText: {
        class: {
            type: String
        }
    },
    VListItemAvatar: {
        class: {
            type: String
        }
    },
    VListItemContent: {
        class: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VListItemIcon: {
        class: {
            type: String
        }
    },
    VListItemTitle:{
        class: {
            type: String
        }
    },
    VListItemSubtitle:{
        class: {
            type: String
        }
    },
    VListItemGroup: {
        qValue: {
            type: "any"
        },
        activeClass: {
            type: String
        },
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        multiple: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VMenu: {
        attach: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        closeOnContentClick: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        closeOnClick: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        left: {
            type: Boolean
        },
        maxHeight: {
            type: "any"
        },
        minWidth: {
            type: String
        },
        offsetX: {
            type: Boolean
        },
        offsetY: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        nudgeLeft: {
            type: String
        },
        nudgeRight: {
            type: String
        },
        nudgeTop: {
            type: String
        },
        nudgeBottom: {
            type: String
        },
        openOnClick: {
            type: Boolean,
        },
        openOnHover: {
            type: Boolean
        },
        openOnFocus: {
            type: Boolean
        },
        returnValue: {
            type: String
        },
        right: {
            type: Boolean
        },
        rounded: {
            type: Boolean
        },
        top: {
            type: Boolean
        },
        transition: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VNavigationDrawer: {
        qValue: {
            type: "any"
        },
        absolute: {
            type: Boolean,
        },
        bottom: {
            type: Boolean
        },
        class: {
            type: String
        },
        clipped: {
            type: Boolean
        },
        color: {
            type: String
        },
        dark: {
            type: Boolean
        },
        disableResizeWatcher: {
            type: Boolean
        },
        expandOnHover: {
            type: Boolean
        },
        fixed: {
            type: Boolean
        },
        miniVariant: {
            type: Boolean
        },
        mobileBreakpoint: {
            type: "number | string",
            editorDefaultValue: "0"
        },
        permanent: {
            type: Boolean,
        },
        right: {
            type: Boolean,
        },
        temporary: {
            type: Boolean,
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        width: {
            type: String
        },
    },
    VOverflowBtn: {
        qValue: {
            type: "any"
        },
        allowOverflow: {
            type: Boolean
        },
        appendIcon: {
            type: String
        },
        autoSelectFirst: {
            type: Boolean
        },
        autofocus: {
            type: Boolean
        },
        chips: {
            type: Boolean
        },
        cacheItems: {
            type: Boolean
        },
        class: {
            type: String
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        counter: {
            type: "boolean | string | number"
        },
        counterValue: {
            type: Function
        },
        dark: {
            type: Boolean
        },
        deletableChips: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        editable: {
            type: Boolean
        },
        eager: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        filter: {
            type: Function
        },
        height: {
            type: "number | string"
        },
        hint: {
            type: String
        },
        itemDisabled: {
            type: "string | Array<any> | Function"
        },
        itemText: {
            type: "string | Array<any> | Function"
        },
        itemValue: {
            type: "string | Array<any> | Function"
        },
        items: {
            type: "Array<any>"
        },
        label: {
            type: String
        },
        loading: {
            type: "boolean | string"
        },
        menuProps: {
            type: "string | object | Array<any>"
        },
        multiple: {
            type: Boolean
        },
        openOnClear: {
            type: Boolean
        },
        persistentHint: {
            type: Boolean
        },
        prependInnerIcon: {
            type: String
        },
        rules: {
            type: "Array<any>"
        },
        searchInput: {
            type: String
        },
        segmented: {
            type: Boolean
        },
        smallChips: {
            type: Boolean
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        validateOnBlur: {
            type: Boolean,
            // default: false
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VOverlay: {
        qValue: {
            type: "any"
        },
        absolute: {
            type: Boolean
        },
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        opacity: {
            type: "number | string"
        },
        zIndex: {
            type: "number | string"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VPagination: {
        qValue: {
            type: Number
        },
        circle: {
            type: Boolean
        },
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        length: {
            type: String,
            editorDefaultValue: "5"
        },
        nextIcon: {
            type: String
        },
        prevIcon: {
            type: String
        },
        totalVisible: {
            type: "string | number"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VParallax: {
        alt: {
            type: String
        },
        class: {
            type: String
        },

        height: {
            type: String
        },
        srcset: {
            type: String
        },
        src: {
            type: String,
            editorDefaultValue: "'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
        },
        tabindex: {
            type: "number | string"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VProgressCircular: {
        qValue: {
            type: "number | string"
        },
        button: {
            type: Boolean
        },
        class: {
            type: String
        },
        color: {
            type: String,
        },
        indeterminate: {
            type: Boolean
        },
        rotate: {
            type: "number | string"
        },
        size: {
            type: "number | string"
        },
        width: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },

    },
    VProgressLinear: {
        qValue: {
            type: "number | string",
            editorDefaultValue: "15"
        },
        absolute: {
            type: Boolean
        },
        backgroundOpacity: {
            type: "string | number"
        },
        backgroundColor: {
            type: String,
            editorDefaultValue: "'purple'"
        },
        bottom: {
            type: Boolean
        },
        bufferValue: {
            type: "string | number"
        },
        class: {
            type: String
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        dark: {
            type: Boolean
        },
        fixed: {
            type: Boolean
        },
        indeterminate: {
            type: Boolean
        },
        rounded: {
            type: Boolean
        },
        striped: {
            type: Boolean
        },
        top: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VRadio: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        dark: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        label: {
            editorDefaultValue: "'Test radio label'"
        },
        offIcon: {
            type: String
        },
        onIcon: {
            type: String
        },
        ripple: {
            type: "boolean | object"
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        },
        activeClass: {
            type: String,
        },
    },
    VRadioGroup: {
        qValue: {
            type: "any"
        },
        appendIcon: {
            type: String
        },
        class: {
            type: String
        },
        column: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        compareValue: {
            type: "any"
        },
        compareText: {
            type: String
        },
        compareTableValue: {
            type: String
        },
        dark: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hideDetails: {
            type: "string | boolean",
            editorDefaultValue: "false"
        },
        hint: {
            type: String
        },
        label: {
            type: String
        },
        mandatory: {
            type: Boolean
        },
        max: {
            type: "number | string"
        },
        multiple: {
            type: Boolean
        },
        persistentHint: {
            type: Boolean
        },
        prependInnerIcon: {
            type: String
        },
        row: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        },
        rules: {
            type: "Array<any>"
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        validateOnBlur: {
            type: Boolean,
            // default: false
        },
        valueComparator: {
            type: Function,
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        },
        activeClass: {
            type: String,
        },
    },
    VRangeSlider: {
        qValue: {
            type: "any",
            editorDefaultValue: "[30,60]"
        },
        appendIcon: {
            type: String
        },
        backgroundColor: {
            type: String
        },
        class: {
            type: String
        },
        color: {
            type: String
        },
        dark: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        height: {
            type: "number | string"
        },
        hideDetails: {
            type: "string | boolean",
            editorDefaultValue: "false"
        },
        hint: {
            type: String
        },
        id: {
            type: String
        },
        inverseLabel: {
            type: Boolean
        },
        label: {
            type: String
        },
        loaderHeight: {
            type: "number | string"
        },
        loading: {
            type: Boolean
        },
        persistentHint: {
            type: Boolean
        },
        prependIcon: {
            type: String
        },
        readonly: {
            type: Boolean
        },
        thumbColor: {
            type: String
        },
        thumbLabel: {
            type: String
        },
        tickSize: {
            type: "number | string"
        },
        trackColor: {
            type: String
        },
        trackFillColor: {
            type: String
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        max: {
            type: "number | string",
            editorDefaultValue: "100"
        },
        min: {
            type: "number | string",
            editorDefaultValue: "0"
        },
        prependInnerIcon: {
            type: String
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        step: {
            type: "number | string"
        },
        thumbSize: {
            type: "number | string"
        },
        tickLabels: {
            type: "Array<any>"
        },
        ticks: {
            type: "boolean | string"
        },
        rules: {
            type: "Array<any>"
        },
        validateOnBlur: {
            type: Boolean
        },
        vertical: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VRating: {
        qValue: {
            type: Number
        },
        class: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        closeDelay: {
            type: "number | string"
        },
        dark: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        emptyIcon: {
            type: String
        },
        fullIcon: {
            type: String
        },
        halfIcon: {
            type: String
        },
        halfIncrements: {
            type: Boolean
        },
        hover: {
            type: Boolean
        },
        large: {
            type: Boolean
        },
        openDelay: {
            type: Boolean
        },
        openDereadonlylay: {
            type: Boolean
        },
        size: {
            type: "number | string"
        },
        small: {
            type: Boolean
        },
        ripple: {
            type: "boolean | object"
        },
        xSmall: {
            type: Boolean
        },
        xLarge: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VRow: {
        class: {
            type: String,
                options: ["'align-start'", "'align-center'", "'align-end'"]
        },
        noGutters: {
            type: Boolean,
            default: false,
        }
    },
    VSelect: {
        qValue: {
            type: "any"
        },
        attach: {
            type: Boolean
        },
        appendIcon: {
            type: String
        },
        backgroundColor: {
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        chips: {
            type: Boolean
        },
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        clearable: {
            type: Boolean
        },
        color: {
            type: String,
        },
        compareValue: {
            type: "any"
        },
        compareText: {
            type: String
        },
        compareTableValue: {
            type: String
        },
        deletableChips: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        error: {
            type: Boolean
        },
        errorMessages: {
            type: String
        },
        height: {
            type: "number | string"
        },
        hideDetails: {
            type: "string | boolean",
            editorDefaultValue: "false"
        },
        hint: {
            type: String
        },
        internalValue: {
            type: Number
        },
        items: {
            editorDefaultValue: `[{text = 'test1', value = 1}, { text = 'test2', value = 2}]`
        },
        itemColor: {
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        itemText: {
            type: "string | Array<any> | Function",
            editorDefaultValue: "'text'"
        },
        itemValue: {
            type: "string | Array<any> | Function",
            editorDefaultValue: "'value'"
        },
        label: {
            editorDefaultValue: "'My Select'"
        },
        loading: {
            type: Boolean
        },
        menuProps: {
            type: Object
        },
        multiple: {
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        persistentHint: {
            type: Boolean
        },
        persistentPlaceholder: {
            type: Boolean
        },
        placeholder: {
            type: String
        },
        prependInnerIcon: {
            type: String
        },
        rounded: {
            type: Boolean
        },
        solo: {
            type: Boolean
        },
        soloInverted: {
            type: Boolean
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: String
        },
        readonly: {
            type: Boolean
        },
        rules: {
            type: "Array<any>"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        },
        autofocus: {
            type: Boolean
        }
    },
    VSheet: {
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        elevation: {
            type: "number | string"
        },
        height: {
            type: String
        },
        tag: {
            type: String
        },
        tile: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VSkeletonLoader: {
        boilerPlate: {
            type: Boolean
        },
        dark: {
            type: Boolean
        },
        elevation: {
            type: "number | string",
            editorDefaultValue: "4",
            options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
        },
        height: {
            type: "number | string",
            editorDefaultValue: "'200'"
        },
        width: {
            type: "number | string",
            editorDefaultValue: "'200'"
        },
        light: {
            type: Boolean
        },
        loading: {
            type: Boolean
        },
        maxHeight: {
            type: "number | string"
        },
        maxWidth: {
            type: "number | string"
        },
        minHeight: {
            type: "number | string"
        },
        minWidth: {
            type: "number | string"
        },
        tile: {
            type: Boolean
        },
        type: {
            editorDefaultValue: "'card'",
            type: String,
            options: ["'actions'", "'article'", "'avatar'", "'button'", "'card'", "'card-avatar'", "'card-heading'", "'chip'",
                "'date-picker'", "'date-picker-options'", "'date-picker-days'", "'heading'", "'image'", "'list-item'", "'list-item-avatar'",
                "'list-item-two-line'", "'list-item-avatar-two-line'", "'list-item-three-line'", "'list-item-avatar-three-line'",
                "'paragraph'", "'sentences'", "'table'", "'table-heading'", "'table-thead'", "'table-tbody'", "'table-row-divider'",
                "'table-row'", "'table-cell'", "'table-tfoot'", "'text'"
            ]
        },
        types: {
            type: Object
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VSlideGroup: {
        qValue: {
            type: "any"
        },
        activeClass: {
            type: String
        },
        centerActive: {
            type: Boolean
        },
        dark: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        multiple: {
            type: Boolean
        },
        prevIcon: {
            type: String
        },
        showArrows: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VSlideItem: {
        qValue: {
            type: "any"
        },
        activeClass: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VSlider: {
        qValue: {
            type: "any"
        },
        appendIcon: {
            type: String
        },
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hint: {
            type: String
        },
        label: {
            type: String
        },
        loading: {
            type: Boolean
        },
        max: {
            type: "number | string",
            editorDefaultValue: "100"
        },
        min: {
            type: "number | string",
            editorDefaultValue: "0"
        },
        prependInnerIcon: {
            type: String
        },
        readonly: {
            type: Boolean,
            editorDefaultValue: "false"
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        step: {
            type: "number | string"
        },
        validateOnBlur: {
            type: Boolean
        },
        thumbSize: {
            type: "number | string"
        },
        thumbLabel: {
            type: "boolean | string",
        },
        tickLabels: {
            type: "Array<any>"
        },
        ticks: {
            type: "boolean | string"
        },
        vertical: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VSnackbar: {
        qValue: {
            type: "any"
        },
        absolute: {
            type: Boolean
        },
        app: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        center: {
            type: Boolean
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "warning"]
        },
        contentClass: {
            type: String
        },
        dark: {
            type: Boolean
        },
        elevation: {
            type: "number | string"
        },
        multiLine: {
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        rounded: {
            type: "number | string"
        },
        shaped: {
            type: Boolean
        },
        text: {
            type: Boolean
        },
        tile: {
            type: Boolean
        },
        timeout: {
            type: "number | string"
        },
        transition: {
            type: String
        },
        left: {
            type: Boolean
        },
        top: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        vertical: {
            type: Boolean
        }
    },
    VSparkline: {
        autoDraw: {
            type: Boolean
        },
        autoDrawDuration: {
            type: Number
        },
        autoDrawEasing: {
            type: String
        },
        autoLineWidth: {
            type: Boolean
        },
        color: {
            type: String
        },
        fill: {
            type: Boolean
        },
        gradient: {
            type: Array,
            editorDefaultValue: "['#f72047', '#ffd200', '#1feaea']"
        },
        gradientDirection: {
            type: String,
        },
        height: {
            type: String
        },
        labelSize: {
            type: Number
        },
        labels: {
            type: Array
        },
        lineWidth: {
            type: Number,
            editorDefaultValue: "2",
        },
        radius: {
            type: Number
        },
        showLabels: {
            type: Boolean,
        },
        smooth: {
            type: String,
            editorDefaultValue: "10",
        },
        tabindex: {
            type: "number | string"
        },
        type: {
            type: String
        },
        value: {
            type: Array,
            editorDefaultValue: "[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]",
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        width: {
            type: Number
        },
    },
    VSpeedDial: {
        qValue: {
            type: "any"
        },
        absolute: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        class: {
            type: String
        },
        direction: {
            type: String
        },
        fixed: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        mode: {
            type: String
        },
        openOnHover: {
            type: Boolean
        },
        origin: {
            type: String
        },
        right: {
            type: Boolean
        },
        top: {
            type: Boolean
        },
        transition: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VStepper: {
        qValue: {
            type: "any"
        },
        altLabels: {
            type: Boolean
        },
        class: {
            type: String
        },
        dark: {
            type: Boolean
        },
        nonLinear: {
            type: Boolean
        },
        vertical: {
            type: Boolean,
            editorDefaultValue: "false"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VStepperContent: {
        step: {
            type: "number | string"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VStepperHeader: {
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },

    },
    VStepperItems: {
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },

    },
    VStepperStep: {
        complete: {
            type: Boolean
        },
        completeIcon: {
            type: String
        },
        color: {
            type: String
        },
        editIcon: {
            type: String
        },
        editable: {
            type: Boolean
        },
        rules: {
            type: "Array<any>"
        },
        step: {
            type: "number | string"
        },
        text: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        errorIcon: {
            type: String
        }
    },
    VSwitch: {
        qValue: {
            type: "any"
        },
        appendIcon: {
            type: String
        },
        class: {
            type: String
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        dark: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hideDetails: {
            type: "string | boolean",
            editorDefaultValue: "false"
        },
        hint: {
            type: String
        },
        inset: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        label: {
            type: String,
            editorDefaultValue: "'Test Switch'"
        },
        loading: {
            type: "boolean | string"
        },
        persistentHint: {
            type: Boolean
        },
        prependInnerIcon: {
            type: String
        },
        readonly: {
            type: Boolean
        },
        ripple: {
            type: "boolean | object"
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        tabindex: {
            type: "number | string"
        },
        validateOnBlur: {
            type: Boolean,
            // default: false
        },
        valueComparator: {
            type: Function,
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        }
    },
    VTab: {
        activeClass: {
            type: String
        },
        appendIcon: {
            type: String
        },
        class: {
            type: String,
                options: ["'tab-header-border-radius-left'", "'tab-header-border-radius-right'"]
        },
        dark: {
            type: Boolean
        },
        link: {
            type: Boolean
        },
        prependInnerIcon: {
            type: String
        },
        ripple: {
            type: "boolean | object"
        },
        replace: {
            type: Boolean
        },
        tag: {
            type: String
        },
        target: {
            type: String
        },
        to: {
            type: "string | object"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VTabItem: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VTabs: {
        activeClass: {
            type: String
        },
        qValue: {
            type: "any"
        },
        alignWithTitle: {
            type: Boolean
        },
        backgroundColor: {
            type: String
        },
        class: {
            type: String,
                options: ["'tab-dense'"]
        },
        centered: {
            type: Boolean
        },
        centerActive: {
            type: Boolean
        },
        dark: {
            type: Boolean
        },
        fixedTabs: {
            type: Boolean
        },
        grow: {
            type: Boolean
        },
        height: {
            type: String
        },
        iconsAndText: {
            type: Boolean
        },
        mobileBreakpoint: {
            type: "number | string",
            editorDefaultValue: "md",
            runTimeDefaultValue: "md"
        },
        nextIcon: {
            type: String
        },
        prevIcon: {
            type: String
        },
        showArrows: {
            type: Boolean
        },
        vertical: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VTabsItems: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        continuous: {
            type: Boolean
        },
        dark: {
            type: Boolean
        },
        max: {
            type: "number | string"
        },
        multiple: {
            type: Boolean
        },
        nextIcon: {
            type: String
        },
        prevIcon: {
            type: String
        },
        showArrows: {
            type: Boolean
        },
        showArrowsOnHover: {
            type: Boolean
        },
        touch: {
            type: Object
        },
        touchless: {
            type: Boolean
        },
        vertical: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VTabsSlider: {
        class: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VTextField: {
        qValue: {
            type: "any"
        },
        appendIcon: {
            type: String
        },
        appendOuterIcon: {
            type: String
        },
        autofocus: {
            type: Boolean
        },
        class: {
            type: String
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        compareTableValue: {
            type: String
        },
        compareText: {
            type: String
        },
        compareValue: {
            type: "any"
        },
        counter: {
            type: "boolean | string | number"
        },
        counterValue: {
            type: Function
        },
        color: {
            type: String
        },
        dark: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        format: {
            type: String,
            options: ["'number'", "'regex'", "'creditcard'", "'phone'", "'turkishMobilePhone'", "'turkishPhoneWithCountryCode'", "'internationalPhone'", "'email'", "'multipleEmails'", "'ipaddress'", "'iban'", "'turkishIban'", "'onlyAlphabetic'", "'alphaNumeric'", "'bigdecimal'"]
        },
        formatValues: {
            type: "Array<any>"
        },
        height: {
            type: "number | string"
        },
        hideDetails: {
            type: "string | boolean",
            editorDefaultValue: "false"
        },
        hint: {
            type: String
        },
        label: {
            type: String,
            editorDefaultValue: "'Text field label'"
        },
        loading: {
            type: "boolean | string"
        },
        maxlength: {
            type: "number | string",
            propType: "attr"
        },
        name: {
            type: String
        },
        tabindex: {
            type: "number | string"
        },
        outlined: {
            type: Boolean
        },
        persistentHint: {
            type: Boolean
        },
        persistentPlaceholder: {
            type: Boolean
        },
        placeholder: {
            type: String
        },
        prefix: {
            type: String
        },
        prependIcon: {
            type: String
        },
        prependInnerIcon: {
            type: String
        },
        avoidClearableTabIndex: {
            type: Boolean
        },
        preventPaste: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        },
        rounded: {
            type: Boolean
        },
        rules: {
            type: "Array<any>"
        },
        solo: {
            type: Boolean
        },
        soloInverted: {
            type: Boolean
        },
        step: {
            type: Number
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        suffix: {
            type: String
        },
        type: {
            type: String
        },
        validateOnBlur: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VTextarea: {
        qValue: {
            type: "any"
        },
        appendIcon: {
            type: String
        },
        autoGrow: {
            type: Boolean
        },
        autofocus: {
            type: Boolean
        },
        class: {
            type: String
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        compareTableValue: {
            type: String
        },
        compareText: {
            type: String
        },
        compareValue: {
            type: "any"
        },
        counter: {
            type: "boolean | string | number"
        },
        counterValue: {
            type: Function
        },
        dark: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        format: {
            type: String,
            options: ["'number'", "'regex'", "'creditcard'", "'phone'", "'turkishMobilePhone'", "'turkishPhoneWithCountryCode'", "'internationalPhone'", "'email'", "'multipleEmails'", "'ipaddress'", "'iban'", "'turkishIban'", "'onlyAlphabetic'", "'alphaNumeric'", "'bigdecimal'"]
        },
        formatValues: {
            type: "Array<any>"
        },
        flat: {
            type: Boolean
        },
        hideDetails: {
            type: "string | boolean",
            editorDefaultValue: "false"
        },
        hint: {
            type: String
        },
        height: {
            type: "number | string"
        },
        label: {
            type: String
        },
        loading: {
            type: "boolean | string"
        },
        maxlength: {
            type: String,
        },
        noResize: {
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        persistentHint: {
            type: Boolean
        },
        placeholder: {
            type: String
        },
        prefix: {
            type: String
        },
        prependInnerIcon: {
            type: String
        },
        preventPaste: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        },
        rows: {
            type: "number | string"
        },
        rounded: {
            type: Boolean
        },
        rules: {
            type: "Array<any>"
        },
        solo: {
            type: Boolean
        },
        soloInverted: {
            type: Boolean
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        suffix: {
            type: String
        },
        validateOnBlur: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        },
    },
    VTimePicker: {
        qValue: {
            type: "any"
        },
        alignTop: {
            type: Boolean
        },
        dark: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        format: {
            type: String
        },
        max: {
            type: String
        },
        min: {
            type: String
        },
        noTitle: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    VTimeline: {
        alignTop: {
            type: Boolean
        },
        dark: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        tabindex: {
            type: "number | string"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VTimelineItem: {
        color: {
            type: String,
            options: ["'default'", "'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        dark: {
            type: Boolean
        },
        icon: {
            type: String,
            options: ["'mdi-information'", "'mdi-check-circle'", "'mdi-alert-circle'", "'mdi-close-circle'"]
        },
        iconColor: {
            type: String,
            options: ["'default'", "'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        fillDot: {
            type: Boolean
        },
        hideDot: {
            type: Boolean
        },
        large: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        small: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VToolbar: {
        absolute: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        class: {
            type: String
        },
        collapse: {
            type: Boolean
        },
        color: {
            type: String
        },
        dark: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        elevation: {
            type: "number | string"
        },
        extended: {
            type: Boolean
        },
        floating: {
            type: Boolean
        },
        prominent: {
            type: Boolean
        },
        short: {
            type: Boolean
        },
        src: {
            type: "object | string"
        },
        tag: {
            type: String
        },
        tile: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    VTreeview: {
        qValue: {
            type: "Array<any>"
        },
        active: {
            type: "Array<any>"
        },
        activatable: {
            type: Boolean
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        dense: {
            type: Boolean
        },
        expandIcon: {
            type: String
        },
        hoverable: {
            type: Boolean
        },
        itemChildren: {
            type: String
        },
        itemDisabled: {
            type: String
        },
        itemKey: {
            type: String
        },
        itemText: {
            type: String
        },
        items: {
            type: "Array<any>",
            editorDefaultValue: "[{name = 'test1', id = 1, children=[{name='test1 Child', id = 2}, {name='test2 Child', id = 3}]},{ name = 'test3', id = 4, children=[{name='test4 Child', id=5}]}]"
        },
        loadChildren: {
            type: Function,
        },
        loadingIcon: {
            type: String
        },
        multipleActive: {
            type: Boolean
        },
        offIcon: {
            type: String
        },
        onIcon: {
            type: String
        },
        open: {
            type: "Array<any>"
        },
        openAll: {
            type: Boolean
        },
        openOnClick: {
            type: Boolean
        },
        search: {
            type: String
        },
        selectable: {
            type: Boolean
        },
        selectedColor: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        selectionType: {
            type: String
        },
        shaped: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        },
        transition: {
            type: "string | boolean"
        },
    },
    QLabel: {
        class: {
            type: String,
                options: ["'devx-ellipsis-qlabel'"]
        },
        maxWidth: {
            type: String
        },
        overflow: {
            type: String
        },
        tagType: {
            type: String,
            editorDefaultValue: "'span'",
            options: ["'span'", "'paragraph'"]
        },
        text: {
            type: String,
            editorDefaultValue: "'Text'",
            note: "Use to set label text of field"
        },
        textOverflow: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        whiteSpace: {
            type: String
        },
        processHtml: {
            type: Boolean,
            editorDefaultValue: "false"
        },
    },
    QLegend: {
        QJsonPath: {
            type: String,
            editorDefaultValue: "'qjson://QLegend'",
            runTimeOverrideValue: "qjson://QLegend"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    QCaptcha: {
        QJsonPath: {
            type: String,
            editorDefaultValue: "'qjson://QCaptcha'",
            runTimeOverrideValue: "qjson://QCaptcha"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    QQRCode: {
        QJsonPath: {
            type: String,
            editorDefaultValue: "'qjson://QQRCode'",
            runTimeOverrideValue: "qjson://QQRCode"
        },
        content: {
            type: String,
            editorDefaultValue: "'https://studio.onplateau.com/quick/'"
        },
        size: {
            type: "string | number",
            editorDefaultValue: "10"
        },
        level: {
            type: String,
            editorDefaultValue: "'LOW'",
            options: ["'LOW'", "'MEDIUM'", "'QUARTILE'", "'HIGH'"]
        }
    },
    QRichText: {
        height: {
            type: String,
            editorDefaultValue: "'auto'",
        },
        minHeight: {
            type: String,
            editorDefaultValue: "'auto'",
        },
        ToolBarcolor: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean
        },
        buttonsHide: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    QDynamicFields: {
        QJsonPath: {
            type: String,
            editorDefaultValue: "'qjson://QDynamicFields'",
            runTimeOverrideValue: "qjson://QDynamicFields"
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
    },
    QDocumentViewer: {
        showToolBar: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        hidePagination: {
            type: Boolean,
            editorDefaultValue: "false"
        },
        hideDescription: {
            type: Boolean,
            editorDefaultValue: "false"
        },
        hideDownload: {
            type: Boolean,
            editorDefaultValue: "false"
        },
        hideRotate: {
            type: Boolean,
            editorDefaultValue: "false"
        },
        hideZoom: {
            type: Boolean,
            editorDefaultValue: "false"
        },
        fileDescription: {
            editorDefaultValue: "'File Description'",
            type: String
        },
        displayOnScroll: {
            type: Boolean,
            editorDefaultValue: "false"
        },
        src: {
            default: "",
            type: String
        },
        pdfToolbarBackgroundColor: {
            editorDefaultValue: "'#fafafa'",
            type: String
        },
        pdfBackgroundColor: {
            editorDefaultValue: "'#eeeeee'",
            type: String
        },
        height: {
            type: String
        },
        scale: {
            type: String
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tabindex: {
            type: "number | string"
        }
    },
    DxPaging: {
        pageSize: {
            type: Number,
            editorDefaultValue: '3'
        },
        pageIndex: {
            type: String
        },
        enabled: {
            type: Boolean
        },
        visible: {
            type: Boolean,
            editorDefaultValue: "true"
        }
    },
    QAnimation: {
        source: [String, Object],
        width: {
            type: Number,
            editorDefaultValue: 400
        },
        height: {
            type: Number,
            editorDefaultValue: 400
        },
        position: {
            type: String
        },
        top: {
            type: [String, Number],
        },
        right: {
            type: [String, Number],
        },
        bottom: {
            type: [String, Number],
        },
        zIndex: {
            type: [String, Number],
          },
        left: {
            type: [String, Number],
        }
    }
};


if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = componentOptions;
} else {
    window["plateauUIComponentOptions"] = componentOptions;
}
//#region JS Section