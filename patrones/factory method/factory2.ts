interface IMascota {
  crearMascota(): void;
  existir(): void;
}

class Dragon implements IMascota {
   
  crearMascota(): void {
    console.log("Se ha creado un dragon");
  }

  volar(): void {
    console.log("El dragon está volando");
  }

  respirarFuego(): void {
    console.log("El dragon está respirando fuego");
  }
  existir(): void {
    console.log("El dragon dejo de existir");
  }
}

class Cocodrilo implements IMascota {
  crearMascota(): void {
    console.log("Se ha creado un cocodrilo");
  }

  nadar(): void {
    console.log("El Cocodrilo está nadando");
  }

  comer(): void {
    console.log("El Cocodrilo está comiendo lo que parece ser una buena señal");
  }

  existir(): void {
    console.log("El cocodrilo aun existe");
  }
}

class Developer implements IMascota {
  crearMascota(): void {
    console.log("Se ha creado un developer");
    console.log(
      "Estadisticas basica del developer \n Pelo: 10 \n dolor de espalda: 10 \n novia: si  \n vida social: 10"
    );
  }

  desarrollar(): void {
    console.log("El developer esta desarrollando ");
    console.log("...");
    console.log("...");
    console.log("ERROR");
    console.log("Cambio en estadisticas del developer  ");
    console.log(   "Pelo: 5 \n dolor de espalda: 90 \n novia: a distancia   \n vida social: 3 "    );
    console.log("ERROR 404");
    console.log(
      "El developer sufrio un ataque cardiaco luego de olvidarse del WHERE EN EL DELETE FROM "
    );
  }

  programar(): void {
      console.log("PICANDO CODIGO ");
      console.log("ERROR 404");
      console.log("PICANDO CODIGO ");
      console.log("PICANDO CODIGO ");
      console.log("ERROR 404");
      console.log("NUEVO ERROR \n VAMOS AVANZANDO ");
    console.log("Se repite en bucle infinitamente  ");
  }

  existir(): void {
    console.log("El developer existe en el metaverso ");
  }
}

class FactoryMascota {
  static readonly DRAGON: string = "Dragon";
  static readonly COCODRILO: string = "Cocodrilo";
  static readonly DEVELOPER: string = "Developer";

  static crearMascota(entidad: string): IMascota {
    if (entidad === FactoryMascota.DRAGON) {
      return new Dragon();
    } else if (entidad === FactoryMascota.COCODRILO) {
      return new Cocodrilo();
    } else if (entidad === FactoryMascota.DEVELOPER) {
      return new Developer();
    } else {
      throw new Error("Entidad no válida");
    }
  }
}

const dragon: IMascota = FactoryMascota.crearMascota(FactoryMascota.DRAGON);
dragon.crearMascota();

if (dragon instanceof Dragon) {
  dragon.volar();
  dragon.respirarFuego();
  dragon.existir();
}

const cocodrilo: IMascota = FactoryMascota.crearMascota(
  FactoryMascota.COCODRILO
);
cocodrilo.crearMascota();
if (cocodrilo instanceof Cocodrilo) {
  cocodrilo.comer();
  cocodrilo.nadar();
  cocodrilo.existir();
}
const developer = FactoryMascota.crearMascota(FactoryMascota.DEVELOPER);
developer.crearMascota();
if (developer instanceof Developer) {
  developer.desarrollar();
  developer.programar();
  developer.existir();
}
