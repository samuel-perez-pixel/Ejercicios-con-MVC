import Cl_mVenta from "./Cl_mVenta.js";
export default class Cl_mTienda{
    constructor(montoInicialCaja=0,porcentajeIncremento=0){
        this.montoInicialCaja=montoInicialCaja;
        this.porcentajeIncremento=porcentajeIncremento;
        this.acumCosto=0;
        this.mayorMonto=null;
        this.auxMayorcliente='';
        this.cntClientes1art=0;
    }
    set montoInicialCaja(miC){this._montoInicialCaja=+miC;}
    set porcentajeIncremento(pi){this._porcentajeIncremento=+pi;}
    get montoInicialCaja(){return this._montoInicialCaja;}
    get porcentajeIncremento(){return this._porcentajeIncremento;}

    procesarVenta(v){
        // Acumulando los costos de las ventas
        this.acumCosto+=(v.costo+(v.costo*(this.porcentajeIncremento/100)));
        // Contando los clientes que compraron 1 articulo
        if(v.cnArticulos==1){
            this.cntClientes1art++;
        }
        // cliente que pagó el monto mayor
        if(v.costo>this.mayorMonto){
            this.mayorMonto=v.costo;
            this.auxMayorcliente=v.cliente;
        }    
    }
    
    montoFinalCaja(){
        return this.montoInicialCaja+this.acumCosto; 
    }
    clienteMayorMonto(){
        return this.auxMayorcliente;
    }
    cntClientes1articulo(){
        return this.cntClientes1art;
    }
}