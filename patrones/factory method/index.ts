interface Iforma{
    forma():void;
}
 
 class Circulo implements Iforma{   
    forma(): void {
       console.log("el circulo se ha dibujado")
    }
}
class Cuadrado implements Iforma{   
    forma(): void {
       console.log("el Cuadrado se ha dibujado")
    }
}
class Rectangulo implements Iforma{   
    forma(): void {
       console.log("el Rectangulo se ha dibujado")
    }
}

class Factorycreate{

    static readonly CIRCULO:string="CIRCULO"
    static readonly CUADRADO:string="CUADRADO"
    static readonly RECTANGULO:string="RECTANGULO"

    static create(entity:string){

        if(entity===Factorycreate.CIRCULO){
            return new Circulo()
        }
        else if(entity === Factorycreate.CUADRADO){
            return new Cuadrado()
        }
        else if(entity === Factorycreate.RECTANGULO){
            return new Rectangulo()
        }
        else {
             throw new Error("Entidad no válida")
        }
    }
}


const circulo:Iforma = Factorycreate.create(Factorycreate.CIRCULO)
circulo.forma()
