//promises 
//here using this promise 
//here promise has three statur pending,rejected,fullfilled
//when we set thetime out then the time for which the code is waiting to get executed then that is called pending state of the promise
//when there is the error then for a good practice try to catch the error 
//we will use the promise the to write the asyc code 



// let mypromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I aminside the promise 1');
      
//     }, 5000);
// });

// let merapromise2=new Promise(function(resolve,reject){
//     setTimeout(function(){ 
//         console.log('I aminside the promise 2');
//     }, 3000);
// });

// console.log('phela');
//on executing this set of the code we will see that there is the execution of the code parlleley

//there are the 2 method which we can apply on this promise 
// 1> then() it came into the action when thereis the complete fullfillment of the promiseHooks
// 2>catch() it came into the action when thereis the error in the code then it came into the action to cathch the errror 

// let mypromise2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I aminside the promise 1');
      
//     }, 5000);
//     //resolve(123445654656);
//     reject(new Error('Bhaishab error aaye hai'))
// });

// mypromise2.then(value=>console.log(value));

// here is the complete funtion of the arrow function above which we have
// mypromise2.then(function(value) {
//     console.log(value);
// });

// mypromise2.catch((error)=>{console.log("recieeved an error")});

//after the completion of the promise what we wanted to do is done by the then wala statment 

// now we have the one more method to catch the error in the then statment 


//using the then method to get the error in this 
// mypromise2.then((value)=>{console.log(value)},(error)=>{console.log("recived an error")});

// console.log('phela');

//multiple promisees
let case1=new Promise(function(resolve, reject){
    setTimeout(()=>
{
    console.log('settimeout1 started');
},2000);
resolve(true)
})

// case1.then(()=>{
//     let case2=new Promise(function(resolve,reject){
//         resolve('case2 resolved');
//     })
//     return case2;
// }).then((value)=>console.log(val));


let output= case1.then(()=>{
    let case2=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('settimeout2 started');
        },3000);
        resolve('case2 resolved');
    })
    return case2;
})
output.then((value)=>console.log(value));
//here the value in this is the "resolve('case2 resolved');" this is the statement for the valuem 


//here case1.then() is returning the promise 

//here in the above case we might assume that we will get the "settletimeout1" but we wont because it will take the 2second and also it will 
//after the 2 second it will move into the eventqueue and in between theses we will reach the then statment and in that
//there will be the starting of the case and theat will send to the event quweue and the resolve value of case will stored in the wadda2 and hence it will get the print 

//here in the resolve can have any value

//this above value is called the promise chaining that is after every promise completion we will use the "then" statemen
//to avoid this promise chaining we ahve the concept of the async-await
//asynawait- is used to work with promises and these are the special syntax 
//aync function return the promises ,here we will use the await p1 it means that wait till the p1 ends to work

async function abcd(){
    return "kya huia terta";
}

async function utility(){
let m1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("deljo me bhut garmi hia")
    },1000);
});

let m2=new promiseHooks((resolve,reject)=>{
    setTimeout(()=>{
        resolve("m2 is cool");
    },5000);
});
let m1m=m1;
let m2m=m2;
return [m1m,m2m];
}