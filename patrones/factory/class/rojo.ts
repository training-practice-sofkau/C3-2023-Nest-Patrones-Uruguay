import { CreateColor } from "../interfaces/createTypeAccount";

export class CreateRojo implements CreateColor{
   
    crear(color: string): void {
        return console.log(`Tu color es : ${color}`);
    }

}