//boolean
let x = Boolean(false)
let y = Boolean(true)
let z = Boolean(0)
let w = Boolean(1)
let q = Boolean(function(){})
let t = Boolean(Date())
let f = Boolean(3 === 3.00) // 3.00'u 3 olarak sayılır *****************
let g = Boolean(BigInt(45) === 45) // ikisi aynı Değeri ama ikisi aynı Tipten değildir ******************
let i = Boolean('45' === 45) // ikisi aynı Değeri ama ikisi aynı Tipten değildir *******************
console.log(x ,y ,z, w, q, t ,f, g, i);

let aa = false; // aa is a Boolean
let bb = new Boolean(false); // bb is an object
let cc = new Boolean(false); // bb is an object
console.log("aa === bb : ",Boolean(aa === bb));
console.log(" aa == bb : ",Boolean(aa == bb)); 
console.log(" bb == cc : ",Boolean(bb == cc)); 
console.log("bb === cc : ",Boolean(bb === cc)); // ************************** Önemli **************************** //
console.log("bb !== cc : ",Boolean(bb !== cc)); // ************************** Önemli **************************** //
console.log(" ***** Comparing two JavaScript objects always return false *****");
console.log(typeof(bb)); 
console.log(typeof(aa)); 
console.log(typeof(cc)); 