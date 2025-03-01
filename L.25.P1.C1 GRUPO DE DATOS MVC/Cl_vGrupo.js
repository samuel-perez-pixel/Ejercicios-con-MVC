import Cl_mDato from "./Cl_mDato.js";
import Cl_vDato from "./Cl_vDato.js";

export default class{
    constructor(){
        this.controlador=null;
        this.tabla=document.getElementById("mainForm_tabla");
        this.salida=document.getElementById("salida");
        this.vDato=new Cl_vDato();
        this.vDato.btProcesar.onclick=()=> this.controlador.procesarDato();
    }
    procesarDato(){
        this.mDato=new Cl_mDato({
            codigo:this.vDato.codigo,
            dato1:this.vDato.dato1,
            dato2:this.vDato.dato2
        })
        return this.mDato;
    }
    reporteDato(Promedio){
        this.tabla.innerHTML+=`<tr>
        <td>El grupo ${this.mDato.codigo} tiene un promedio de:${this.mDato.dato3()}</td>
        </tr>`
        this.salida.innerHTML=`Promedio: El grupo con mayor promedio es:${Promedio}`
    }
}