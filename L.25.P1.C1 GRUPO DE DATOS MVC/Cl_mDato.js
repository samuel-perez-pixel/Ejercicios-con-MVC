export default class Cl_Dato{
    constructor({codigo,dato1,dato2}){
        this._codigo=codigo;
        this._dato1=dato1;
        this._dato2=dato2;
    }
    set codigo(codigo){this._codigo=codigo;}
    set dato1(d1){this._dato1=+d1;}
    set dato2(d2){this._dato2=+d2;}
    get codigo(){return this._codigo;}
    get dato1(){return this._dato1;}
    get dato2(){return this._dato2;}
    dato3(){
        return (this._dato1+this._dato2)/2
    }
}