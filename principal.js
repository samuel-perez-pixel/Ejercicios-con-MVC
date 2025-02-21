import Cl_vBodega from "./Cl_vBodega.js";
import Cl_mBodega from "./Cl_mBodega.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal{
    constructor(){
        let vista=new Cl_vBodega();
        let iniciaCosto= prompt("Ingrese el costo del articulo: ");
        let modelo=new Cl_mBodega(iniciaCosto);
        let controlador=new Cl_controlador(modelo,vista);
        vista.controlador=controlador;
    }
}