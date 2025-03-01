import Cl_mGrupo from "./Cl_mGrupo.js";
import Cl_vGrupo from "./Cl_vGrupo.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal{
    constructor(){
        let vista=new Cl_vGrupo();
        let modelo=new Cl_mGrupo();
        let controlador=new Cl_controlador(modelo,vista);
        vista.controlador=controlador;
    }
}