const prompt = require('prompt-sync')(); // this is not a part of program
// Chapter 3 Practice set

// Question 1 - Write a program to print the marks of a student in an object using for in loop
let marks ={
    resham:"90",
    suraj:"70",
    kartik:"50"
}
for(let key in marks){
    console.log("marks of student",key,"is",marks[key])
}

 // Question 2 - Write a program to print "try again" until user enter correct number
let correct_number = 7;
let i
while (i != correct_number) {
    console.log("try again")
   i =prompt("enter a number")
}
console.log("you entered a correct number")


// Question 3 - Write a function to find mean of 5 numbers
const mean = (a,b,c,d,e) =>{
    return(a+b+c+d+e)/5
}
let a = 1
let b = 2
let c = 3
let d = 4
let e = 5

console.log(mean(a,b,c,d,e))  



 