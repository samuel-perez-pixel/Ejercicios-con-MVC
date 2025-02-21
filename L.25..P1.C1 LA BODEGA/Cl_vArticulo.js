export default class Cl_vBodega{
    constructor(){
        this.inCosto=document.getElementById("Articuloform_inCosto");
        this.btProcesar=document.getElementById("Articuloform_btProcesar");
    }
    get costo(){return this.inCosto.value;}
}