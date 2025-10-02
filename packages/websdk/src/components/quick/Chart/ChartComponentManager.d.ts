import { IComponent } from "../../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponent";
import { ICreatedComponent } from "../../../../../../common/shrimp/interfaces/ComponentInterfaces/ICreatedComponent";
import { IDictionary } from "../../../../../../common/shrimp/interfaces/IDictionary";
import { ComponentTarget } from "../../providers/ComponentProvider";
import 'chartjs-adapter-date-fns';
import { ContextManager } from "../../../../../../common/shrimp/context";
export declare class ChartComponentManager {
    readonly websdkContext: ContextManager;
    constructor(websdkContext: ContextManager);
    createChildTypeChartComponent(props: IDictionary<any>, target: ComponentTarget, componentName: string, parentInstance: any): {
        instance: any;
        el: import("../../common/shrimp/interfaces/RenderingInterfaces/IDomElement").IDomElement;
    };
    createSlotTypeChartComponent(props: IDictionary<any>, target: ComponentTarget, componentName: string, retVal: ICreatedComponent, parentInstance: any): {
        createdComp: IComponent;
        retVal: ICreatedComponent;
    };
    private createInnerChart;
    isShadowDOMEnabled(): boolean | undefined;
    chartResizer(chart: any, container: any): void;
    private chartOptions;
    private chartYTicksFont;
    private chartYPropSetter;
    private chartY1PropSetter;
    private chartXTicksFont;
    private chartXPropSetter;
    private chartXTimePropSetter;
    private chartXTimeDisplayFormatsPropSetter;
    private chartDataLabelsPropSetter;
    private chartDataLabelsPaddingPropSetter;
    private chartDataLabelsFontPropSetter;
    private chartPropSetter;
    private getDoughnutInsideTextPlugin;
}
//# sourceMappingURL=ChartComponentManager.d.ts.map