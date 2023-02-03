
import { IEstrategy } from "./i-strategy";
import { StrategyBacon } from "./strategy-bacon";

export class App {

    private strategy: IEstrategy ;

    constructor(strategy: IEstrategy ) {
        this.strategy = strategy;
    }

    public executeStrategy(): void {
        this.strategy.option();
    }

}


const bacon = new StrategyBacon();
const app = new App(bacon);

const cheesse = new StrategyBacon();
const app2 = new App(cheesse);

console.log(app2.executeStrategy());