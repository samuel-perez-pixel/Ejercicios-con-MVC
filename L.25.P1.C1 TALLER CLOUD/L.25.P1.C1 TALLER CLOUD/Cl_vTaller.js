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
    /**para el codigo lo q pusiste en la tabla son palabras sin sentido. debes indicar de donde estas llamando
     * y q estas llamando. dentro de ${} debes escribir  
     * this.(la inicializacion de la clase modelo menor(eso q tienes en este codigo en la linea 13 antes del igual)).(lo que quieras llamar)
     * no lleva parentecis, yo los coloque para hacerte una plantilla de lo q va. no lleva parentecir sino q va como te lo arregle.
     * Aparte q lo q va entre los parentecis del reportarAsistente no son los datos de la tabla, sino q van los de la salida.
     * tu colocaste  reportarAsistente(cedula,montoPagar,impuestoOrganizadores) y es como yo lo acomode y 
     * en la tabla sobraba el impuestoOrganizadores, ya q ese va es en la salida. aunque viendo el enunciado de este ejercicio esto 
     * no lleva tabla sino q todo va en la salida
     */
    reportarAsistente(grupoContensioso,totalRecabado,impuestoOrganizadores){
        this.tabla.innerHTML+=`<tr>
        <td>${this.mAsistente.cedula}</td>
        <td>${this.mAsistente.pagoTaller()}</td>
        </tr>`;

        this.salida.innerHTML=`
        El grupo mas numero es el de los: ${grupoContensioso}<br>
        Total Recabado: ${totalRecabado}<br>
        impuestoOrganizadores: ${impuestoOrganizadores}<br>
        `; /**no se porque en las 3 salidas  de aqui a todo le pusiste % al final si todos son montos netos, no porcentajes. */
    }
}
