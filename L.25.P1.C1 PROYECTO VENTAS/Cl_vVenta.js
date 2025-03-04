export default class Cl_vVenta{
    constructor(){
        this.inCliente=document.getElementById("Ventaform_inCliente");
        this.inFactura=document.getElementById("Ventaform_inFactura");
        this.inCosto=document.getElementById("Ventaform_inCosto");
        this.inCantidad=document.getElementById("Ventaform_incntArticulos");
        this.btProcesar=document.getElementById("Ventaform_btProcesar");
    }
    get cliente(){return this.inCliente.value;}
    get factura(){return this.inFactura.value;}
    get costo(){return +this.inCosto.value;}
    get cantidad(){return +this.inCantidad.value;}
}