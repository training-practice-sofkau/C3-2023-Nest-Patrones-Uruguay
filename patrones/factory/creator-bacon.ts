import { CreatorBurg } from "./abstrac-creator-burg";
import { Bacon } from "./bacon";
import { Hamburger } from "./i-hamburger";

export class CreatorBacon extends CreatorBurg {

    public factoryMethodBurg(): Hamburger {
        //Burga con panceta
        return new Bacon();
    }
}