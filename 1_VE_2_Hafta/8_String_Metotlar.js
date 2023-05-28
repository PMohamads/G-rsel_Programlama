let metin = 'Dünyaya göre en parlAk yıldız hangisidir en'
console.log(metin.length);
console.log("Sorunun Cevapi :     " + metin.slice(20,30));
console.log("Tersten da yazalim : " + metin.slice(-20,-10));
console.log("slice(başlangıç,sonu) olarak çalışır : " + metin.slice(3));
console.log("substring == slice : " + metin.substring(20,30));
console.log("replace metotu kullanimi : " + metin.replace("parlak","ışıldayan yada Berrak"));
console.log("replace metotu kullanimi : " + 
            metin.replace(/EN/gi,"EN COK"));//birden fazla bir 'en' varsa Genel bir arama yapariz bu yuzden 'g' kullandik //'i' ise kucuk veya buyuk karekterlere arasin diye

//toUpperCase()//toLowerCase()
let kelime = 'Bir KelimE'
console.log('\n');
console.log("toUpperCase metotu kullanimi : " + kelime.toUpperCase())
console.log("toLowerCase metotu kullanimi : " + kelime.toLowerCase())

//concat()
console.log('\n');
console.log("concat metotu kullanimi : metinin sonuna ekler : " +
             kelime.concat(" 'Bir' ekendi"," 'iki' eklendi"))//concat metotu string'in sonuna ekler

//trim()
kelime = "                     Bir KelimE                  "
console.log('\n');
console.log(kelime.length);
console.log("trim metotu kullanimi : metinin beyaz yerleri siler fazlalık Boşluklar gibi : \n burda uzulugu 45" + kelime)
kelime = kelime.trim()
console.log(kelime.length);
console.log("trim metotu kullanimi : metinin beyaz yerleri siler fazlalık Boşluklar gibi : \n Burda uzunlugu 10 oldu " + kelime.trim())
/* trimStart() veya trimEnd() trim() metotu başı veya sonunu siler sadece */

//padStart()//padEnd()
console.log('\n');
console.log(kelime.padStart(25,'Bi '));//Burda 25, uzunluğu 25'a kadar tamamlasın anlamına gelir //padStart baştan yazmaya başlar
console.log(kelime.padEnd(25,' Bi'));  //Burda 25, uzunluğu Tersten 25'a kadar tamamlasın anlamına gelir //padEnd sondan yazmaya başlar 

//charAt()//charCodeAt()
console.log('\n');
console.log(kelime.charAt(0),kelime.charCodeAt(0));//charAt(): sadece o sıradaki charectare getirir//charCodeAt(): UTF-16 tablosuna göre sırasını getirir 
console.log("'E' UTF-16 tablosunda = ",kelime.charCodeAt(9))// Burdaki sayilar o stringinin indeksidir
console.log("'e' UTF-16 tablosunda = ",kelime.charCodeAt(5))
console.log(kelime.charCodeAt(1))

//split()
//js'ta string bir dizi olarak tanımlanmaz diziye çevirmek için split() metotu kullanıyoruz 
metin = "mer ha ba her kese "
metin2 = "merhaba dunya"
metin3 = "me,rh,ab,a ,dun,ya"
metin4 = "m|er|h|ab|a d|u|nya|"
metin5 = "mer / er// h/a/b a/ dun//ya///"
const array =  metin.split(" ") //' ' veya " " //Burda Boşluklere göre böler
const array2 = metin2.split("") //Burda diziyi harflara böler 
const array3 = metin3.split(",") //Burda virgüllere göre böler
const array4 = metin4.split("|") //Burda piplere göre böler
const array5 = metin5.split("/") //Burda slashlara göre böler
console.log(array);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);

//indexOf('',baslangic indeksi) //search() //match()
let text = "Ay kendi Ekseni etrafında dolanması kaç sürer "
console.log(text.search('e'))//bulduğu ilk harfı hemen yazar sonrakine bakmaz
console.log(text.indexOf("e",10))//search'ten farkı arama işlemi yapmak için bir başlangıç noktası belirleyebilirsiniz zorunda degilsiniz 
console.log(text.match('e'))//search'ten farkı 'g' özelliği kabul eder
console.log(text.match(/e/g))//Burdaki 'g' Genel bir arama yapıyor demektir
console.log(text.match(/e/gi))//Burdaki 'i' Büyük ve küçük karekterlere bir arama yapması için kullandık
console.log(text.matchAll('e'))//Normal match'ten farkı ne kadar sonuç varsa hepsini getirir 'g' yazmamiza gerek yok

//includes()
console.log(text.includes("sen"));//Returns True or False
console.log(text.includes("sen",12));//12 indeksten sonra yok

//converting a string to number using Number() or parseInt()
let num = '56.88'  
console.log(Number(num));
console.log(parseInt(num) + 5.4 );
console.log(parseFloat(num) + 5.4 );

