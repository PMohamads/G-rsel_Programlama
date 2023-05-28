let adi = "Ali"
let soyadi = 'yılmaz'
console.log(adi,soyadi);
console.log(adi +"'"+ soyadi);
console.log("\\ kullanimi code satiri kirar : ",adi ,"\
", soyadi);
console.log("\\\\ genel kullanimi :",adi,"\'\'",soyadi);
console.log(adi + soyadi);
console.log("\\b kullanimi ",adi,"\b ",soyadi);
console.log("\\n kullanimi : alltaki satıra geçer ",adi,"\n",soyadi);
console.log("\\t kullanimi : Tab boyutunda boşluk verir",adi,"\t",soyadi);
let yeniadi = "adi \fcok uzun olacak şekilde \bolamsı \rlazımki aralarında \vçok belli olamsın diye "
console.log("\\v kullanimi : \\v işareti kaçıncı sırada olduğnu yazar : ",yeniadi.search('\v'),soyadi);
console.log("\\f kullanimi : \\f işareti kaçıncı sırada olduğnu yazar : ",yeniadi.search('\f'),soyadi);
console.log("\\r kullanimi : \\r işareti kaçıncı sırada olduğnu yazar : ",yeniadi.search('\r'),soyadi);
console.log("\\b kullanimi : \\b işareti kaçıncı sırada olduğnu yazar : ",yeniadi.search('\b'),soyadi);
console.log("/\\s/g kullanimi : beyaz yerler yerine ' ' işerati koyar : ",yeniadi.match(/\s/g),soyadi);
console.log("/\\w/g kullanimi : Seçilen kelimenin hem toplam uzunluğu verir hemde tek harflara Böler : ",adi.match(/\w/g),soyadi.match(/\w/g));

//converting a string to number using Number() or parseInt() or parseFloat()
let num = '56.5'  
console.log(Number(num) + 2.22);
console.log(parseInt(num));  //Sonuc = 56
console.log(parseFloat(num));//Sonuc = 56.5
let number = '112'
console.log(number/num,"the result will be ondalik sayi");//if the inside the string is number and we trying to multiply or divide it then it would correctly work
console.log("number as string * anthor numder as string too :",((number-110)*num));
console.log(num/0);
console.log(typeof(num/0));//infinity is a number 
let realnum = 315
console.log(realnum.toString(32));//(n==23)*1+32*1
console.log(realnum.toString(16));//6*1 + 5*16
console.log(realnum.toString(12));//3*1 + 7*12
console.log(realnum.toString(8));//7*1+2*8+1*64
console.log(realnum.toString(2));//1*1+1*2+1*4+0*8+1*16+0*32+64*1
