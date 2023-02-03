import { Singleton } from "../singleton/singleton";
import { CreatorBurg } from "./abstrac-creator-burg";
import { CreatorBacon } from "./creator-bacon";
import { CreatorCheese } from "./creator-cheese";



export function clientCode(pedido: string) {

    if(pedido === 'Bacon'){
        //return new CreatorBacon();
        const bacon = new CreatorBacon();
        return bacon.burga();
        
    }else if(pedido === 'Queso'){
        //return new CreatorCheese();
        const queso = new CreatorCheese();
        return queso.burga();
        
    }
   
}

console.log('Creando tu hamburguesa!');
console.log(clientCode('Queso'));

Singleton.getInstance();






