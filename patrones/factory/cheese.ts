import { Hamburger } from "./i-hamburger";

export class Cheese implements Hamburger {

    public cocinando(): string {
        return 'hamburguesa con Cheese';
    }
}