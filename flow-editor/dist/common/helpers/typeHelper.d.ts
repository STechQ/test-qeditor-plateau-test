export type OmitTyped<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type UnionKeyof<T> = T extends any ? keyof T : never;
type IsPlainObject<T> = T extends object | undefined ? (T extends any[] ? false : true) : false;
export type NestedUnionKeyof<ObjectType> = ObjectType extends any ? {
    [Key in keyof ObjectType & (string | number)]: IsPlainObject<ObjectType[Key]> extends true ? Key | `${Key}.${NestedUnionKeyof<NonNullable<ObjectType[Key]>>}` : `${Key}`;
}[keyof ObjectType & (string | number)] : never;
export {};
//# sourceMappingURL=typeHelper.d.ts.map