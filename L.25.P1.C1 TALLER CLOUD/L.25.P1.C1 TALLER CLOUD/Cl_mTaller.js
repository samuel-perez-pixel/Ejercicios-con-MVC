export default class Cl_mTaller {
    constructor() {
        this.cntEstudiantes = 0;
        this.cntProfesores = 0;
        this.cntInvitados = 0;
        this.auxMayor = 0;
        this.acumRecabado = 0;
    }
    procesarAsistente(a) {
        this.acumRecabado += a.pagoTaller();
        // contar estudiantes, profesores e invitados
        if (a.tipo == 1) { this.cntEstudiantes++; }
        else if (a.tipo == 2) { this.cntProfesores++; }
        else if (a.tipo == 3) { this.cntInvitados++; }

    }
    grupoContensioso() {
        if (this.cntEstudiantes > this.cntInvitados && this.cntEstudiantes > this.cntProfesores) {
            return "Estudiante";
        }
        else if (this.cntInvitados > this.cntEstudiantes && this.cntInvitados > this.cntProfesores) {
            return "Invitado";
        }
        else if (this.cntProfesores > this.cntEstudiantes && this.cntProfesores > this.cntInvitados) {
            return "Profesor";
        }/**faltan if para la igual asistencia de 2 de los 3 tipos */
        else if (this.cntProfesores = this.cntEstudiantes && this.cntProfesores > this.cntInvitados) {
            return "Profesor y estudiantes";
        }
        else if (this.cntProfesores = this.cntInvitados && this.cntProfesores > this.cntEstudiantes) {
            return "Profesor e Invitados";
        }
        else if (this.cntInvitados = this.cntEstudiantes && this.cntInvitados > this.cntProfesores) {
            return "Estudiantes e Invitados";
        }
        else {
            return "Igual de asistencia";
        }

    }
    totalRecabado() {
        return this.acumRecabado;
    }
    impuestoOrganizadores() {
        return (this.acumRecabado * 30) / 100;
    }
}