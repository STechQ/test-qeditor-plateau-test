import { AST } from 'lucene';
import { Filter, Document } from 'mongodb';
export declare class LuceneToMongoConverter<T extends Document = Document> {
    private defaultField;
    private parseNumbers;
    constructor(options?: {
        defaultField?: string;
    });
    convert(ast: AST): Filter<T>;
    private processNode;
    private processOperatorNode;
    private processRangeNode;
    private processTermNode;
    private parseValue;
    private escapeRegex;
}
//# sourceMappingURL=LuceneToMongoConverter.d.ts.map