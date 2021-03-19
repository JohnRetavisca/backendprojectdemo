export class Direccion {
    id?: number;
    numerocalle: number;
    nombrecalle: string;
    ciudad: string;
    departamento: string;
    codpostal: number;

    constructor(numerocalle: number, nombrecalle: string, ciudad: string, departamento: string, codpostal: number){
        this.numerocalle = numerocalle;
        this.nombrecalle = nombrecalle;
        this.ciudad = ciudad;
        this.departamento = departamento;
        this.codpostal = codpostal;
    }
}

