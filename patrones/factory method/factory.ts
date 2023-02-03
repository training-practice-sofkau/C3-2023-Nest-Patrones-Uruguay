namespace FactoryMethodPattern {

    export interface AddOrSubstract {
        calculate(option: string): void;
    }

    export class FactoryAdd implements AddOrSubstract {
        calculate = (option: string) => {
            return "example 4 + 5 = 9";
        }
    }

    export class FactorySubstract implements AddOrSubstract {
        calculate = (option: string) => {
            return "example 4 - 5 = -1";
        }
    }

    export class FactoryMultiply implements AddOrSubstract {
        calculate = (option: string) => {
            return "example 4 * 5 = 20";
        }
    }


    export namespace Calculator {
        export function execute(type: string): AddOrSubstract {

            if (type === "A") {
                return new FactoryAdd()
            } else if (type === "B") {
                return new FactorySubstract()
            } else return new FactoryMultiply()
        }
    }

    const add = new FactoryAdd()
    const substract = new FactorySubstract()
    const multiply = new FactoryMultiply()

    console.log(add.calculate("A"));
    console.log(substract.calculate("B"));
    console.log(multiply.calculate("C"));
}