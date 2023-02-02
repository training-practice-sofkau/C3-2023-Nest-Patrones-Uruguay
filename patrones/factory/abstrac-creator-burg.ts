import { Hamburger } from "./i-hamburger";

export abstract class CreatorBurg {
  
    public abstract factoryMethodBurg(): Hamburger; 

   
    public burga(): string {
       
        const product = this.factoryMethodBurg();
       
        return "Espero que te guste tu: " + product.cocinando();
    }
}







