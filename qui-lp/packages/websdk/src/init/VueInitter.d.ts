import Vue from 'vue';
import { IDomElement } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
export declare class VueInitter {
    static postProcess(renderer: any): void;
    static GenerateRootInstance({ mountPoint }: {
        mountPoint: IDomElement;
    }): Vue;
    private static addIconsStyle;
}
//# sourceMappingURL=VueInitter.d.ts.map