import { IShellConfiguration } from "../../interfaces/quick/IShellConfiguration";
type PerfKind = "network" | "qjson";
interface InnerPage {
    name: string;
    render: string;
    paint: string | null;
    network: string | null;
}
/** One page measurement. Top-level pages own a report; inner customComp pages contribute to the active top page. */
interface PageCtx {
    name: string;
    startTs: number;
    isTop: boolean;
    top?: PageCtx;
    innerPages: InnerPage[];
    ownQjsonMs?: number;
    renderText?: string;
    paintText?: string | null;
    entry?: InnerPage;
    parentName?: string;
}
/**
 * Page render/paint timing with nesting. The active TOP-LEVEL page collects inner customComp pages and is
 * reported once render activity settles (settleMs after the last EndPage) — this waits for inner customComps
 * that mount asynchronously AFTER the parent's engine-completion (e.g. Vuetify datagrid). Inner pages are
 * nested at their EndPage (render time available immediately); their paint is filled in later if it arrives
 * before the report. Each page's `network` is its own qjson fetch (wire time). Gated by getPerfMeasureInfo.
 */
export declare class PerfMeasure {
    private static enabled;
    private static initialized;
    private static host;
    private static currentTop;
    private static settleTimer;
    private static timings;
    static Init(shellConfigs: IShellConfiguration): void;
    /** Begin measuring a page render. Returns a context to hand to EndPage, or undefined for nameless renders. */
    static BeginPage(name: string, parentName?: string): PageCtx | undefined;
    /** Finalize a page: measure render, nest inner pages immediately, schedule paint, and arm the settle timer. */
    static EndPage(ctx: PageCtx | undefined): void;
    /**
     * Record an individual network/qjson timing: console line + global buffer (for qperfDump and own-qjson lookup)
     * + report to the host (sendPerfMeasureInfo, type "network") so requests are surfaced alongside page reports.
     */
    static AddTiming(kind: PerfKind, name: string, ms: number): void;
    static Dump(): void;
    private static findRecentQjson;
    /** Report the top-level page once render activity has settled (so late inner customComps are included). */
    private static armSettle;
    /** Paint = render start → pixels on screen (2× rAF). Fills the page's (or its inner entry's) paint value. */
    private static schedulePaint;
    /** Report a single network/qjson request to the host (mirrors the page report channel). */
    private static reportNetwork;
    private static reportPage;
}
export {};
//# sourceMappingURL=PerfMeasure.d.ts.map