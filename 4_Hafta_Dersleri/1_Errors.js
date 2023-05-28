try{
    console.log(a[1]);
}
catch{//yada catch(err) da yazsak olur
    console.log("Hata yakalandi ")
}

console.log("işlem bitti")

////Hatanın ne olduğunu göstermek için err yazıyoruz
let dizi = []
try{
    dizi.delete(4)
}
catch{
    console.log(err);
}
