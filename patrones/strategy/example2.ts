interface IDificultad {
    ejecutar(): void;
}

class Facil implements IDificultad {
    public ejecutar(): void {
        console.log('El juego está en modo facil');
    }
}

class Dificil implements IDificultad {
    public ejecutar(): void {
        console.log('El juego está en modo dificil');
    }
}


class MiContexto {
    private dificuktad: IDificultad;

    constructor(dificultad: IDificultad) {
        this.dificuktad = dificultad;
    }

    public ejecutarEstrategia(): void {
        this.dificuktad.ejecutar();
    }
}


let contexto: MiContexto = new MiContexto(new Dificil());

contexto.ejecutarEstrategia();

contexto = new MiContexto(new Facil());
contexto.ejecutarEstrategia();
