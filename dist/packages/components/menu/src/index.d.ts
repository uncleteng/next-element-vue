import type { PropType, CSSProperties } from 'vue';
import type { MenuItemInterface } from './interface';
declare const _default: import("vue").DefineComponent<{
    className: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: PropType<CSSProperties>;
        default: () => {};
    };
    router: {
        type: BooleanConstructor;
        default: boolean;
    };
    mode: {
        type: PropType<"horizontal" | "vertical">;
        values: string[];
        default: string;
    };
    menuTree: {
        type: PropType<MenuItemInterface[]>;
        default: () => any[];
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    className: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: PropType<CSSProperties>;
        default: () => {};
    };
    router: {
        type: BooleanConstructor;
        default: boolean;
    };
    mode: {
        type: PropType<"horizontal" | "vertical">;
        values: string[];
        default: string;
    };
    menuTree: {
        type: PropType<MenuItemInterface[]>;
        default: () => any[];
    };
}>>, {
    className: string;
    style: CSSProperties;
    router: boolean;
    mode: "horizontal" | "vertical";
    menuTree: MenuItemInterface[];
}, {}>;
export default _default;
