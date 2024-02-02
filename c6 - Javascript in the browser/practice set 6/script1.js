// Question 1 - Write a program using prompt function to take input age as a value from the user and use a text to tell him if he can drive!
/*
let RunAgain = true;
while( RunAgain){   
let age = prompt("Enter your age")
age = Number.parseInt(age)

const canDrive = (age)=>{
   return age>=18 ? true : false
}
if(canDrive(age)){
    alert("You can drive")
}
else if(age<0){
   console.error("Please enter a valid age")
   break;
}
else{
    alert("You can not drive")
}
RunAgain = confirm("Do you want to play again")
}
*/

// Question 2 - In Q1 use confirm to ask the user if he wants to see the prompt again

// Question 3 - In previous question, use console.error to log the error if the age entered is negative

// Question 4 - Write a program to change a url to google.com (redirection) if user enters a number greate than 4
let number = prompt("Enter a number")
number = Number.parseInt(number)
if(number > 7){
location.href=("https://google.com")
}

// Question 5 - Change the background of the page to yellow, red or any other color based on user input through prompt
let color = prompt("Enter the page color ")
document.body.style.background = color