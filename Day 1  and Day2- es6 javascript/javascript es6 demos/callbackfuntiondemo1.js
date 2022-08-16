function isodd(number){  //calutlate the odd  numbers here
    console.log("2")
  return number %2!=0;
}

// declara  callaback function
function filter(numbers,fn){   // fn is function  as paramter
console.log("1")
    let results=[];    // add another array to store the odd values
    for(const num of numbers){
     
        if(fn(num)){      //function
            console.log("3")
            results.push(num);
        }
    }
    console.log("4")
return results;
}

let numbers =[1,2,3,4,5,6,7];
console.log(filter(numbers,isodd))     //this is my callback funtions
                                           //A callback is a function passed as an argument to another function.
