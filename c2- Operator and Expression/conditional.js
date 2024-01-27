const prompt = require('prompt-sync')(); // this is for vs code not a part of program


//conditional statement
// if else statement
let a = prompt("what is your age ?") // prompt asking a question and alert answer the question
a = Number.parseInt(a) //converting the string to a number
if(a>18){
    console.log("You can vote")
}
else{
    console.log("you can not vote")
}


// nested if else
let age = prompt("Enter Your Age")

if(age > 0 && age < 5){
    console.log("you are toddler")
}
else if(age > 4 && age < 14){
    console.log("you are kid")
}
else if(age > 13 && age < 19){
    console.log("you are teen")
}
else if(age > 18){
    console.log("you are adult")
}
else{
    console.log("Invalid Age")
}

// Ternary Operator
console.log("you can",age>18 ?"drive" :"not drive" ) // (age > 18) ? 'yes':'no'
