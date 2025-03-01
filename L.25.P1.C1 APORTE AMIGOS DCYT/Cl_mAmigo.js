export default class ClmAmigo{
    constructor({cedula,billete5,billete10,billete20}){
        this.cedula=cedula;
        this.billete5=billete5;
        this.billete10=billete10;
        this.billete20=billete20;
    }

    set billete5(b5){this._billete5=b5;}
    set billete10(b10){this._billete10=b10;}
    set billete20(b20){this._billete20=b20;}
    get billete5(){return this._billete5;}
    get billete10(){return this._billete10;}
    get billete20(){return this._billete20;}

    montoTotal(){
        return this.billete5*5+this.billete10*10+this.billete20*20;
    }
}