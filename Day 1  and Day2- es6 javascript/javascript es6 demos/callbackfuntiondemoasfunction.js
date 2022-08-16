
function isodd(number){

    return number%2!=0;

}

function filter(numbers,fn){

    let results =[];
    for(const number of numbers){

        if(fn(number)){
           
            results.push(number);
        }


    }
    return results;
}

    let num=[1,2,3,4,5,6];
    console.log(filter(num,isodd))




