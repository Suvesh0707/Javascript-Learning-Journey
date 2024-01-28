// Array map method
let arr = [2,4,6]
a= arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value,index,array + 1
})
console.log(a)

// Array Filter method
let arr2=[0,3,4,5,15,67,34,107]
a2= arr2.filter((elements)=>{  // filter the elements
    return elements < 10
})
console.log(a2)

// Array reduce method
let arr3=[0,3,4,5,5,7] // reduces an array in a single value
Newarr3= arr3.reduce((h1,h2)=>{
    return h1 + h2
})
console.log(Newarr3)

