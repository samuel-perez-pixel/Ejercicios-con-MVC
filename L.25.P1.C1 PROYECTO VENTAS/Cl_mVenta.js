export default class Cl_mVenta{
    constructor({cliente,factura,costo,cnArticulos}){
        this.cliente=cliente;
        this.factura=factura;
        this.costo=costo;
        this.cnArticulos=cnArticulos;
    }
    set cliente (c){this._cliente=c;}
    set factura (f){this._factura=f;}
    set costo (cs){this._costo=+cs;}
    set cnArticulos (cA){this._cnArticulos=+cA;}
    get cliente(){return this._cliente;}
    get factura(){return this._factura;}
    get costo(){return this._costo;}
    get cnArticulos(){return this._cnArticulos;}
}