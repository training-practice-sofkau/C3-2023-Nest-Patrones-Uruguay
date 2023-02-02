class Contexto {
    peticion(estrategia: IConstructorEstrategia) {
        return new estrategia();
    }
}

interface IConstructorEstrategia {
    new (): IEstrategia;
}

interface IEstrategia {
    metodo(): string
}

class EstretegiaA implements IEstrategia {
    metodo() {
        return 'Esta es la estrategia A';
    }
}

class EstretegiaB implements IEstrategia {
    metodo() {
        return 'Esta es la estrategia B';
    }
}


const CONTEXTO = new Contexto()

console.log(CONTEXTO.peticion(EstretegiaA).metodo());
console.log(CONTEXTO.peticion(EstretegiaB).metodo());
