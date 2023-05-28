class Araba{
    constructor(adi,yil){
        this.adi = adi
        this.yil =yil
    }
    gun(){
        const date = new Date();
        return date.getFullYear() - this.yil
    }
}
const araba = new Araba("BMV",2005)

console.log("araba markasi :",araba.adi , ", yasi :",araba.gun());

class vatandas{
    constructor(ad,soyadi){
        this.ad = ad
        this.soyadi = soyadi
    }
    Tc(tc){
        Number(tc)
        
    }
}

