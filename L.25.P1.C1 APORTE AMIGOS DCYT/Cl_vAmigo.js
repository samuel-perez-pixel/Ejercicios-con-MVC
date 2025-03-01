export default class Cl_vAmigo{
    constructor(){
        this.inCedula=document.getElementById("Amigoform_inCedula");
        this.inBillete5=document.getElementById("Amigoform_inBillete5");
        this.inBillete10=document.getElementById("Amigoform_inBillete10");
        this.inBillete20=document.getElementById("Amigoform_inBillete20");
        this.btProcesar=document.getElementById("Amigoform_btProcesar");
    }
    get cedula(){return this.inCedula.value;}
    get billete5(){return +this.inBillete5.value;}
    get billete10(){return +this.inBillete10.value;}
    get billete20(){return +this.inBillete20.value;}
}