export default class Cl_mFundacion{
    constructor(inicialBs,inicialDolares,tasaCambio){
        this.inicialBs=inicialBs;
        this.inicialDolares=inicialDolares;
        this.tasaCambio=tasaCambio;
        this.auxMayor=null;
        this.auxNombre="";
        this.acumDolares=0;
        this.acumBs=0;
    }
    set inicialBs(inicialBs){
        this._inicialBs=+inicialBs;
    }
    get inicialBs(){
        return this._inicialBs;
    }
    set inicialDolares(inicialDolares){
        this._inicialDolares=+inicialDolares;
    }
    get inicialDolares(){
        return this._inicialDolares;
    }
    set tasaCambio(tasaCambio){
        this._tasaCambio=+tasaCambio;
    }
    get tasaCambio(){
        return this._tasaCambio;
    }
    procesarDonador(d){
        this.acumDolares+=d.totalDolares();
        this.acumBs+=d.totalBolivares();
        if(d.totalDolares()>this.auxMayor && d.totalBolivares()>this.auxMayor){
            this.auxMayor=d.totalDolares();
            this.auxNombre=d.nombre;
        }
    }
    totalDolares(){
        return this._inicialDolares+this.acumDolares;
    }
    totalBolivares(){
        return this._inicialBs+this.acumBs;
    }
    mejorDonador(){
        return this.auxNombre;
    }
}