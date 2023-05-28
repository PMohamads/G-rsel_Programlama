for (let i = 0 ; i < 10 ;i++){
    console.log("Mohamad");
}
 
///// Genel if
function fonk(deger,indeks,dizi){
    console.log(deger+'//'+indeks);
}
const Names = ["Yasin","Murat","Ali","Tufan","Esra"]
Names.forEach(fonk);
for(let i = 0 ; i<Names.length;i++){
    console.log("The name of the person number "+(i+1)+" is "+ Names[i]);
    Names.sort();
    switch(i){
        case 0:
            console.log(Names[i] +" is The First person ");
            break;
        case 1:
            console.log(Names[i] +" is The Second person ");
            break;
        case 2:
            console.log(Names[i] +" is The Third person ");
            break;
        case 3:
            console.log(Names[i] +" is The Forth person ");
            break;
        default:
            console.log(Names[i] +" is The Last person ");
    }
}

//Diziler veya Nesneler için  // *** For in ***
for (i in Names){
    console.log(Names[i]);
}
let dunya = "merhaba"
for (i in dunya){
    console.log(i,"indeksi = ", dunya[i]);
}
//For Of
for (i of dunya){
    console.log(i);//Burda Direk indeksin Değerini veriyor
}

const cars = ["Audi","BMV","Mercedes",'Dacia']
for (i of cars.sort().reverse()){//Gives the Sorted Reversed format of the Array
    console.log(i);
}

