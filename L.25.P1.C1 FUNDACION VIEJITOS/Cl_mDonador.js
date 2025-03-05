import Cl_mFundacion from "./Cl_mFundacion.js";
export default class Cl_mDonador{
    constructor(nombre,Bs,dolares){
        this._nombre=nombre;
        this._Bs=Bs;
        this._dolares=dolares;
    }
    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre;
    }
    set Bs(b){
        this._Bs=+b;
    }
    get Bs(){
        return this._Bs;
    }
    set dolares(d){
        this._dolares=+d;
    }
    get dolares(){
        return this._dolares;
    }
    totalDolares(){
        return (this._Bs/40)+this._dolares;
    }
    totalBolivares(){
        return (this._dolares*40)+this._Bs;
    }
}