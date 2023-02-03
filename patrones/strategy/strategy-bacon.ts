import { Bacon } from "../factory/bacon";
import { CreatorBacon } from "../factory/creator-bacon";
import { CreatorCheese } from "../factory/creator-cheese";
import { Hamburger } from "../factory/i-hamburger";
import { clientCode } from "../factory/machine-burga-app";
import { IEstrategy } from "./i-strategy";

export class StrategyBacon implements IEstrategy{
    
    
    option(): string {

        const bur = clientCode('Bacon')
        return bur.burga()    
    }    

}