// Question 1 - Create a variable of type string and try to add number to it.
let a = "suvesh"
let b = 7
console.log(a+b)
// Question 2 - Use typeof operator to find the datatype of the string in last question.
console.log(typeof (a+b))

//Question 3 - Create a const object in javascript can you change it hold a number later ?
const c={
    name: "suvesh",
    section: 8,
    principle:false
}
c['friend']="kirti"
c['name']="pranav"
console.log(c)
// c = "siwi" //errow throws because,c is an constant variable

// Question 4 - Try to add a new key to the const object in problem 3 were you able to do it ? answer is Yes we can

// Question 5 - Write a javascript program to create a word-meaning dictionary of 5 words
const dict={
    professor:"a university academic of the highest rank; the holder of a university chair",
    pail:"noun a bucket",
    important:"a great significance of value",
    chef:"a professional cook",
    galaxy:"a system of millions or billions of stars"
}
console.log(dict)

