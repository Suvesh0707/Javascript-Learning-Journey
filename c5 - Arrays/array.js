let marks_class1 = [90, 80, 70, false, "Not Present"] // Array can hold more than one value
console.log(marks_class[0])
console.log(marks_class[1])
console.log(marks_class[2])
console.log(marks_class[3])
console.log(marks_class[4])
console.log(marks_class[5]) // will be undefined because index 7 does not exist.
console.log("The length of marks_class is", marks_class.length)
marks_class[5] = 57 // Adding a new value to the array
marks_class[0] = 95 // Changing the value of an array
console.log(marks_class)
console.log(typeof marks_class) 

// Quick Quiz 3 
let marks_class2 = [90, 80, 70, false, "Not Present"]
len = marks_class2.length
for(let i = 0 ; i < len; i++ ){
    console.log(marks_class2[i])
}


