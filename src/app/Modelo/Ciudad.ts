export class Ciudad {
    id?: number;
    codigo: number;
    departamento_id: number;
    nombre: string;

    constructor(codigo: number, departamento_id: number, nombre: string){
        this.codigo = codigo;
        this.departamento_id = departamento_id;
        this.nombre = nombre;
    }
}

