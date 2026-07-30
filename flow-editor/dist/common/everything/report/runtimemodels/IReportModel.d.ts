/// <reference types="node" />
import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
import { VariableTypes } from "../../dataType/runtimemodels/types";
import { ReportModelType } from "./types";
export interface IReportModel extends IModelBaseFields {
    type: ReportModelType;
    name: string;
    desc: string;
    dataSources: IReportDataSources;
    columns: IReportColumn[];
    /** react-querybuilder RuleGroupType — UI durumu */
    filterRuleSet?: any;
    /** Derlenmiş MongoDB $match */
    filter?: Record<string, any>;
    runtimeParams?: IReportRuntimeParam[];
    groupBy?: string[];
    sort?: IReportSort[];
    pagination?: IReportPagination;
    chart?: IReportChart;
    table?: IReportTableConfig;
    export?: IReportExportConfig;
    permissions?: IReportPermissions;
    /** Raporu çalıştırmak için gereken privilege refId'leri (AND — kullanıcı
     *  HEPSİNE sahip olmalı). Boş/undefined = herkese açık. Workflow ile aynı.
     *  Format: `<<privilege:modelId>>:privId`. */
    privileges?: string[];
    /** Pega tarzı sub-report navigation (architecture §17) */
    drillDown?: IReportDrillDown;
}
export interface IReportDataSources {
    primary: IReportPrimarySource;
    joins: IReportJoin[];
}
export interface IReportPrimarySource {
    /** IDataTypeModel.id */
    dataTypeId: string;
    /** Alan prefix'i — örn. "process" */
    alias: string;
    /** Otomatik: DataType.persistency.collectionName */
    collectionName: string;
    /**
     * WFE_* (workflow) tabloları için collection prefix kaynağı.
     * Bir runtime input param adına maplenir. Dolu ve collection WFE_* ise
     * çalışma zamanında gerçek koleksiyon = `${runtimeParams[prefixParam]}_${collectionName}`.
     * Diğer persist DataType'lar bu alandan etkilenmez.
     */
    prefixParam?: string;
}
export type ReportJoinType = "left" | "inner";
export interface IReportJoin {
    id: string;
    dataTypeId: string;
    alias: string;
    collectionName: string;
    joinType: ReportJoinType;
    /** dot-notation — örn. "process._id" */
    localField: string;
    /** dot-notation — örn. "history.processInstanceId" */
    foreignField: string;
    /**
     * WFE_* (workflow) tabloları için collection prefix kaynağı (input param adı).
     * Bkz. IReportPrimarySource.prefixParam.
     */
    prefixParam?: string;
}
export type ReportAggregation = "sum" | "avg" | "min" | "max" | "count" | "push" | "addToSet" | "none";
/**
 * Array field'lar için reduction stratejisi.
 * MongoDB Atlas Charts "Array Reductions" pattern'ı.
 */
