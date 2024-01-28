let num = [2,4,6,8,10]
// for(let i=0 ; i<num.length ; i++){
//     console.log(num[i])
// }

// forEach Loop
num.forEach((Element)=>{
    console.log(Element*Element)
})

// Array.from
let name = "suvesh"
let a = Array.from(name)
console.log(a)

//for...of loop
n2 = [1,2,3,4,5]
for (let i of n2) {
    console.log(i)
}

//for...in loop
for(let i in n2){
    console.log(n2[i])
}

