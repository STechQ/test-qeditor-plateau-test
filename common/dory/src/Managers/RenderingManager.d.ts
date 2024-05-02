import { QJsonManagerForAIService } from "../../../shrimp/helpers/AIServiceHelper/QJsonManagerForAIService";
import { PageScripting } from "../../../shrimp/helpers/scripting/PageScripting";
import { TypeHelper } from "../../../shrimp/helpers/typeHelper";
import { CType, ICompJson } from "../../../shrimp/interfaces/ComponentInterfaces/ICompJson";
import { IComponentCollection } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
import { IRenderingManager } from "../../../shrimp/interfaces/RenderingInterfaces/IRenderingManager";
import { ScriptLang } from "../../../shrimp/interfaces/Scripting/scriptLang";
import { ContextManager } from "../../../shrimp/src/context/contextManager";
import { BlockInfo } from "../Context/BlockInfo";
import { ComponentCommunicator } from "../Helpers/ComponentCommunicator";
import { Evaluator } from "./Evaluator";
export declare class RenderingManager implements IRenderingManager {
    static ContextName: string;
    contextName: string;
    pjson: Array<ICompJson | null>;
    context: ContextManager;
    controlDict: IDictionary<IComponentCollection>;
    controlList: Array<IComponentCollection>;
    evaluator: Evaluator;
    compCommunicator: ComponentCommunicator;
    typeHelper: TypeHelper;
    blockInfo: BlockInfo;
    private dataItem;
    private asChildType;
    private asChildName?;
    private QLang?;
    private parentCompCollection?;
    private compareCompValue;
    private dynamicCompIDSuffix?;
    private pageScrtipting?;
    private qjsonVersion?;
    QJsonManagerForAIService: QJsonManagerForAIService | undefined;
    constructor({ pjson, context, dataItem, asChildType, asChildName, controlDict, qLang, parentCompCollection, compareCompValue, dynamicCompIDSuffix, pageScripting, qjsonVersion }: {
        pjson: Array<ICompJson | null>;
        context: ContextManager;
        dataItem?: object | null;
        asChildType?: CType;
        asChildName?: string;
        controlDict: IDictionary<IComponentCollection>;
        qLang?: ScriptLang;
        parentCompCollection?: IComponentCollection;
        compareCompValue: boolean;
        dynamicCompIDSuffix?: string;
        pageScripting?: PageScripting;
        qjsonVersion?: number;
    });
    private getLang;
    private WillRender;
    private CalculatePropValue;
    private GenerateProps;
    private GenerateEvents;
    /**
     * Generate directives of the component. Collect them into DirectiveCollection on directives fields.
     * Set handler method which has been set already on ctrl with the same name event.
     * @param ctrl ICompJson of the component
     * @param directives Directive collection of the component. Get all the directives from this collection
     */
    private GenerateDirectives;
    private CalculateStyle;
    private matchTheme;
    private matchThemeFonts;
    private generatePropsFromStyle;
    private getItemValue;
    private GenerateChildren;
    private isEditMode;
    private getComponentParentInstance;
    RenderRoot(): Promise<void>;
    Render(jsonIndexParam: number): void;
    private overrideChildStylesFromParent;
    private removeReservedFields;
    /**
     * Error component property setter function
     * @param props Property dictionary that will be used for error component
     * @param componentName Which component has not rendered
     * @param componentID PropertyID of component that was not rendered
     * @param errorMessage Message that will be prompted
     * @returns void
     */
    private setErrorComponentProperties;
    private Chain;
    /**
     * Create a new error component when a acomponent creation is failed in somehow
     * @param ctrl Failed component json
     * @param e Message of the error
     * @param props New error component properties
     * @param events New error component events
     * @param compCollection Will be created component collection
     * @param jsonIndex Index of failed render length
     * @param parentInstance Parent of the failed component
     * @param component Wİll be created component instance
     */
    private createErrorComp;
}
//# sourceMappingURL=RenderingManager.d.ts.map