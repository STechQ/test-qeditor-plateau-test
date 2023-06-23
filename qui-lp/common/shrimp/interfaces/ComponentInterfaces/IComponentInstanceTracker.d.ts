import { IContextItem } from "../../context";
import { CType } from "./ICompJson";
import { IComponentCollection } from "./IComponentCollection";
import { ICreatedComponent } from "./ICreatedComponent";
export interface IComponentInstanceTracker extends IContextItem {
    TrackCompInstance(compData: {
        asChildType: CType | null;
        asChildName?: string;
        component: ICreatedComponent;
        compCollection: IComponentCollection;
        attrs: any;
        postRenderExecutor: (callBack: () => void) => void;
        isEditMode?: Boolean;
    }): void;
}
//# sourceMappingURL=IComponentInstanceTracker.d.ts.map