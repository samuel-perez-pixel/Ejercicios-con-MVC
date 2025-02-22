export default class Cl_Peaje{
    constructor(){
      this.cntTipo1=0;
      this.cntTipo2=0;
      this.cntTipo3=0;
      this.acumTarifa1=0;
      this.acumTarifa2=0;
      this.acumTarifa3=0;
    }
    procesarVehiculo(v){
      // Contando los vehiculos
      if(v.tipo==1){
        this.cntTipo1++;
      }
      else if(v.tipo==2){
        this.cntTipo2++;
      }
      else{this.cntTipo3++;}
      // Acumulando las tarifas
      if(v.tipo==1){
        this.acumTarifa1+=10;
      }
      else if (v.tipo==2){
        this.acumTarifa2+=20;
      }
      else {this.acumTarifa3+=50;}
    }
    porcentajeParticular(){
      return (this.cntTipo1*100)/(this.cntTipo1+this.cntTipo2+this.cntTipo3);
    }
    porcentajeTransporte(){
      return (this.cntTipo2*100)/(this.cntTipo1+this.cntTipo2+this.cntTipo3);
  }
    porcentajeCarga(){
      return (this.cntTipo3*100)/(this.cntTipo1+this.cntTipo2+this.cntTipo3);
  }
    montoMunicipal(){
      return (this.acumTarifa1+this.acumTarifa2+this.acumTarifa3)*(40/100);
    }
  }