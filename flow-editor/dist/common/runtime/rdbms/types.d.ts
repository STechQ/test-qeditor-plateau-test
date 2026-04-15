export type RdbmsType = 'Oracle' | 'SqlServer';
export interface IExecuteResult {
    rows?: any[][];
    rowsAffected?: number;
    /** SQL Server INSERT ... OUTPUT INSERTED.id için */
    identity?: number;
}
export interface IRdbmsConnection {
    /** Query çalıştırır. Parametreler :paramName formatında (SqlServer için @paramName'e dönüştürülür). */
    execute(query: string, params?: Record<string, any>): Promise<IExecuteResult>;
    commit(): Promise<void>;
    release(): Promise<void>;
}
export interface IRelationship {
    sourceTable: string;
    targetTable: string;
    sourceColumn: string;
    targetColumn: string;
    path: string;
    key: string;
}
export interface ITableDef {
    columns: string[];
    columnTypes: Record<string, string>;
    primaryKey: string;
    sequenceName?: string;
    fieldToColumn: Record<string, string>;
}
export interface IDbModel {
    tables: Record<string, ITableDef>;
    relationships: IRelationship[];
}
export interface IMongoToRdbmsModel {
    processId: string;
    rootTableName: string;
    rdbmsType: RdbmsType;
    model: IDbModel;
    updatedAt: Date;
}
export interface IExecutedDDL {
    cacheKey: string;
    ddlStatement: string;
}
//# sourceMappingURL=types.d.ts.map