const numbers = [1,5,-8,79,542,67.5,1022,111]

function fonkisyon(deger,indeks,dizi){
    console.log(indeks + "--" + deger);
}
numbers.forEach(fonkisyon)

///map() metotu
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2);

///filter() metotu
const numbers3 = [45, 4, 9, 16, 25];
const over18 = numbers3.filter(myFunction2);

function myFunction2(value, index, array) {
  return value > 18;
}
console.log(over18);