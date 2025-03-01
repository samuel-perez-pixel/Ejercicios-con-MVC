export default class Cl_controlador{
    constructor(modelo,vista){
        this.modelo=modelo;
        this.vista=vista;
    }
    procesarDato(){
        this.modelo.procesarDato(this.vista.procesarDato());
    this.vista.reporteDato(this.modelo.Promedio());
}
}