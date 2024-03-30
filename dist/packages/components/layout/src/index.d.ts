import type { PropType, CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    className: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: PropType<CSSProperties>;
        default: () => {};
    };
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    options: any;
    updateOptions: (cfg: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("changeLanguage" | "changeUserDropdown" | "changeOptions" | "tabsChange" | "tabsSelect" | "tabsClose")[], "changeLanguage" | "changeUserDropdown" | "changeOptions" | "tabsChange" | "tabsSelect" | "tabsClose", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    className: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: PropType<CSSProperties>;
        default: () => {};
    };
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    onChangeLanguage?: (...args: any[]) => any;
    onChangeUserDropdown?: (...args: any[]) => any;
    onChangeOptions?: (...args: any[]) => any;
    onTabsChange?: (...args: any[]) => any;
    onTabsSelect?: (...args: any[]) => any;
    onTabsClose?: (...args: any[]) => any;
}, {
    className: string;
    style: CSSProperties;
    options: Record<string, any>;
}, {}>;
export default _default;
