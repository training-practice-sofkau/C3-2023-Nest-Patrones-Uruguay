interface Pago{
    pago(): void;
}

class Credito implements Pago{   
    pago(): void {
        console.log("Se pago con targeta de credito")
    }
}
class Debito implements Pago{   
    pago(): void {
        console.log("Se pago con tarjeta de debito")
    }
}
class Moneda implements Pago{   
    pago(): void {
        console.log("Se pago con moneda real")
    }
}

class Factorycreate{

    static readonly credito: string
    static readonly debito: string
    static readonly moneda: string

    static create(entity: string ){

        if(entity === Factorycreate.credito ){
            return new Credito()
        }
        else if(entity === Factorycreate.debito){
            return new Debito()
        }
        else if(entity === Factorycreate.moneda){
            return new Moneda()
        } throw new Error("Entidad no válida")  
    }
}


const pagoCredito = Factorycreate.create(Factorycreate.credito)
pagoCredito.pago()