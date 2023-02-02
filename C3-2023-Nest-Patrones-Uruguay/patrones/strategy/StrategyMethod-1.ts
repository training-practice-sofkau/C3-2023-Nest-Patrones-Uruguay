//Strategy:
//Es un patron de diseño de comportamiento que nos permite seleccion e intercambiar cualquier algoritmo
// en cualqueir momento, define una familia de algoritmos encapsula cada uno y
// los hace intercambiables, el patron estrategia permite que los
// algoritmos varien independientemente del cliente que los utiliza
//PARA NO HACER USO DE SWITCH
//Serie de algoritmos que esten relacionados entre si, cuando la mayoria de las clases esten relacionados pero que sean diferentes
// Una clase por cada estrategia

interface IFormatoImagen {
    guardarImagen(nombre: string, formato: string): void;
}

class Jpeg implements IFormatoImagen {
    guardarImagen(nombre: string, formato: string): void {
        console.log(`Guardando imagen ${nombre} en formato JPEG`);
    }
}

class Png implements IFormatoImagen {
    guardarImagen(nombre: string, formato: string): void {
        console.log(`Guardando imagen ${nombre} en formato PNG`);
    }
}

class Contexto {
    private formatoImagen: IFormatoImagen;

    setFormatoImagen(formato: IFormatoImagen) {
        this.formatoImagen = formato;
    }

    guardar(nombre: string, formato: string): void {
        this.formatoImagen.guardarImagen(nombre, formato);
    }
}

const contexto = new Contexto();

contexto.setFormatoImagen(new Jpeg());
contexto.guardar("foto1", "jpeg");

contexto.setFormatoImagen(new Png());
contexto.guardar("foto2", "png");