export type ReportArrayReduction = "unwind" | "length" | "elementByIndex" | "concat" | "minLength" | "maxLength" | "longest" | "first" | "last";
export interface IReportColumn {
    id: string;
    label: string;
    /** dot-notation — örn. "process.customerName" */
    fieldPath: string;
    sourceAlias: string;
    fieldType: VariableTypes;
    aggregation?: ReportAggregation;
    visible: boolean;
    width?: number;
    /** Format string — örn. "DD/MM/YYYY", "0.00" */
    format?: string;
    align?: "left" | "center" | "right";
    sortable?: boolean;
    /** TanStack column filter aktif */
    searchable?: boolean;
    /** Array/list alanı mı? */
    isList?: boolean;
    /** Array field reduction stratejisi */
    arrayReduction?: ReportArrayReduction;
    /** elementByIndex için index */
    arrayIndex?: number;
    /**
     * Computed Column — DB-bağımsız fonksiyon ağacı. Doluysa kolon değeri
     * runtime'da bu ifadeden hesaplanır (kaynak veri değişmez, yalnızca result
     * dönüşür). `fieldPath` ile birlikte kullanılmaz.
     * Bkz. docs/report-editor-computed-columns.md
     */
    computed?: IReportExpr;
}
/** Katalogdaki fonksiyonlar (yalnızca whitelist; ham $expr yok). */
export type ReportFnName = "Concat" | "ToString" | "DateFormat" | "Duration" | "Coalesce" | "If" | "Case" | "Contains" | "Eq" | "IsType" | "RelatedFirst" | "RelatedLast" | "Ne" | "Lt" | "Gt" | "Le" | "Ge" | "And" | "Or" | "Not";
export type IReportExpr = {
    kind: "field";
    path: string;
} | {
    kind: "literal";
    value: string | number | boolean | null;
} | {
    kind: "func";
    name: ReportFnName;
    args: IReportExpr[];
    opts?: Record<string, any>;
};
export type ReportRuntimeParamSource = "input" | "constant" | "context";
export type ReportRuntimeParamControl = "input" | "select" | "datepicker" | "multiselect";
export interface IReportRuntimeParam {
    paramName: string;
    label: string;
    type: VariableTypes;
    /** Expression tipine karşılık */
    source: ReportRuntimeParamSource;
    required: boolean;
    /** Statik defaultValue — Expression formatında saklanmaz, doğrudan değer */
    defaultValue?: any;
    controlType?: ReportRuntimeParamControl;
    options?: Array<{
        value: string;
        label: string;
    }>;
    /** Preview'da context mock için */
    mockValue?: any;
}
export interface IReportSort {
    field: string;
    direction: "asc" | "desc";
}
export interface IReportPagination {
    defaultPageSize: number;
    maxPageSize: number;
    pageSizeOptions: number[];
}
export interface IReportTableConfig {
    enableGlobalSearch: boolean;
    enableColumnSearch: boolean;
    enableMultiSort: boolean;
    enableColumnResize: boolean;
    enableColumnReorder: boolean;
    enableVirtualScroll: boolean;
    pageSize: number;
    density: "compact" | "comfortable" | "spacious";
}
export type ReportChartType = "bar" | "line" | "area" | "pie" | "scatter" | "heatmap" | "gauge" | "funnel";
export interface IReportChart {
    enabled: boolean;
    type: ReportChartType;
    /** Alan yolu */
    xAxis?: string;
    /** Multi-series alan yolları */
    yAxis?: string[];
    /** Series için group by alanı */
    seriesField?: string;
    showLegend?: boolean;
    showTooltip?: boolean;
    showDataZoom?: boolean;
    colorScheme?: string;
    /** Figma Appearance: Line serisi rengi */
    lineColor?: string;
    /** Figma Appearance: Data label metin rengi */
    labelColor?: string;
    /** Figma Appearance: Seri üzerinde değer etiketleri */
    showDataLabels?: boolean;
    /** Figma Appearance: Eksen/tick etiketleri */
    showAxisLabels?: boolean;
    height?: number;
    stacked?: boolean;
}
export interface IReportExportConfig {
    excel: {
        enabled: boolean;
        includeChart?: boolean;
    };
    pdf: {
        enabled: boolean;
        includeChart?: boolean;
        orientation?: "portrait" | "landscape";
    };
    csv: {
        enabled: boolean;
        delimiter?: "," | ";";
    };
    /** Örnek: "{reportName}_{date}" */
    fileNameTemplate?: string;
}
export interface IReportPermissions {
    /** Role ID'leri */
    view: string[];
    execute: string[];
    edit: string[];
}
export type ReportDrillDownTriggerType = "row-click" | "cell-click" | "context-menu";
export type ReportDrillDownOpenMode = "modal" | "new-tab" | "inline-panel";
export interface IReportDrillDown {
    enabled: boolean;
    triggers: IReportDrillDownTrigger[];
    /** Faz 2 — döngü koruması için max derinlik (architecture §17.4) */
    maxDepth?: number;
}
export interface IReportDrillDownTrigger {
    id: string;
    /** Menü etiketi — örn. "View Process Details" */
    label: string;
    triggerType: ReportDrillDownTriggerType;
    /** cell-click için hangi kolon */
    triggerColumn?: string;
    /** Açılacak sub-report'un IReportModel.id'si */
    targetReportId: string;
    paramMapping: IReportDrillDownParamMap[];
    openMode: ReportDrillDownOpenMode;
}
export interface IReportDrillDownParamMap {
    /** Sub-report'un runtimeParams içindeki adı */
    targetParamName: string;
    /** Aktif satırdaki değer — örn. "process._id" */
    sourceFieldPath: string;
}
export interface IExecuteReportRequest {
    reportId: string;
    runtimeParams?: Record<string, any>;
    pagination?: {
        page?: number;
        pageSize?: number;
        all?: boolean;
    };
    context?: Record<string, any>;
    format?: "json" | "excel" | "pdf" | "csv";
}
export interface IReportResult {
    columns: IReportColumn[];
    data: any[];
    total: number;
    executedAt: Date;
    file?: {
        buffer: Buffer;
        mimeType: string;
        fileName: string;
    };
}
//# sourceMappingURL=IReportModel.d.ts.map