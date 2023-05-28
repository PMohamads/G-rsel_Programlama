//Math.random()//Math.round()//Math.trunc()//Math.ceil()//Math.floor()
console.log("\n");
console.log("En yakın integere (4.4) =",Math.round(4.4))
console.log("just The integer (4.7) =",Math.trunc(4.7))
console.log("Down (4.9) =",Math.floor(4.9))//Down
console.log("Up (4.2) =",Math.ceil(4.2))//Up
console.log("0 ile 10 arasında rasgele sayı : **",Math.trunc(Math.random() * 11),"**") 
console.log("10 ile 100 arasında rasgele sayı : **",Math.trunc((Math.random() * 91) + 10 ),"**") 

//The function of random numbers by borders \ \ **************************** Önemli ******************************** / /
function rnd(EnKSiniri,EnBSiniri){
    console.log("The Random Number is : " , Math.trunc((Math.random() * (EnBSiniri - EnKSiniri  ) + EnKSiniri + 1)));
}
rnd(111,112)  // 112 Excepted 111 is Not***

function rnd2(EnKSiniri,EnBSiniri){
    return  Math.trunc((Math.random() * ( EnBSiniri - EnKSiniri ) + EnKSiniri ));
}
console.log("The Random Number is : " , rnd2(111,112)) // 111 Excepted 112 is Not***

function rnd3(EnKSiniri,EnBSiniri){
    console.log("The Random Number is : " , Math.trunc((Math.random() * (EnBSiniri - EnKSiniri  +  1) + EnKSiniri )));
}
rnd3(111,112)  // Both Excepted***
// make a random character
console.log("\n");
function rndChar(){
    let sayi = Math.trunc(Math.random() * 100 );
    console.log("The Random nmber is : ",sayi);
    let char = sayi.toString()
    console.log("The string of the number : '"+char+"'");
    let sonuc = char.charCodeAt(0)
    console.log(sonuc);
    console.log("Final Sonuc : "+String.fromCharCode(sonuc + sayi));
}
rndChar()

// Random Character Between A and Z 
function rndChar2(){
    let sayi = Math.trunc(Math.random() * 100 );
    console.log("\nThe Random nmber is : ",sayi);
    let char = sayi.toString()
    console.log("The string of the number : '"+char+"'");
    let sonuc = char.charCodeAt(0)
    if(sayi +sonuc  > 65 && sayi+ sonuc < 90){
        console.log(sonuc);
    console.log("Final Sonuc : "+String.fromCharCode(sonuc + sayi));}
    else{
        console.log("Sonuç A ile Z Harfları dışındadır");
        console.log("Final Sonuc : "+String.fromCharCode(sonuc + sayi));
    }
}
rndChar2()

//converting the numbers to the alphabet By the input number + 97
function convertintChar(integer) {
    let character = 'a'.charCodeAt(0);//Burda her zaman sonuc 97 cunku a baslamsina istiyoruz
    console.log(character);
    console.log("The character code is:", character);
    return String.fromCharCode(character + integer);
   }
console.log("The character equivalent of the integer is:", convertintChar(4));
