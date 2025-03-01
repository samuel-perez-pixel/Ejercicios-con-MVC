export default class Cl_controlador{
    constructor(modelo,vista){
        this.modelo=modelo;
        this.vista=vista;
    }
    procesarAsistente(){
        this.modelo.procesarAsistente(this.vista.procesarAsistente());
        this.vista.reportarAsistente(
            this.modelo.grupoContensioso(),
            this.modelo.totalRecabado(),
            this.modelo.impuestoOrganizadores(),
            
        );
    }
}