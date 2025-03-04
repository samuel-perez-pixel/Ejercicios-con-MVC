import Cl_mVenta from "./Cl_mVenta.js";
import Cl_vVenta from "./Cl_vVenta.js";
export default class Cl_vTienda{
    constructor(){
        this.controlador=null;
        this.inicialCaja= document.getElementById("mainForm_inicialCaja");
        this.incremento= document.getElementById("mainForm_incremento");
        this.btIniciar= document.getElementById("mainForm_btIniciar");
        this.tabla= document.getElementById("mainForm_tabla");
        this.salida= document.getElementById("salida");
        this.vVenta=new Cl_vVenta();
        this.vVenta.btProcesar.onclick=()=> this.controlador.procesarVenta();
        this.btIniciar.onclick=()=>{ this.controlador.IniciarTienda(
            this.inicialCaja.value,
            this.incremento.value)};
    }

    procesarVenta(){
        this.mVenta= new Cl_mVenta({
            cliente: this.vVenta.cliente,
            factura: this.vVenta.factura,
            costo: this.vVenta.costo,
            cnArticulos: this.vVenta.cantidad
        });
        return this.mVenta;
    }
    reportarVenta(montoFinalCaja,clienteMayorMonto,cntClientes1articulo){
        this.tabla.innerHTML+=
        `
        <tr>
        <td>${this.mVenta.cliente}</td>
        <td>${this.mVenta.factura}</td>
        <td>${this.mVenta.costo}</td>
        <td>${this.mVenta.cnArticulos}</td>
        </tr>
        `
        this.salida.innerHTML=`
        Monto Final Caja: ${montoFinalCaja}<br>
        Cliente Mayor Monto: ${clienteMayorMonto}<br>
        Cantidad de Clientes con 1 Articulo: ${cntClientes1articulo}<br>
        `
    }
}