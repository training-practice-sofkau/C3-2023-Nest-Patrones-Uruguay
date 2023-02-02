import { CreatorBurg } from "./abstrac-creator-burg";
import { Cheese } from "./cheese";
import { Hamburger } from "./i-hamburger";

export class CreatorCheese extends CreatorBurg {
  
    public factoryMethodBurg(): Hamburger {
        //Burga con queso
        return new Cheese();
    }
}