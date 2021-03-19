export class Departamento {
    id?: number;
    codigo: number;
    nombre: string;

    constructor(codigo: number, nombre: string){
        this.codigo = codigo;
        this.nombre = nombre;
    }
}

