import { CreateAmarrillo } from "./class/amarrillo";
import { CreateAzul } from "./class/azul";
import { CreateRojo } from "./class/rojo";
import { CreateColor } from "./interfaces/createTypeAccount";


export function creando(color: string):CreateColor{

    if (color === "Rojo") {
        return new CreateRojo();
    } else if (color === "Azul") {
        return new CreateAzul();
    }else return new CreateAmarrillo();
    
}

const amarillo = new CreateAmarrillo();
const azul = new CreateAzul();
const rojo = new CreateRojo();

amarillo.crear("Amarrillo");
azul.crear("Azul");
rojo.crear("Rojo");


