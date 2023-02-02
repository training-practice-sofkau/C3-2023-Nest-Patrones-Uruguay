namespace StrategyPattern {
    export interface Triatlon {
        execute(): void;
    }

    export class Run implements Triatlon {
        public execute(): void {
            console.log("A correr!");
        }
    }

    export class Swim implements Triatlon {
        public execute(): void {
            console.log("A nadar!");
        }
    }

    export class Bicicle implements Triatlon {
        public execute(): void {
            console.log("A rodar!");
        }
    }

    export class Context {
        private strategy: Triatlon;

        constructor(strategy: Triatlon) {
            this.strategy = strategy;
        }

        public executeStrategy(): void {
            this.strategy.execute();
        }
    }    

    new Context(new Run()).executeStrategy()
    new Context(new Swim()).executeStrategy()
    new Context(new Bicicle()).executeStrategy()
    
}