export default class Cl_vDato{
    constructor(){
        this.inCodigo=document.getElementById("Datoform_inCodigo");
        this.inDato1=document.getElementById("Datoform_inDato1");
        this.inDato2=document.getElementById("Datoform_inDato2");
        this.btProcesar=document.getElementById("Datoform_btProcesar");
    }
    get codigo(){return this.inCodigo.value;}
    get dato1(){return +this.inDato1.value;}
    get dato2(){return +this.inDato2.value;}
}