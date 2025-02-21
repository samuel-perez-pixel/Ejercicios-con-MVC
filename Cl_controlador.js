export default class Cl_controlador{
    constructor(modelo,vista){
        this.modelo=modelo;
        this.vista=vista;
    }
    procesarArticulo(){
        this.modelo.procesarArticulo(this.vista.procesarArticulo());
        this.vista.reportarArticulo(this.modelo.Ganancia());
    }
}