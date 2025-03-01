export default class Cl_vAsistente{
    constructor(){
        
        this.inCedula=document.getElementById("Asistenteform_inCedula");
        this.inTipo=document.getElementById("Asistenteform_inTipo");
        this.inEdad=document.getElementById("Asistenteform_inEdad");
        this.btProcesar=document.getElementById("Asistenteform_btProcesar");
    }
    
    get cedula(){return this.inCedula.value;}
    get tipo(){return this.inTipo.value;}
    get edad(){return this.inEdad.value;}
}