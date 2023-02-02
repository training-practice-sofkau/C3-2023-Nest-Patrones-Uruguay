interface IVehiculo {
    arrancar(): void;
}

interface IVehiculoFactory {
    crearVehiculo(tipo: string): IVehiculo;
}

class VehiculoFactory implements IVehiculoFactory {
    public crearVehiculo(tipo: string): IVehiculo {
        switch(tipo) {
            case "coche":
                return new Coche();
            case "moto":
                return new Moto();
            default:
                return new VehiculoVacio();
        }
    }
}

class VehiculoVacio implements IVehiculo {
    arrancar() {
        console.log("No se puede arrancar, no es un vehículo válido");
    }
}

class Coche implements IVehiculo {
    arrancar() {
        console.log("Arrancando el coche");
    }
}

class Moto implements IVehiculo {
    arrancar() {
        console.log("Arrancando la moto");
    }
}

const vehiculoFactory = new VehiculoFactory();
const coche = vehiculoFactory.crearVehiculo("coche");
coche.arrancar();

const moto = vehiculoFactory.crearVehiculo("moto");
moto.arrancar();

const bicicleta = vehiculoFactory.crearVehiculo("bicicleta");
bicicleta.arrancar();