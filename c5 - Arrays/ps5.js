// Practice set 5

// Question 1 - Create an array of numbers and take input from the user to add numbers to this array
// let arr1 = [1]
// let a = prompt("Enter a Number")
// a=Number.parseInt(a)
// arr1.push(a)
// console.log(arr1)

// Question 2 - Keep adding numbers to the array in 1 until 0 is added to the array 
// let arr = [1]
// let a
// do {
//     a=prompt("enter a number")
//     a=Number.parseInt(a)
//     arr.push(a)
//     console.log(arr)
// }while(a!=0);

// Question 3 - filter for numbers divisible by 10 from a given array
let arr3 = [5,10,15,20,25,30,35,40]
Newarr3 = arr3.filter((element)=>{
return element%10 == 0
})
console.log(Newarr3)

// Question 4 - Create an array of square of given numbers
let arr4 = [2,4,6,8,10]
Newarr4 = arr4.map((element)=>{
    return(element * element)
})
console.log(Newarr4)

// Question 5 - Use a reduce to calculate factorial  of a given number  from an array of first n natural numbers (n being the number whose factorial needs to be calculated)

let arr5 = [1,2,3,4]
let n = arr5.reduce((x1,x2)=>{
    return x1 * x2
})
console.log(n)