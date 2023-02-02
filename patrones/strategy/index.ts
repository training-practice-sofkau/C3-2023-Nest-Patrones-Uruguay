namespace strategyMethod {
    export interface strategy {
        calcular(a: number, b: number): number;
    }

    export class Suma implements strategy {
        public calcular(a: number, b: number): number {
            return a + b;
        }
    }

    export class Resta implements strategy {
        public calcular(a: number, b: number): number {
            return a - b;
        }
    }

    export class Multiplicación implements strategy {
        public calcular(a: number, b: number): number {
            return a * b;
        }
    }

    export class dividir implements strategy {
       public  calcular(a: number, b: number): number {
            return a/b
        }
        
    };

    export class calculo {
        private cuenta: strategy;

        constructor(Stategy: strategy) {
            this.cuenta = Stategy;
        }

        public cuentas(a: number, b: number): number {
            return this.cuenta.calcular(a, b);
        }
    }
 
     "le pasamos la estrategia y hacemos el calculo  en este caso suma"
    let cuenta = new strategyMethod.calculo(new strategyMethod.Suma());

    console.log(cuenta.cuentas(1,2))


    "le pasamos la estrategia y hacemos el calculo  en este caso resta"

     cuenta = new strategyMethod.calculo(new strategyMethod.Resta());

    console.log(cuenta.cuentas(4,5))

    "le pasamos la estrategia y hacemos el calculo  en este caso multipicacion"

    cuenta = new strategyMethod.calculo(new strategyMethod.Multiplicación());

    console.log(cuenta.cuentas(8,5))

    "le pasamos la estrategia y hacemos el calculo  en este caso divicion"

    cuenta = new strategyMethod.calculo(new strategyMethod.dividir());

    console.log(cuenta.cuentas(4,5))

    "le pasamos la estrategia y hacemos el calculo  en este caso divicion pero mas alta "

    cuenta = new strategyMethod.calculo(new strategyMethod.dividir());

    console.log(cuenta.cuentas(41 / 500))
 
}
