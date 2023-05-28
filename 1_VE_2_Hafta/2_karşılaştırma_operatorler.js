console.log(" karşılaştırma matematik operatorleri ");
let x = 3 == 5
console.log(x);
let a = 5 == '5'
console.log(" 5 == '5'  :",a);// js stringi kendisi sayıya çeviryou ve karşılatştıryor *****************************
let b = 6 === '6'
console.log(" 6 === '6' :",b);// Hem Değeri Hemde Tipi Eşit Olması Lazım ***************************** Önemli ***********************
let c = 3 !== "3" 
console.log(" 3 != '3'  :",c)// ==='n Tersi Değeri Veya Tipi Eşit Olmaması Lazım ki False versin ****************************
let y = 4 < 5
console.log(" <  : ",y);
let z = 8 >= 15 
console.log(" >= : ", z);
let q = 9 <= 9
console.log(" <= :",q);
let w = 4 != 3
console.log(" != :",w);
console.log(" short if operatoru ");
let E = (4 == 6) ? "dogru cevap":"hh yanlis"; //short if kullanimi yada ( ternary operator ) üçlü demek diye bilinir
console.log(E);

let v = (4 === 4) ? 'Tam true':4;
console.log(v);
//Boolean()
let aa = false; // aa is a Boolean
let bb = new Boolean(false); // bb is an object
console.log(Boolean(aa == bb)); 
console.log(Boolean(aa === bb)); 
console.log(typeof(aa)); 
console.log(typeof(bb)); 
