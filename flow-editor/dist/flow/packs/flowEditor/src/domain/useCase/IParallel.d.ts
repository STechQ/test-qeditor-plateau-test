import { IPoint } from "../../../../flowInterfaces/editor/shape/IPoint";
import { IStepPair } from "../../../../drawArea/types";
export interface IParallel {
    /**
     * Palette drop of "Split/Join": creates a `parallelSplit` and a `parallelJoin` sharing a fresh
     * `blockId`, unconnected, as a single undo step.
     */
    addParallelBlock(point: IPoint, version: string): void;
    /** Creates the missing half of an orphaned block, reusing its `blockId`. No connection is drawn. */
    createMissingPair(stepID: string): void;
    /** Id of the step that closes (or opens) this one's block, when it exists. */
    findPairStepId(stepID: string): string | undefined;
    /** Every complete split/join pair in the model, for the canvas to link on hover. */
    getAllPairs(): Array<IStepPair>;
    /** True when the step is one half of a parallel block whose other half is missing. */
    isOrphan(stepID: string): boolean;
    /** Gives pasted splits/joins a fresh `blockId`, shared by the halves pasted together. */
    remapPastedBlocks(idMap: Record<string, string>): void;
}
export declare const IParallel: unique symbol;
//# sourceMappingURL=IParallel.d.ts.map