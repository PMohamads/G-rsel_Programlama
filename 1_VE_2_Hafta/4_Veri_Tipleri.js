console.log(" // Veri Tipleri \\\\")
let a = "metin"
console.log(typeof(a));
let c = 838383727
console.log(typeof(c));
let b = 'd'
console.log(typeof(b));
let d = BigInt(5)
console.log(typeof(d));
let e = true
console.log(typeof(e));
let f = Symbol('id')
console.log(typeof(f));
let g = null
console.log("null js'ta object olarak tanimlar " , typeof(g));
let h 
console.log("Tanimli degil " , typeof(h));
let fonkisyon = function(a){return 4+a}
console.log(typeof(fonkisyon));
let object = {adi:"ahmet",
         yasi:34,
         erkek:true,
         bes_sene_sonra_yasi:function topla(){return this.yasi + 4}} // yaşa ulaşmak için this sözcüğü kullanıyoruz
console.log("Dictionary içindeki fonkisyonu çalışmanın sonucu : ",object.bes_sene_sonra_yasi());
console.log(typeof(object));
console.log(typeof(object.erkek));
console.log(typeof(object.adi));
let array = ["Dunya","World","Planet"]
console.log(typeof(array));
let mixarray = ["ad",'soyadi',34,true,4/5]
console.log(mixarray[4]);
console.log(typeof(mixarray[4]));
console.log(typeof(mixarray));
console.log("Burda js'da hem diziler hemde karışık nesneler pythondaki gibi Dictionary(Objects) olarak gördü ");
console.log(" The Object Datatype can contain: \n 1. An object \n 2. An array \n 3. A date ");

typeof NaN  // Returns "number"
