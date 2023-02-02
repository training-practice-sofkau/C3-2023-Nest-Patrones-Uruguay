import { CreateColor } from "../interfaces/createTypeAccount";

export class CreateAzul implements CreateColor{
   
    crear(color: string): void {
        return console.log(`Tu color es : ${color}`);
    }

}