alert("Enter a value of a")
let a = prompt("Enter here","578")
a = Number.parseInt(a)
alert(" you entered a type of " + typeof a)
let write = confirm("Do you want to write it on page")
if(write){
    document.write(a)
}
else{
    document.write("please allow me to write")
}
