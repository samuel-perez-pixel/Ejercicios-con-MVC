export default class Cl_vVehiculo{
    constructor(){
        this.inPlaca=document.getElementById("Vehiculoform_inPlaca");
        this.inTipo=document.getElementById("Vehiculoform_inTipo");
        this.btProcesar=document.getElementById("Vehiculoform_btProcesar");
    }
    get placa(){return this.inPlaca.value;}
    get tipo(){return +this.inTipo.value;}
}