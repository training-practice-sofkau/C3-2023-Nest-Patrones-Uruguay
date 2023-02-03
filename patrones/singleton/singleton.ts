
     export class Singleton {



        


        // Una variable que almacena el objeto singleton. Inicialmente,
        // la variable actúa como un marcador de posición
        private static singleton: Singleton;

        // constructor privado para que no se cree ninguna instancia
        private constructor() {
        }

        // Así es como creamos un objeto singleton
        public static getInstance(): Singleton {
            
            // compruebo si ya se ha creado una instancia de la clase
            if (!Singleton.singleton) {
                
                // almacena la instancia en la variable
                Singleton.singleton = new Singleton();
            }
            // return the singleton object
            return Singleton.singleton;
        }
    }