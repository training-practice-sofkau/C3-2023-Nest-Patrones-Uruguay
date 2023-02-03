interface IFruta {
    nombre: string;
}


class FrutaConcreta implements IFruta {
    nombre = '';
}


class Manzana extends FrutaConcreta {
    constructor() {
        super()
        this.nombre = 'Manzana'
    }
}

class Mandarina extends FrutaConcreta {
    constructor() {
        super()
        this.nombre = 'Mandarina'
    }
}

class Banana extends FrutaConcreta {
    constructor() {
        super()
        this.nombre = 'Banana'
    }
}


class Fabrica {
    static crearFruta(nombre: string): IFruta {
        if (nombre === 'Manzana') {
            return new Manzana()
        } else if (nombre === 'Mandarina') {
            return new Mandarina()
        } else {
            return new Banana()
        }
    }
}


const FRUTA1 = Fabrica.crearFruta('Manzana')
console.log(FRUTA1.nombre)

const FRUTA2 = Fabrica.crearFruta('Mandarina')
console.log(FRUTA2.nombre)

const FRUTA3 = Fabrica.crearFruta('Banana')
console.log(FRUTA3.nombre)