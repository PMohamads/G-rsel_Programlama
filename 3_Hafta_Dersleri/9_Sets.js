console.log(" ** SET'ler sadece benzersiz değerleri saklar ** ");
const sets = new Set([1,3,5,8,79,6,"ff","f",true])
console.log(sets);

//// add() metotu sein sonuna ekler
sets.add(675)
sets.add(3)  // tekrar 3 değerini eklemeyecektir.
sets.add(4.56)
sets.add(([1.1,2.2,3.3,4.4,5.5]))
console.log(sets);
console.log(typeof(sets));

//// delete() metotu settedeki elemani siler
sets.delete(3)// silenecek elemanın aynı tipten ve aynı değerden yazıyoruz yoksa silenmez 
sets.delete('f')// eleman silindiğinde yeri de silinir dizilerdeki gibi boş diye göstermz
console.log(sets);

//// has() metotu setteki istedigimiz elemani var olup olmadigini kontrol eder
console.log(sets.has(3));
console.log(sets.has(675));

//// foreach() metotu
const degerler = new Set([1, 3, 5, 7])
console.log(degerler)

degerler.forEach(function (deger){
    console.log(deger)
})


