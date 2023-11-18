export declare interface DictData {
    readonly value: string | number;
    readonly label: string;
}
export declare interface Column {
    readonly prop: string;
    label: string;
    type?: string;
    placeholder?: string;
    dicData?: DictData[];
    loadDicData?: Function;
    disabled?: boolean;
    defaultValue?: any;
    labelWidth?: string | number;
    multiple?: boolean;
    prefix?: Function;
    suffix?: Function;
    prepend?: Function;
    append?: Function;
    sort?: number;
    required?: boolean;
    span?: number;
    tableSelect?: any;
    onChange?: Function;
}
export interface SearchColumnProps extends Column {
    searchType?: string;
    searchSort?: number;
    searchLabel?: string;
    searchLabelWidth?: string | number;
    searchDefaultValue?: any;
    searchDisabled?: boolean;
    searchMultiple?: boolean;
    searchFormat?: string;
    searchDisabledDate?: string;
    searchEditable?: boolean;
    searchShortcuts?: any;
    searchMin?: number;
    searchMax?: number;
    searchPlaceholder?: string;
    searchPrefix?: Function;
    searchSuffix?: Function;
    searchPrepend?: Function;
    searchAppend?: Function;
    searchDicData?: DictData[];
    onChangeSearch?: Function;
}
export interface FormColunmProps extends Column {
    formSort?: number;
    formType?: string;
    formDefaultValue?: any;
    formPlaceholder?: string;
    formDisabled?: string;
    formRequired?: boolean;
    formHide?: boolean;
    formPrefix?: Function;
    formSuffix?: Function;
    formPrepend?: Function;
    formAppend?: Function;
    formSpan?: number;
    formTip?: string;
    formLabel?: string;
    formMutiple?: boolean;
    formDivider?: any;
    formRemark?: string;
    formRules?: any[];
    formDicData?: DictData[];
    formLoadDicData?: Function;
    onChangeForm?: Function;
}
export interface TableColumnProps extends SearchColumnProps, FormColunmProps {
    expand?: string;
    width?: string | number;
    minWidth?: string | number;
    fixed?: string | boolean;
    formatter?: Function;
    showOverflowTooltip?: boolean | object;
    headerAlign?: string;
    align?: string;
    hide?: boolean;
    sortable?: boolean;
    children?: TableColumnProps[];
}
export declare const header_menu_slots_key: string[];
export declare const operation_column_slots_key: string[];
declare const _default: {
    initLoadData: boolean;
    defaultContentHeight: number;
    fullscreenchangeContentHeight: boolean;
    rowKey: string;
    size: string;
    fit: boolean;
    stripe: boolean;
    border: boolean;
    index: boolean;
    selection: boolean;
    headerAlign: string;
    cellAlign: string;
    columnMinWidth: string;
    columns: unknown;
    showSearchForm: boolean;
    showHeaderMenu: boolean;
    searchSpan: number;
    searchGutter: number;
    searchLabelWidth: string;
    searchColumnMinWidth: number;
    searchColumn: unknown;
    searchMore: boolean;
    addBtn: boolean;
    viewBtn: boolean;
    delBtn: boolean;
    editBtn: boolean;
    batchDelBtn: boolean;
    refreshBtn: boolean;
    settingBtn: boolean;
    operations: boolean;
    operationsWidth: number;
    operationsBtnPlain: boolean;
    operationsBtnText: boolean;
    operationsBtnSize: string;
    addBtnText: string;
    isPagination: boolean;
    dialogTitle: string;
    dialogWidth: string;
    dialogFullscreen: boolean;
    closeOnClickModal: boolean;
    formColumns: unknown;
    formLabelWidth: string;
    formSpan: number;
    formColumnMinWidth: number;
};
export default _default;
