function AvgNum(x,y){  // old syntax ofjavascript 
    return (x + y)/2
}
const sum = (p,q)=>{  // new syntax of javascript
    return (p + q)    // arrow function
}
a = 1;
b = 2;
c = 3;
d = 4;
e = 5;

console.log("Average of a and b is",AvgNum(a,b)) // x=a and y=b
console.log("Average of b and c is",AvgNum(b,c))
console.log("Average of c and d is",AvgNum(c,d))
console.log("Average of d and e is",AvgNum(d,e))
console.log("Average of e and a is",AvgNum(e,a))
console.log("s", sum(9,7))

