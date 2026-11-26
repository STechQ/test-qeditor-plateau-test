import { IPoint } from "../../../../flowInterfaces/editor/shape/IPoint";
import { ConnectionDirection, IStepPair } from "../../../../drawArea/types";
export interface IParallelBlockConnection {
    sourceStepID: string;
    output: string;
    direction: ConnectionDirection;
}
export interface IParallel {
    /**
     * Creates a `parallelSplit` and a `parallelJoin` sharing a fresh `blockId` as one undo step.
     * Quick-add can also connect the source step to the created split in the same operation.
     */
    addParallelBlock(point: IPoint, version: string, connection?: IParallelBlockConnection): void;
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