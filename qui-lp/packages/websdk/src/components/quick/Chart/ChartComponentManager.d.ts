import { IComponent } from "../../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponent";
import { ICreatedComponent } from "../../../../../../common/shrimp/interfaces/ComponentInterfaces/ICreatedComponent";
import { IDictionary } from "../../../../../../common/shrimp/interfaces/IDictionary";
import { ComponentTarget } from "../../providers/ComponentProvider";
export declare class ChartComponentManager {
    constructor();
    createChildTypeChartComponent(props: IDictionary<any>, target: ComponentTarget, componentName: string, parentInstance: any): {
        instance: any;
        el: import("../../common/shrimp/interfaces/RenderingInterfaces/IDomElement").IDomElement;
    };
    createSlotTypeChartComponent(props: IDictionary<any>, target: ComponentTarget, componentName: string, retVal: ICreatedComponent, parentInstance: any): {
        createdComp: IComponent;
        retVal: ICreatedComponent;
    };
    private createInnerChart;
    private chartOptions;
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