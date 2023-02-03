interface Pokemon{
    tipo(): void;
}

class Pikachu implements Pokemon{   
    tipo(): void {
        console.log("Picachu es tipo rayo")
    }
}
class Bulbasaur implements Pokemon{   
    tipo(): void {
        console.log("Bulbasaur es tipo planta")
    }
}
class Charmander implements Pokemon{   
    tipo(): void {
        console.log("Charmander es tipo fuego")
    }
}

class FactoryPokemon{

    static readonly pikachu: string
    static readonly bulbasaur: string
    static readonly charmander: string

    static create(entity: string ){

        if(entity === FactoryPokemon.pikachu){
            return new Pikachu()
        }
        else if(entity === FactoryPokemon.bulbasaur){
            return new Bulbasaur()
        }
        else if(entity === FactoryPokemon.charmander){
            return new Charmander()
        } throw new Error("Entidad no válida")  
    }
}


const tipoPokemon = FactoryPokemon.create(FactoryPokemon.pikachu)
tipoPokemon.tipo()