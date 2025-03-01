import Cl_mAsistente from "./Cl_mAsistente.js";
import Cl_vAsistente from "./Cl_vAsistente.js";

export default class Cl_vTaller{
constructor(){
        this.controlador=null;
        this.tabla=document.getElementById("mainForm_tabla");
        this.salida=document.getElementById("salida");
        this.vAsistente=new Cl_vAsistente();
        this.vAsistente.btProcesar.onclick=()=> this.controlador.procesarAsistente();
    }
    procesarAsistente(){
        this.mAsistente= new Cl_mAsistente({
            
            cedula: this.vAsistente.cedula,
            tipo: this.vAsistente.tipo,
            edad: this.vAsistente.edad,
        });
        return this.mAsistente;
    }
    reportarAsistente(grupoContensioso,totalRecabado,impuestoOrganizadores){
        this.tabla.innerHTML+=`<tr>
        <td>${this.mAsistente.cedula}</td>
        <td>${this.mAsistente.montoPagar}</td>
        
        
        </tr>`;
        this.salida.innerHTML=`
        El grupo mas numero es el de los: ${grupoContensioso}%<br>
        Total Recabado: ${totalRecabado}%<br>
        impuestoOrganizadores: ${impuestoOrganizadores()}%<br>
        
        `;
    }
}
