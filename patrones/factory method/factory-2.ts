interface Pony {
    huevo: string;
}

class PoneHuevo implements Pony {
    huevo = '';
}

class Rosa extends PoneHuevo {
    constructor() {
        super()
        this.huevo = 'Rosa'
    }
}

class Azul extends PoneHuevo {
    constructor() {
        super()
        this.huevo = 'Azul'
    }
}

class Amarillo extends PoneHuevo {
    constructor() {
        super()
        this.huevo = 'Amarillo'
    }
}

class FactoryHuevo {
    static ponerHuevo(huevo: string): Pony {
        if (huevo === 'Rosa') {
            return new Rosa()
        } else if (huevo === 'Azul') {
            return new Azul()
        } else {
            return new Amarillo()
        }
    }
}

const newHuevo = FactoryHuevo.ponerHuevo('Rosa')
console.log(newHuevo.huevo)

const newHuevo2 = FactoryHuevo.ponerHuevo('')
console.log(newHuevo2.huevo)