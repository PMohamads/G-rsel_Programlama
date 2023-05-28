//converting String to a milliseconds //parse()
const Millisaniye = Date.parse("2024,02,22")
console.log(Millisaniye);
console.log(new Date(Millisaniye));//Converting milliseconds to a Date

//get() Methods
const tarih = new Date()
console.log(tarih);
console.log("simdiki zaman :   ",tarih);
console.log("simdiki zaman + millisaniyesi :   ",tarih,Date.now());
console.log("yıl :   ",tarih.getFullYear());
console.log("ay  :   ",(tarih.getMonth()+1));// js'ta ay 0 ile 11 arasında veriyor yani aralık == 11
console.log("gün :   ",tarih.getDate());// Güncel tarihin Gününü veriyor
console.log("haftalıgün (0 ile 6 arasıdır) :",tarih.getDay());// Burda Haftadaki 7 Günleri 0 ile 6 arasında veriyor yani cumartesi == 6 ve pazar =0
console.log("saat :  ",tarih.getHours());
console.log("dakika :",tarih.getMinutes());
console.log("saniye :",tarih.getSeconds());
console.log("millisaniye :",tarih.getMilliseconds());
console.log("saniye :",tarih.getTime());// Get time (milliseconds since January 1, 1970)

//set() Methods
console.log("\n");
tarih.setFullYear(2022)
console.log("yılı ayarlama :   ",tarih);
tarih.setMonth(2)
console.log("ayı ayarlama :   ",tarih);
tarih.setDate(23)
console.log("Günü ayarlama :   ",tarih);
tarih.setHours(23)
tarih.setMinutes(23)
tarih.setSeconds(23)
console.log(tarih);


