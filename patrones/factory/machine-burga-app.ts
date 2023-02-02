import { CreatorBurg } from "./abstrac-creator-burg";
import { CreatorBacon } from "./creator-bacon";
import { CreatorCheese } from "./creator-cheese";



function clientCode(pedido: string) {

    if(pedido === 'Bacon'){
        const bacon = new CreatorBacon();
        return bacon.burga();
        
    }if(pedido === 'Queso'){
        const queso = new CreatorCheese();
        return queso.burga();
    }
   
}

console.log('Creando tu hamburguesa!');
console.log(clientCode('Queso'));






