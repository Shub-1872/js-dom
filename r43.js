// we will use the async-await function when wewant to use the promises for the numebr of the time 
// to make thefunction async just async before it
// async function abcd(){
//     console.log('abcs');
// }
// async  function utility(){
// let m1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("deljo me bhut garmi hia")
//     },1000);
// });

// let m2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("m2 is cool");
//     },5000);
// });
// let m1m= await m1;
// let m2m= await m2;
// return [m1m,m2m];

// }



// fetch api is a promise
//it will return the promises 
//read about the json format 
async function utility(){
let content= await fetch('https://jsonplaceholder.typicode.com/todos/1');
let output =await content.json();
console.log(output);
}


// i  have stored all the data in thecontent which is coming from the fetching
//think the same without the use of the json with the other 
//json format me convert karna means that we are converting them to the object
//remember that it is not essential that we canfetch all the api sometimes that api is restricted to some people only so to make sure that 
//that call is coming form that person we will use the option along with the url
// think about the difference between the cases of the function inside the function and also with the return parameter and the 
// we will store those value
// closures 

// in the case of the closures when there iwll be the case of the nested loop then there will reference not the copy
function init(){
    let name="shubham";
    function displayname(){
        return (name);
    }
    return displayname();
}

let func1=init();
func1();


// classes and the export moduls in the javascript 