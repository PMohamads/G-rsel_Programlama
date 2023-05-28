let isimler = ["Alili","Ahmet","Hasan","Barış"]
console.log(isimler[0].match(/l/g));

console.log(isimler.toString());//converting array to a string
console.log(isimler.toString().length);//converting array to a string

//push() ve pop()
console.log("\n*push() ve pop()*");
isimler.push("Ramazan","ibrahim")//istedigimiz kadar ekleyebiliriz
console.log(isimler);
isimler.pop()
console.log(isimler);

//shift()
console.log("\n*shift()*");
isimler.shift()
console.log(isimler.shift());
console.log(isimler);// shift() metotu dizinin baştaki elemanı siler yani pop() != shift()
isimler.unshift("Ahmet")// unshift metotu dizinin başına elemanı ekler yani push() != unshift()
console.log(isimler);

//join("")
console.log("\n*join()*");
console.log(isimler.join(" ** "));// aralarina ' ** ' ekler

//delete()
console.log(isimler);
console.log("\n*delete()*");
delete(isimler[2])
console.log(isimler);
console.log(typeof(isimler[2]));


//splice()
console.log("\n*splice()*");
isimler.splice(2,1)//we use splice to delete or add elemants to the array, Here we are Deleting
console.log(isimler);
isimler.splice(3,0,"gul",'mert')//Here we are Adding
console.log(isimler);

//slice()
console.log("\n*slice()*");
console.log(isimler.slice(1));// Diziyi 1 indeks'ten keser ve kalanı yansıtır 
console.log(isimler.slice(0,2));// Diziyi '0' indeks'ten başlayip '2' indekse kadar yansıtır

//sort() ve reverse() * ** * * * * * * * * ** * * * * * * ** * * * ** * 
console.log("\n*sort() ve reverse()*");
isimler = ['Ahmet', 'Hasan', 'Ramazan', 2 , 'Mert']
isimler.sort() // it should be all of the First charecter of the elemats in the array big or all of them small to sort it
console.log(isimler);
isimler.reverse()
console.log(isimler);
numbers = [3,4,87,21,9,-5,34,103,-98,1]
console.log(numbers.sort());//sort metotu sayıları string olarak görür o yüzden nerde 1'le başlayan string varsa öncelik ona gider sonra iki ile başlayan....
console.log(numbers.sort(function(a,b){return a-b}));//Burda küçükten büyüye sıralar
console.log(numbers.sort(function(a,b){return b-a}));//Burda büyükten küçüye sıralar
console.log("En büyük ve En küçük sayıları belirleme");
console.log("Sort metotu kullandıktan Sonra numbers[0] ve numbers[numbers.length-1] kullanarak belli olur :");
console.log("Dizinin En Büyük Sayısı : ",numbers[0]);
console.log("Dizinin En Küçük Sayısı : ",numbers[numbers.length-1]);

