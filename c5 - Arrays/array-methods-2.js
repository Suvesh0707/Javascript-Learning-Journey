num = [3,1,6,2,5,4]
num_more = [6,7]
/*
//delete method
delete num[0] // element can be deleted 
console.log(num)
console.log(num.length) 

// concat method
num.concat(num_more)
*/
//sort method
num.sort()
console.log(num) // sorted the elements

// reverse method
num.reverse() // reverse the elements

// splice method
num2 = [3,1,6,2,5,4]
num2.splice(1,4,1000,2000,3000,4000) // 1 to 4 elemets are deleted and remaining elemets added in array
console.log(num2)

// slice method
num3 = [3,1,6,2,5,4]
New_array= num3.slice(3) 
console.log(New_array)
    






