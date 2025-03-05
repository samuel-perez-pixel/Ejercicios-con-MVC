import Cl_mDonador from "./Cl_mDonador.js";
import Cl_vDonador from "./Cl_vDonador.js";

export default class Cl_vFundacion{
    constructor(){
        this.controlador=null;
        this.tabla=document.getElementById("mainForm_tabla");
        this.salida=document.getElementById("salida");
        this.vDonador=new Cl_vDonador();
        this.vDonador.btProcesar.onclick=()=> this.controlador.procesarDonador();
        this.inicialBs=document.getElementById("mainForm_inicialBs");
        this.inicialDolares=document.getElementById("mainForm_inicialDolares");
        this.tasaCambio=document.getElementById("mainForm_tasaCambio");
        this.btIniciar=document.getElementById("mainForm_btIniciar");
        this.btIniciar.onclick=()=>{ this.controlador.iniciarFundacion(this.inicialBs.value,this.inicialDolares.value,this.tasaCambio.value)};
    }
    procesarDonador(){
        this.mDonador= new Cl_mDonador({
            nombre:this.vDonador.nombre,
            Bs:this.vDonador.bs,
            dolares:this.vDonador.dolares
        });
        return this.mDonador;
    }
    reportarDonador(totalDolares,totalBolivares,mejorDonador){
        this.tabla.innerHTML+=`<tr>
        <td>${this.mDonador.nombre}</td>
        <td>${this.mDonador.totalDolares()}</td>
        <td>${this.mDonador.totalBolivares()}</td>
        </tr>`;
        this.salida.innerHTML=`
        Total Dolares: ${totalDolares}<br>
        Total Bolivares: ${totalBolivares}<br>
        Mejor Donador: ${mejorDonador}<br>
        `;
    }
}