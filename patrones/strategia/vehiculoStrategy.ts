namespace StrategyPattern {
    export interface Vehiculo {
        Encender(): void;
    }

    export class Auto implements Vehiculo {
        public Encender(): void {
            console.log("Encender Auto");
        }
    }

    export class Camion implements Vehiculo {
        public Encender(): void {
            console.log("Encender Camion");
        }
    }

    export class Avion implements Vehiculo {
       public Encender(): void {
        console.log("Encender Avion");
        }
    }

    export class Context {
        private strategy: Vehiculo;

        constructor(strategy: Vehiculo) {
            this.strategy = strategy;
        }

        public executeStrategy(): void {
            this.strategy.Encender();
        }
    }

    const s = new Auto();
    const v = new Context(s);
    v.executeStrategy();
}