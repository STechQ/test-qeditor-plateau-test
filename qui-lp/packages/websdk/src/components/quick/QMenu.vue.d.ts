import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    mini: boolean;
    resultList: ObjectConstructor[];
    innerClass: string;
    containes: boolean;
    classMenu: string | undefined;
}, {
    setTheme(): "primaryTheme" | "secondaryTheme" | "successTheme" | "errorTheme" | "warningTheme" | "white--text";
    isIconPathAvaliable(imagePath: any): boolean;
    isImagePathAvaliable(imagePath: any): boolean;
    setPrependIcon(imagePath: any): any;
    setIconSize(iconPath: any): {
        size: any;
        "x-small": boolean;
        small: boolean;
        large: boolean;
        "x-large": boolean;
        color: any;
    };
    setImageSize(imagePath: any): {
        height: any;
        width: any;
    };
    childrenSetActiveDefaultAsFalse(list: any): void;
    menuItemsLoop(list: any, clickedItem: any): void;
    isCurrentGroupContainsClickedItem(item: any, clickedItem: any): void;
    clickRow(item: Object, index: Number): void;
    calculatePadding(index: number, item: any): Number;
    collapseAll(activeList?: any): void;
    updateMini(isMini?: boolean | undefined): void;
    onClickGroup(): void;
}, unknown, {
    activeColor: string;
    width: string;
    miniVariantWidth: string;
    menuData: any;
    collapseOnItemSelect: boolean;
    disabled: boolean;
    hideMenuTitle: boolean;
    fixed: boolean;
    color: string;
    autoCollapse: boolean;
    title: string;
    showOnlyIcon: boolean;
    expandOnHover: boolean;
}>;
export default _default;
//# sourceMappingURL=QMenu.vue.d.ts.map