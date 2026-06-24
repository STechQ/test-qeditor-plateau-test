import { Dory } from "../Dory";
/**
 * Measures the TOTAL render time of a page (including its inner pages) and reports the OUTERMOST page only.
 *
 * A page render (top-level Dory page or a container DoryJr page) calls BeginPage at its start. Only the
 * outermost render in flight becomes the owner; inner pages rendered during it are ignored (return false).
 * The owner calls EndPage when its completion hook (PageCompletedHook / PageJrCompletedHook) fires, which
 * happens once the page AND all of its inner pages have finished rendering — so the measured span is the total.
 */
export declare class PerfMeasure {
    private static measuring;
    private static pageName;
    private static safetyTimer;
    private static enabled;
    private static initialized;
    /** Read the host enable flag once (at websdk/dory init), not on every render. */
    static Init(dory: Dory): void;
    /** Returns true to the outermost page render (the owner); nested page renders return false and are skipped. */
    static BeginPage(pageName: string): boolean;
    /** Finalize the owning page's measurement (total time incl. inner pages) and report it. */
    static EndPage(dory: Dory): void;
}
//# sourceMappingURL=PerfMeasure.d.ts.map