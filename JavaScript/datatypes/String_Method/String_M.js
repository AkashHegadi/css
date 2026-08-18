let name="akash"
console.log(name)//akash

console.log(name.charAt(2))//a

console.log(name.concat(" ").concat("hegadi"))//akash hegadi

console.log(name.endsWith("sh"))//true
console.log(name.endsWith("a"))//false

console.log(name.startsWith("a"))//true
console.log(name.startsWith("sh"))//false

console.log(name.includes("ka"))//true
console.log(name.includes("x"))//false

console.log(name.indexOf("k"))//1
console.log(name.indexOf("v"))//-1


let acc="7411"
console.log(acc.padEnd(10,"X"))//7411XXXXXX

let acc1="0833"
console.log(acc1.padStart(10,"X"))//XXXXXX0833

console.log(name.repeat(5))//akash akash akash akash akash


console.log(name.slice(0,4))//akas
console.log(name.slice(2,name.length))//ash

console.log(name.substring(0,4))//akas

console.log(name.split())//['akash']

console.log(name.toUpperCase())//AKASH

console.log(name.toLowerCase())//akash

let num=100
console.log(num)//100
console.log(typeof(num))//number
console.log(num.toString())//100
console.log(typeof(num.toString()))//String

let name1="        akash        "
console.log(name1)//         akash        
console.log(name1.trim())//akash
console.log(name1.trimEnd())//     akash
console.log(name1.trimStart())//akash    