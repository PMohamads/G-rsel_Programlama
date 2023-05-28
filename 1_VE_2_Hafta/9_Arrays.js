let mix = ["Alii",'R',45,3.14,true,["one","two","three"] ]
console.log(mix)
console.log(mix.length)
console.log(mix[5])
console.log(mix)
console.log("Dizinin icindeki Beşinci elemanı(dizinin) uzunluğu belirleme : ",mix[5].length)
console.log("Dizinin birinci elemnı(stringi) uzunluğu belirleme :",mix[0].length)
mix[2] = 33
console.log(mix)
console.log(mix[mix.length-1])

console.log("\nMath.max.apply() metotu kullanarak Dizinin en Büyüyü belirleme : ");
const arr = [56,-8,2,697,85,-1,0]
function myArrayMax(arraa) {
    return Math.max.apply(null, arraa);
  }
console.log(myArrayMax(arr));

console.log("\nMath.min.apply() metotu kullanarak Dizinin en küçüyü elemenı belirleme : ");
function myArrayMin(arraaa) {
    return Math.min.apply(null, arraaa);
  }
  console.log(myArrayMin(arr));

const cars = [  {type:"Volvo", year:2016},
                {type:"Saab", year:2001},
                {type:"BMW", year:2010}]
//Bazen Diziler da nesneler de içerebilir