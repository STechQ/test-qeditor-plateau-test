export declare class StringHelper {
    /** Function that count occurrences of a substring in a string;
     * @author Vitim.us https://gist.github.com/victornpb/7736865
     * @see http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string/7924240#7924240
     */
    static OccurenceCount(value: string, searchString: string, allowOverlapping?: boolean): number;
    static RepeatString(value: string, repeatCount: number): string;
    static TrimStart(str: string | undefined, removeString: string | undefined): string | undefined;
    static endsWith(self: string, search: string, this_len?: number): boolean;
    /**
     * Returns a random string
     * @param length Length of generated random string
     */
    static randomStringGenerator(length: Number): string;
    static capitalizeString(input: string): string;
    /**
     * Change char in string
     * @param str String that to be changed
     * @param index Index of string
     * @param chr Char
     */
    static setCharAt(str: string, index: number, chr: string): string;
}
//# sourceMappingURL=stringHelper.d.ts.map