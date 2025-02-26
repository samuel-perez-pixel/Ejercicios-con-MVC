export default class Cl_mTaller{
    constructor(){
        this.cntEstudiantes=0;
        this.cntProfesores=0;
        this.cntInvitados=0;
        this.auxMayor=0;
        this.acumRecabado=0;
    }
    procesarAsistente(a){
        this.acumRecabado+=a.pagoTaller();
        // contar estudiantes, profesores e invitados
        if(a.tipo==1){this.cntEstudiantes++;}
        else if(a.tipo==2){this.cntProfesores++;}
        else if(a.tipo==3){this.cntInvitados++;}
        
    }
    grupoContensioso(){
        if(this.cntEstudiantes>this.cntInvitados && this.cntEstudiantes>this.cntProfesores){
            return "Estudiante";
        }
        else if(this.cntInvitados>this.cntEstudiantes && this.cntInvitados>this.cntProfesores){
            return "Invitado";
        }
        else if(this.cntProfesores>this.cntEstudiantes && this.cntProfesores>this.cntInvitados){
            return "Profesor";
        }
        else{
            return "Igual de asistencia";
        }
    }
    totalRecabado(){
        return this.acumRecabado;
    }
    impuestoOrganizadores(){
        return (this.acumRecabado*30)/100;
    }
}