//Patron Factory:
//Le da la responsabilidad de instancias o creacion a una clase especifica, como la Factory
//La factoria es la encargada de la instanciacion de las clases 

interface Forma {
    dibujar(): void;
  }
  
  class Circulo implements Forma {
    public dibujar(): void {
      console.log("Dibujando un círculo");
    }
  }
  
  class Rectangulo implements Forma {
    public dibujar(): void {
      console.log("Dibujando un rectángulo");
    }
  }

  class Cuadrado implements Forma {
    public dibujar(): void {
      console.log("Dibujando un cuadrado");
    }
  }

  class Octogono implements Forma {
    public dibujar(): void {
      console.log("Dibujando un octogono");
    }
  }
  
  class FabricaDeFormas {
    public static obtenerForma(tipoDeForma: string): Forma | null {
      if (tipoDeForma === "Círculo") {
        return new Circulo();
      } else if (tipoDeForma === "Rectángulo") {
        return new Rectangulo();
      }else if (tipoDeForma === "Cuadrado"){
        return new Cuadrado();
      }else if (tipoDeForma === "Octogono"){
        return new Octogono();
      }
      return null;
    }
  }
  
  const fabricaDeFormas = new FabricaDeFormas();
  const forma1 = FabricaDeFormas.obtenerForma("Círculo");
  if (forma1) {
    forma1.dibujar();
  }
  const forma2 = FabricaDeFormas.obtenerForma("Rectángulo");
  if (forma2) {
    forma2.dibujar();
  }
  const forma3 = FabricaDeFormas.obtenerForma("Cuadrado");
  if(forma3){
    forma3.dibujar()
  }
  const forma4 = FabricaDeFormas.obtenerForma("Octogono");
  if(forma4){
    forma4.dibujar()
  }