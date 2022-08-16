const person = {fname:"John", lname:"Doe", age:25};

let x ="";

for( let per in  person){

   x+=person[per]
   console.log(x)

}