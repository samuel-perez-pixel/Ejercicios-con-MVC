/*APORTES AMIGOS DCyT 
Los aportes a la asociación egresados del decanato se realizan en billetes de $5, $10 y $20. 
Cuando llega una persona a aportar proporciona su cédula y la cantidad de billetes que entregará 
de cada denominación. La administración guarda la cantidad de billetes por denominación 
acumulados hasta el día anterior. Se desea conocer el monto total aportado por cada persona, el 
total reunido en el día, el total incluyendo lo de días anteriores y el porcentaje de billetes de 20 
en relación a la cantidad total de billetes. 
Monto total aportado por la persona con cedula 12122344 20$ 
Monto total aportado por la persona con cedula 33144567 80$ 
Monto total aportado por la persona con cedula 31123456 85$ 
Total reunido en el día 410$ 
Porcentaje de billetes de 20: 27.77% 
 
La salida corresponde a los siguientes datos de la persona que aporta (cedula, cantidad billetes 
de 5$, cantidad de billetes de 10$, cantidad de billetes de 20$): (12122344, 2, 1, 0) 
(33144567,2,3,2) (31123456,1,2,3). 
Cantidad de billetes de 5$ acumulados hasta el día anterior: 5 
Cantidad de billetes de 10$ acumulados hasta el día anterior: 10 
Cantidad de billetes de 20$ acumulados hasta el día anterior: 5*/ 





import Cl_mDCYT from "./Cl_mDCYT.js";
import Cl_vDCYT from "./Cl_vDCYT.js";
import Cl_controlador from "./Cl_controlador.js";
 export default class Cl_principal{
    constructor(){ 
    let vista= new Cl_vDCYT();
    let modelo=new Cl_mDCYT();
    let controlador=new Cl_controlador(modelo,vista);
    vista.controlador=controlador;
 }}