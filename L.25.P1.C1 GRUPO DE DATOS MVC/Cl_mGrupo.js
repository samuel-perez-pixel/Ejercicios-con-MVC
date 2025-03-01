export default class Cl_Grupo {
    constructor(){
        this.auxMayor=0;
        this.auxCodigo="";
        this.acumDato3=0;
    }
    procesarDato(d){
        this.acumDato3+=d.dato3();
        if(d.dato3()>this.auxMayor){
            this.auxMayor=d.dato3();
            this.auxCodigo=d.codigo;
        }
    }
    Promedio(){
        return this.auxCodigo;
    }
}