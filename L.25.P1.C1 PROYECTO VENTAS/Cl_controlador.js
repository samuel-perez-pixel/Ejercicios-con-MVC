export default class Cl_controlador{
    constructor(modelo,vista){
        this.modelo=modelo;
        this.vista=vista;
    }
    procesarVenta(){
        this.modelo.procesarVenta(this.vista.procesarVenta());
        this.vista.reportarVenta(
            this.modelo.montoFinalCaja(),
            this.modelo.clienteMayorMonto(),
            this.modelo.cntClientes1articulo()
        );
    }
    IniciarTienda(inicialCaja,incremento){
        this.modelo.montoInicialCaja=inicialCaja;
        this.modelo.porcentajeIncremento=incremento;
    }
}