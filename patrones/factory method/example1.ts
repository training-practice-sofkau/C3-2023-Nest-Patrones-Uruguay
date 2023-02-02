interface IConexion {
    conectar(): void;
    desconectar(): void;
}

class ConexionMySQL implements IConexion{
    private host: string;
    private puerto: string;
    private usuario: string;
    private contraseña: string;

    constructor() {
        this.host = "localhost";
        this.contraseña = "123";
        this.puerto = "3306";
        this.usuario = "root";
    }
    conectar(): void {
        console.log("Se conectó a MySQL");
    }
    desconectar(): void {
        console.log("Se desconectó de MySQL");
    }
}

class ConexionMongoDB implements IConexion{
    private host: string;
    private puerto: string;
    private usuario: string;
    private contraseña: string;

    constructor() {
        this.host = "localhost";
        this.puerto = "27017 ";
        this.usuario = "root";
        this.contraseña = "456";
    }
    conectar(): void {
        console.log("Se conectó a MongoDB");
    }
    desconectar(): void {
        console.log("Se desconectó de MongoDB");
    }
}

class ConexionVacia implements IConexion {
    conectar(): void {
        console.log("Conexión no especificada.");
    }
    desconectar(): void {
        console.log("Conexión no especificada.");
    }
    
}

class ConexionFabrica {
    static obtenerConexion(db: string): IConexion {
        if (db === 'MySQL') {
            return new ConexionMySQL()
        } else if (db === 'MongoDB') {
            return new ConexionMongoDB()
        }
        return new ConexionVacia();
    }
}

let conexion1 = ConexionFabrica.obtenerConexion('MySQL');
conexion1.conectar();

let conexion2 = ConexionFabrica.obtenerConexion('MongoDB');
conexion2.conectar();

let conexion3 = ConexionFabrica.obtenerConexion('');
conexion3.conectar();