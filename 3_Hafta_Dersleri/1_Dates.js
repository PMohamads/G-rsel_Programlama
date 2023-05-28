const tarih = new Date()
console.log("Şimdiki Tarihi Verir : ",tarih);

//tarihi yazma turleri
const yazdigimiz_tarih1 = new Date("2023/03/04")
console.log(" 2023/03/04 : ",yazdigimiz_tarih1);

const yazigimiz_tarih2 = new Date("2023-05-22")
console.log(" 2023-05-22 : ",yazigimiz_tarih2);

const yazigimiz_tarih3 = new Date("2023,01,01")
console.log(" 2023,01,01 : ",yazigimiz_tarih3);

const yazigimiz_tarih4 = new Date("Jan 25, 1995")
console.log(" Jan 25, 1995 : ",yazigimiz_tarih4);

const tarih_yaz = new Date("2023,01,01 10:21:02")
console.log(" 2023,01,01 10:21:02 : ",tarih_yaz);

const tarih_yaz2 = new Date(2022, 11, 24);
console.log(" (2022, 11, 24) : ",tarih_yaz2);

const tarih_yaz3 = new Date(2022,0,0,12,64,44);// JavaScript counts months from 0 to 11 : 0 == January  , 11 == December 
console.log(" (2022,0,24,12,64,44) : ",tarih_yaz3);

const tarih_yaz4 = new Date(1679081408380); // Burda Millsaniye olarak algılıyor ve Hesaplıyor
console.log(" 1679081408380 Millisaniye olarak hesaplar : ",tarih_yaz4);

//converting Date to a string
const ttarih = new Date()
console.log(ttarih.toString().length);
console.log(ttarih.toDateString());
console.log(ttarih.toDateString().length);

//converting String to a milliseconds
const Millisaniye = Date.parse("2024,02,22")
console.log(Millisaniye);
console.log(new Date(Millisaniye));