//Dependiendo el tipo que le indiquemos crea un tipo de producto u otro

interface IProduct {
    ensamblar(): void;
}

interface IAppleFactory {
    dispensar(tipo: string): IProduct
}

class AppleFactory implements IAppleFactory {
    public dispensar(tipo:string): IProduct{
        switch(tipo){
            case "iPhone":
                return new Iphone();
            case "iPad":
                return new Ipad();
            default:
                return new CajaVacia();    
        }
    }

}
class CajaVacia implements IProduct { //hereda
    constructor(){
        this.ensamblar();
    }

    ensamblar() {
        console.log("Aqui tienes tu caja vacia")
    }        
}

class Iphone implements IProduct {
    constructor(){
        this.ensamblar();
    }

    ensamblar() {
        console.log("Aqui tienes tu nuevo Iphone")
    }
}

class Ipad implements IProduct {
    constructor(){
        this.ensamblar();
    }

    ensamblar() {
        console.log ("Aqui tienes tu nuevo IPad")
    }
}

const iphone = new AppleFactory();
iphone.dispensar("iPhone");

const ipad = new AppleFactory();
ipad.dispensar("iPad");

const macbook = new AppleFactory();
macbook.dispensar("macbook");

