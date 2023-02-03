export interface StrategyPokemon {
    atack(): void;
}

export class Fuego implements StrategyPokemon {
    public atack(): void {
        console.log("El pokemon uso un ataque tipo fuego");
    }
}

export class Agua implements StrategyPokemon {
    public atack(): void {
        console.log("El pokemon uso un ataque tipo agua");
    }
}

export class Tierra implements StrategyPokemon {
    public atack(): void {
        console.log("El pokemon uso un ataque tipo tierra");
    }
}

export class Batalla {
    private strategyPokemon: StrategyPokemon;

    constructor(strategyPokemon: StrategyPokemon) {
        this.strategyPokemon = strategyPokemon;
    }

    public executeStrategy(): void {
        this.strategyPokemon.atack();
    }
}

let batalla: Batalla = new Batalla(new Fuego);
batalla.executeStrategy();

batalla = new Batalla(new Agua);
batalla.executeStrategy();