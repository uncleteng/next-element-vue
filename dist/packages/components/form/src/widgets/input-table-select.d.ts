declare const InputTableSelect: import("vue").DefineComponent<{
    modelValue: {
        type: (ArrayConstructor | StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
        default: () => any[];
    };
    column: {
        type: ObjectConstructor;
        default: () => {};
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (ArrayConstructor | StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
        default: () => any[];
    };
    column: {
        type: ObjectConstructor;
        default: () => {};
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onSelect?: (...args: any[]) => any;
}, {
    modelValue: string | number | boolean | Record<string, any> | unknown[];
    column: Record<string, any>;
    disabled: boolean;
}, {}>;
export default InputTableSelect;