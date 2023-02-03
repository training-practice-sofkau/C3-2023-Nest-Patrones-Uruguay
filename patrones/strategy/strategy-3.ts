class HuevosPony {
    huevoPony(ponerHuevoPony: StrategyPony) {
        return new ponerHuevoPony();
    }
}

interface StrategyPony {
    new (): IStrategyPony;
}

interface IStrategyPony {
    metodoHuevo(): string
}

class PonyRosa implements IStrategyPony {
    metodoHuevo() {
        return 'Pony rosa pone huevo rosa';
    }
}

class PonyAzul implements IStrategyPony {
    metodoHuevo() {
        return 'Pony azul pone huevo azul';
    }
}


const huevitos = new HuevosPony()

console.log(huevitos.huevoPony(PonyRosa).metodoHuevo());
console.log(huevitos.huevoPony(PonyAzul).metodoHuevo());