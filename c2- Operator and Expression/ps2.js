const prompt = require('prompt-sync')(); // this is not a part of program

// Question 1- Use logical operator to find whether the age of a person lies between 10 and 20
age = prompt("Enter your age");
if(age > 10 && age < 20){
    console.log("person lies between 10 to 20")
}
else{
    console.log("not lies between 10 to 20")
}

// Question 2 - Demonstrate to use of switch case statements in javascripts

age = prompt("Enter your age");
switch(age){
    case '7':
        console.log("your age is 7")
        break
    case '8':
        console.log("your age is 8")
        break
    case '9':
        console.log("your age is 9")
        break
    case '10':
        console.log("your age is 10")
        break
    case '11':
        console.log("your age is 11")
        break
    default:
        console.log("your age is not special")
} 

// Question 3 - Write a Javascript program to find whether a number is Divisible by 2 and 3

let num1 = prompt("Enter num")
if(num1 % 2 == 0 && num1 % 3 == 0){
    console.log("Number Is Divisible By 2 and 3")
}
else{
    console.log("Number Is Not Divisible By 2 and 3")
}

// Question 4 - Write a Javascript program to find whether a number is Divisible by either 2 or 3

let num2 = prompt("Enter number")
if(num2 % 2 == 0 || num2 % 3 == 0){
    console.log("Number Is Divisible By 2 or 3")
}
else{
    console.log("Number Is Not Divisible By 2 or 3")
}

// Question 5 - Print "you can Drive" or "you cannot drive" based on age being greater than 18 using ternary operator
age = prompt("What is your age ?")
console.log("you can",age < 18 ?"not drive":"drive")