import { CreateColor } from "../interfaces/createTypeAccount";

export class CreateAmarrillo implements CreateColor{
   
    crear(color: string): void {
        return console.log(`Tu color es : ${color}`);
    }

}