////While Loop
console.log("Hello");
let n = 7
while( n < 15){
    n++;
    console.log("Hello Again",n);
}

////Do While Loop
let x = 0
do{
    x++
    console.log(x);
}while(x < 10)
//// **************************** Önemli Soru ****************************
console.log("Tek Rakmaları Dizide içinde Gösteren Döngü : ");
a=0
txt = []
do{
    a++;
    if(a%2 == 0)
        continue;//// Sayı Eğer Çift ise Atla Demektir
    txt.push(a)
    txt.sort(function(b,c){return b-c})
}while(a<20)
console.log(txt);

// ********************************************* Önemli Soru ********************************************* //
//1'den 10'a kadar sürekli rasgele üreten Fonkisyon Döngü içindeyiken 1 sayısı geldiğinde döngüyü duduran ve Ekrana dizi içinde ""Sıralı"" Halinde yansıtan ve 1 sayısı geldiği indeksin sayısı veren program Üretin
txt= []
do{
   rnd = Math.trunc(Math.random()* 11)
   if(rnd == 10){
    txt.push('100')
   }else{
    txt.push(rnd)
   }
   if(rnd == 1){
    let indeks = txt.length
   }
}while(rnd != 1)
txt.sort(function(a,b){return a-b})
console.log(txt);
console.log("'1' Sayısı indeks Sıra Numarası = ",txt.length);

//**********************************//
c = 10
let even = []
let odd = []
do{
let randomnum = Math.trunc((Math.random() * 20) + 1)
if(randomnum % 2 == 0){
    even.unshift(randomnum)
}else{
    odd.unshift(randomnum)
}
c--
}while(c > 0)
console.log("the array of the even numbers is : ",even);
console.log("the array of the odd  numbers is : ",odd);
console.log("the sorted version array of the even  numbers is : ",even.sort(function(a,b){return a-b}));
console.log("the sorted version array of the odd  numbers is : ",odd.sort(function(a,b){return a-b}));
