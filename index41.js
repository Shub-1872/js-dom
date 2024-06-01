//asynchronous javascript 
//api  all the put call/debt call etc/
//java script is single threded language at a time one code will be handled
// what is concureency and how it will be maintained, and how async will be executed
//here in this the code will be apply but kab hoga ye nahi pata like the evetlistner wala code
// function sync(){
//     console.log('first');
// }
// sync()
// console.log('second')

//async code here it is because third is at the last though it is written first
// setTimeout(function(){
//     console.log('third')
// },3000)

// function sync(){
//     console.log('first');
// }
// sync()
// console.log('second')

//using async code we can maintain the concurrent

//api(application programming interface) the connection between the backend and the frontend 
//read about the git /put and all
//features of the async code 
/*a> clear and the concise b.better error handling 
easier bugging 
findout the others
*/


//promises  
//if we want to excute anyhting in the javascript parallely in the background then we use thsi promises wo kam ya toh fulfill hoga ya suspend hoga

// let merapromise=new Promise(function(resolve,reject){
//     console.log('I am insiide the proimise');
//     resolve(1998)
// })

// console.log('ohela');

let merapromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('i am inside the promsie');
    },5000);
    // resolve(2233);
    reject(new Error('error aytya hai'))
//by using the reslove we are explicitly showing that the promises are resolved and by using that value we are making sure that 
//atlast same value return to confirm that thte value is resolved



});
console.log('phel');