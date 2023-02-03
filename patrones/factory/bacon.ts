import { Hamburger } from "./i-hamburger";

export class Bacon implements Hamburger {
    
    public cocinando(): string {
        return 'hamburguesa con bacon!';
    }
}