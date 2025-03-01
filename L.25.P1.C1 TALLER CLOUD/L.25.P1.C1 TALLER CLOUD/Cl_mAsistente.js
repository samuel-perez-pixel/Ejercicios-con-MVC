export default class Cl_mAsistente {

    constructor({ cedula, tipo, edad }) {
        this.cedula = cedula;
        this.tipo = tipo;
        this.edad = edad;
    }
    set cedula(c) { this._cedula = c; }
    set tipo(t) { this._tipo = t; }
    set edad(e) { this._edad = e; }
    get cedula() { return this._cedula; }
    get tipo() { return this._tipo; }
    get edad() { return this._edad; }

    pagoTaller() {
        if (this._tipo == 1) {
            return 10;
        }
        else if (this._tipo == 2) {
            return 15;
        }
        else {
            return 20;
        }
    }
}