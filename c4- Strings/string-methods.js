// String Properties & Methods
let name = "suVesh"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4))
console.log(name.slice(2))

let Name = "Pushpa Bhai"
let NewName = console.log(Name.replace("Bhai","Bhau")) // you can replaced the strings.

let name1 = "Ashneer"
let name2 = "Aman"
console.log(name1.concat(" is a friend of ",name2)) // by using concat you can add strings.

let friend1 = "       Anupam         "
console.log(friend1.trim()) // It trim the spaces in strings
console.log(friend1) 

// Quick Quiz 2 - Use a for loop to print a string
let string = "suvesh";
let length = string.length
for(let i=0; i < length ; i++){
    console.log(string[i]);
}
