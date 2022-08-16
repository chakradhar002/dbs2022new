let mypromise = new Promise(function(myResolve,myReject){
 let x=0;

 if(x==0){
    myResolve("ok");  //when get scucessful
 }else
   
    myReject("not ok");   // when we get some error
});


mypromise.then(
function(value){
    display(value);
    console.log("scucessful get response")
},

function(error){
    display(error);
    console.log("not get response")
});


function display(some){
    console.log(some)
}