const prompt = require('prompt-sync')(); // this is not a part of program
// loops and functions

// Quick Quiz - Write a sample for loop of your choice
/*
let sum = 0
let n = prompt("Enter your number")
for(let i = 1 ; i <= n ; i++){
    sum = sum + i
}
console.log("sum of first" , n ,"natural number is", sum)

*/

let obj = {
    suvesh: 90,
    Sivi:85,
    Ash: 67
}
// for-in loop
for(let a in obj){
    console.log("marks of",a,"are",obj[a])
}
// for-of loop
for(let a of "suvesh"){
    console.log(a)
}

