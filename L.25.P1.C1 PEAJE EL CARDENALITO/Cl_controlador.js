export default class Cl_controlador{
    constructor(modelo,vista){
        this.modelo=modelo;
        this.vista=vista;
    }
    procesarVehiculo(){
        this.modelo.procesarVehiculo(this.vista.procesarVehiculo());
        this.vista.reportarVehiculo(
            this.modelo.porcentajeParticular(),
            this.modelo.porcentajeTransporte(),
            this.modelo.porcentajeCarga(),
            this.modelo.montoMunicipal(),
        );
    }
}