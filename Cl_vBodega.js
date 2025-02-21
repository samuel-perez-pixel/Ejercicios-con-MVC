import Cl_vArticulo from "./Cl_vArticulo.js";
import Cl_mArticulo from "./Cl_mArticulo.js";

export default class Cl_vBodega{
    constructor(){
        this.controlador=null;
        this.tabla=document.getElementById("mainForm_tabla");
        this.salida=document.getElementById("salida");
        this.vArticulo=new Cl_vArticulo();
        this.vArticulo.btProcesar.onclick=()=> this.controlador.procesarArticulo();
    }
    procesarArticulo(){
        this.mArticulo= new Cl_mArticulo({
            costo: this.vArticulo.costo
        });
        return this.mArticulo;
    }
    reportarArticulo(costo){
        this.tabla.innerHTML+=`<tr>
        <td>${costo}</td>
        </tr>`;
        this.salida.innerHTML=`
        Ganancia: ${this.controlador.Ganancia()}
        `;
    }
}
