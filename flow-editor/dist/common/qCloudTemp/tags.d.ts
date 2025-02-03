import { ICloudObject, ObjectID } from "./quickCloud";
export interface ITagValue {
    id: ObjectID;
    label: string;
    value: string;
    definitionSource: TagDefinitionSource;
    required: boolean;
    predefinedValues: string[];
    description: string;
}
export type TagType = {
    type: "freeText";
} | {
    type: "preDefined";
    viewType: "combo";
    values: string[];
};
export type TagDefinitionSource = "orgGroup";
export interface ITagDefinition extends ICloudObject {
    targets: {
        apps: {
            isRequired: boolean;
        };
    };
    type: TagType;
    description: string;
}
//# sourceMappingURL=tags.d.ts.map