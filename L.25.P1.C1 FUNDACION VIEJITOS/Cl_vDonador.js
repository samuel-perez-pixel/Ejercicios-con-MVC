export default class Cl_vDonador{
    constructor(){
        this.inNombre=document.getElementById("Donadorform_inNombre");
        this.inBs=document.getElementById("Donadorform_inBs");
        this.inDolares=document.getElementById("Donadorform_inDolares");
        this.btProcesar=document.getElementById("Donadorform_btProcesar");
    }
    get nombre(){return this.inNombre.value;}
    get Bs(){return +this.inBs.value;}
    get dolares(){return +this.inDolares.value;}
}