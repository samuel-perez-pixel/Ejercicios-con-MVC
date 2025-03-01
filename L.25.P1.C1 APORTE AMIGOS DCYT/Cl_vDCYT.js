import Cl_mAmigo from "./Cl_mAmigo.js";
import Cl_vAmigo from "./Cl_vAmigo.js";
export default class Cl_vDCYT {
    constructor() {
        this.controlador = null;
        this.IniciaConBilletesde5= document.getElementById("mainForm_IniciaConBilletesde5");
        this.IniciaConBilletesde10= document.getElementById("mainForm_IniciaConBilletesde10");
        this.IniciaConBilletesde20= document.getElementById("mainForm_IniciaConBilletesde20");
        this.btIniciar = document.getElementById("mainForm_btIniciar");
        this.tabla = document.getElementById("mainForm_tabla");
        this.salida = document.getElementById("salida");
        this.vAmigo = new Cl_vAmigo();
        this.vAmigo.btProcesar.onclick = () => this.controlador.procesarAmigo();
        this.vAmigo.btProcesar.hidden = true;
        this.btIniciar.onclick=()=>{
            this.controlador.iniciarDCYT(this.IniciaConBilletesde5.value,this.IniciaConBilletesde10.value,this.IniciaConBilletesde20.value);
            this.IniciaConBilletesde5.disableb=true;
            this.IniciaConBilletesde10.disableb=true;
            this.IniciaConBilletesde20.disableb=true;
            this.vAmigo.btProcesar.hidden=false;
        };
    }
    procesarAmigo(){
        this.mAmigo=new Cl_mAmigo({
            cedula: this.vAmigo.cedula,
            billete5: this.vAmigo.billete5,
            billete10: this.vAmigo.billete10,
            billete20: this.vAmigo.billete20,
        });
        return this.mAmigo;
    }
    reportarAmigo(totalFinalDia,totalFinalTotal,porcentajeBilletes20){
        this.tabla.innerHTML+=`<tr>
        <td>${this.mAmigo.cedula}</td>
        <td>${this.mAmigo.montoTotal()}</td>
        </tr>`;
        this.salida.innerHTML=`
        Total Final Dia: ${totalFinalDia}<br>
        Total Final Total: ${totalFinalTotal}<br>
        Porcentaje Billetes 20: ${porcentajeBilletes20}%<br>
        `;  
    }
}