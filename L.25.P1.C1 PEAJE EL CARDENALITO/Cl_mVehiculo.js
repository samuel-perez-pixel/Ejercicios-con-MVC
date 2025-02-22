export default class Cl_Vehiculo{
    constructor({placa,tipo}){
      this.placa=placa;
      this.tipo=tipo;
    }
    set placa(p){this._placa=p;}
    set tipo(t){this._tipo=t;}
    get placa(){return this._placa;}
    get tipo(){return this._tipo;}
    tarifaPagar(){
      if(this.tipo==1){
        return 10
      }
      else if(this.tipo==2){
        return 20
      }
      else {return 50}
    }
  }