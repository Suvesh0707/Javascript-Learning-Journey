let a = 5;
let b = 4;
console.log("a + b =",a + b)
console.log("a - b =",a - b)
console.log("a * b =",a * b)
console.log("a / b =",a / b)
console.log("a ** b =",a ** b) // 5 raise to the power 4 = 5*5*5*5
console.log("a % b =",a % b) // remainder will be print
console.log("a++ =",a++) // increment
console.log(a)
console.log("++b =",++b) // pre-increment
console.log(b) 

// Assignment Operator
let x = 3;
let y = 3;
x += 1; // first add then is equal to 
y += 2; // 3 + 2 = 5
console.log("x =",x)
console.log("y =",y)

// comparison operator
let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2 is",comp1 == comp2) // string ,integer not matter
console.log("comp1 != comp2 is",comp1 != comp2)
console.log("comp1 === comp2 is",comp1 === comp2) // string and integer are not same in this case
console.log("comp1 !== comp2 is",comp1 !== comp2) // string and integer are not same in this case

// Logical Operator
let s = 7;
let t = 8;
console.log(s<t && s==7 ) // truth table TT - T
console.log(s>t || s==8 ) // FF - F
console.log(!false) // oppsoite
