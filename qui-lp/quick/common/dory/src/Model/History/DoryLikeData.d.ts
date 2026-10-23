import { IComponentCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { Dory } from "../../Dory";
import { DoryJr } from "../../DoryJr";
export declare class DoryLikeData {
    private ownerDoryLike;
    private createrComp?;
    private compUIDPrefix?;
    constructor(ownerDoryLike: Dory | DoryJr, options: {
        creatorComp?: IComponentCollection;
        compUIDPrefix?: string;
    });
    GetCompUIDPrefix(): string;
    get OwnerDoryLike(): Dory | DoryJr;
    GetCreaterRenderingComponent(): IComponentCollection | undefined;
    GetCreatorComponent(): IComponentCollection | undefined;
    GetCreaterComp(): IComponentCollection | undefined;
}
//# sourceMappingURL=DoryLikeData.d.ts.map