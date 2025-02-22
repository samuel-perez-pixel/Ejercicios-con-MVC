import Cl_mPeaje from "./Cl_mPeaje.js";
import Cl_vPeaje from "./Cl_vPeaje.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal{
    constructor(){
        let vista=new Cl_vPeaje();
        let placa = prompt("Ingrese la placa del vehiculo: ");
        let tipo = prompt("Ingrese el tipo del vehiculo: ");
        let modelo=new Cl_mPeaje(placa,tipo);
        let controlador=new Cl_controlador(modelo,vista);
        vista.controlador=controlador;
    }
}