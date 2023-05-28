//// if // else if // else
if (5 == '5'){
    console.log("5 == '5' is True");
}
//
if (5 === '5'){
    console.log("true");
}
else {
    console.log("5 === '5' is False");
}
//
const rnd = Math.random() * 100
console.log(rnd);
if (rnd > 50){
    console.log("50'den büyüktür");
}
else if (rnd < 50 && rnd > 30){
    console.log("50'den küçüktür ve 30'den büyüktür ");
}
else {
    console.log("30'den küçüktür");
}
//Switch
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
console.log(day);
//default
switch (new Date().getDay()) {
    case 4:
    case 5:
      metin = " Hafta sonu yaklaşıyor";
      break;
    case 0:
    case 6:
        metin = " Sonunda hafta sonu";
      break;
    default:
        metin = " Hafta sonuna daha çok var";
  }
console.log(metin);

//Switch in a string
let month = new Date().getMonth()
let char_month = month.toString()
switch(char_month){
    case '3':
    case '4':
    case '5':
        console.log("  Yaz Mevsimi ....");
        break;
    case '10':
    case '11':
    case '0':
        console.log("  Kış Mevsimi ....");
        break;
    default:
        console.log("  Mevsimler Karışık ....");

}