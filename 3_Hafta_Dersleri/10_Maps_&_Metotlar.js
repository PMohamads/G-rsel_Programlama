const yeni_map = new Map([
    ["elma", 10],
    ["armut", 20],
    ["ayva", 30],
    ["çilek",30],
    ["ellma",20],
])
console.log(yeni_map);
console.log(yeni_map.get("elma")) //değer okuma

yeni_map.set("armut", 200) //değer atama
console.log(yeni_map.get("armut")) 

if (yeni_map.has("ayva"))
    console.log("ayva varmış")

yeni_map.delete("ayva")
if (yeni_map.has("ayva")){
    console.log("ayva varmış")}
else
    console.log("ayva bitmiş")

const yeni_map2 = new Map([
        ["elma", 10],
        ["armut", 20],
        ["ayva", 30],
        [50, 500]
    ])
    
    yeni_map2.forEach(function(value, key){
        console.log(key + " : " + value)
    })
    
    // Fazlası İçin : https://www.w3schools.com/js/js_maps.asp