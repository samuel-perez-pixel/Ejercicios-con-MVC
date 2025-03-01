export default class Cl_mDCYT {
    constructor(cntBilletes5=0,cntBilletes10=0,cntBilletes20=0){
        this.cntBilletes5=cntBilletes5;
        this.cntBilletes10=cntBilletes10;
        this.cntBilletes20=cntBilletes20;
        this.cntAmigobillete20=0;
        this.cntAmigobillete10=0;
        this.cntAmigobillete5=0;
        this.acumDia=0;

    }
    procesarAmigo(a){
        //contar billetes
        if(a.billete5>0){this.cntAmigobillete5+=a.billete5;}
        if(a.billete10>0){this.cntAmigobillete10+=a.billete10;}
        if(a.billete20>0){this.cntAmigobillete20+=a.billete20;}
        //acumular dia
        this.acumDia+=a.montoTotal();
    }
    totalFinalDia(){
        return this.acumDia;
    }
    totalFinalTotal(){
        return (this.cntBilletes5*5+this.cntBilletes10*10+this.cntBilletes20*20)+this.acumDia;
    }
    porcentajeBilletes20(){
        return (this.cntAmigobillete20*100)/(this.cntAmigobillete5+this.cntAmigobillete10+this.cntAmigobillete20);
    }
}