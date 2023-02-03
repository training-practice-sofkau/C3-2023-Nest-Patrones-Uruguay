class PagoStrategy {
    monto(moneda: Strategy) {
        return new moneda();
    }
}

interface Strategy {
    new (): IStrategy;
}

interface IStrategy {
    metodoPago(): string
}

class Pesos implements IStrategy {
    metodoPago() {
        return 'Paga en pesos';
    }
}

class Dolar implements IStrategy {
    metodoPago() {
        return 'Paga en dolar';
    }
}


const CONTEXTO = new PagoStrategy()

console.log(CONTEXTO.monto(Pesos).metodoPago());
console.log(CONTEXTO.monto(Dolar).metodoPago());