import Cl_mVehiculo from "./Cl_mVehiculo.js";
import Cl_vVehiculo from "./Cl_vVehiculo.js";

export default class Cl_vPeaje{
    constructor(){
        this.controlador=null;
        this.tabla=document.getElementById("mainForm_tabla");
        this.salida=document.getElementById("salida");
        this.vVehiculo=new Cl_vVehiculo();
        this.vVehiculo.btProcesar.onclick=()=> this.controlador.procesarVehiculo();
    }
    procesarVehiculo(){
        this.mVehiculo= new Cl_mVehiculo({
            placa: this.vVehiculo.placa,
            tipo: this.vVehiculo.tipo
        });
        return this.mVehiculo;
    }
    reportarVehiculo(porcentajeParticular,porcentajeTransporte,porcentajeCarga,montoMunicipal){
        this.tabla.innerHTML+=`<tr>
        <td>${porcentajeParticular}</td>
        <td>${porcentajeTransporte}</td>
        <td>${porcentajeCarga}</td>
        <td>${montoMunicipal}</td>
        </tr>`;
        this.salida.innerHTML=`
        Porcentaje Particular: ${porcentajeParticular}%<br>
        Porcentaje Transporte: ${porcentajeTransporte}%<br>
        Porcentaje Carga: ${porcentajeCarga}%<br>
        Monto Municipal: ${montoMunicipal}<br>
        `;
    }
}