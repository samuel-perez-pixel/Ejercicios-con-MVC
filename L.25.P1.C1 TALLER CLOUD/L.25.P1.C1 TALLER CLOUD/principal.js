/*TALLER CLOUD IDEs 
Se desea llevar un control de los asistentes al taller de programación en la nube, para lo cual 
se tiene los siguientes datos por participante: cédula, tipo (1=estudiante, 2=profesor, 3=invitado) 
y edad. Los estudiantes pagan $10, los profesores $15 y los invitados $20. Se requiere determinar 
el monto a pagar por cada participante, cuál es el tipo de participante más cuantioso, el total 
recabado, y el impuesto que pagan los organizadores del taller, sabiendo que es el 30% de lo 
vendido. 
Al ser consultada por la forma como desean que se presente la salida, se suministra el siguiente 
formato, sobre la base de los siguientes datos: 
(cedula, tipo participante, edad) 
(23111906, 1, 17) 
(14567890, 2, 45) 
(16556788, 3, 25) 
(23456789, 1, 18) 

Monto a pagar por el participante con cedula 23111906 10$ 
Monto a pagar por el participante con cedula 14567890 15$ 
Monto a pagar por el participante con cedula 16556788 20$ 
Monto a pagar por el participante con cedula 23456789 10$ 
Tipo de participante más cuantioso es Estudiante 
Total recabado 55$ 
Impuesto que pagan los organizadores del taller 16.5$ */
import Cl_mTaller from "./Cl_mTaller.js";
import Cl_vTaller from "./Cl_vTaller.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal{
    constructor(){
        let vista=new Cl_vTaller();
        /** let cedula = prompt("Ingrese su cedula: ");
        let tipo = prompt("Ingrese el tipo de participante: 1=estudiante, 2=profesor, 3=invitado: ");
        let edad = prompt("Ingrese su edad: ");**//**ninguno de estos promt van, eso ya no se usa en MVC,  */
        let modelo=new Cl_mTaller();/**en el modelo mayor no se inicializa nada, pusiste los datos de la clase menor aqui */
        let controlador=new Cl_controlador(modelo,vista);
        vista.controlador=controlador;
    }
}