

//reflow and the repaint
// hwo change in the css using the javacript 
// how to create the new Element
// inner html inner text

/*performances
measure the speed of the code writing 
how to  write the effcicent and the proper codee
event loop -->most important 

using the performance.now we can get thje time required to get the fuction
to get to know the time our progeam take to run is decided by the perfromance wala function

*/

// here the performance check of the given fucntion
const t1=performance.now();
for(let i=1;i<=100;i++){
let newelement=document.createElement('p');
newelement.textContent='this is para'+i;
document.body.appendChild(newelement);
}
const t2=performance.now();
console.log("this took"+(t2-t1)+"ms");
const t3=performance.now();
let mydiv=document.createElement('div');
for(let i=1;i<=100;i++){
    let newelement=document.createElement('p');
    newelement.textContent='this is para'+i;
   mydiv.appendChild(newelement);
    }
    document.body.appendChild(mydiv);
    const t4=performance.now();
    
console.log("this took"+(t4-t3)+"ms");

/*
about reflow and the repaint

when ever there is the adding of the any apragraph there is willbe the calculation of the widdth and its position and it is called the reflow
 and after the addition of the new div there will be the formation of the new screen and to show that screen pixel by pixel is called repaint
means if there is the addition of the one reflow and the one repaint and hence we have to minimise the reflow and the repaint
reflow is intensive

so pahle reflow then repaint and then the better practice is the one in which the number of the reflopw and the repaint is minumum
so for the addition of the 100 para there will be the 100reflow and the 100 repaint

document fragment is a light object and there will be no reflwo and the repaint in case of the addition of things to the document fragment
so to avoid this multiple reflow and the repaint we have the concept of the document DocumentFragment
and when there is addition of the para or div on the document DocumentFragment then there will be no reflow and the repaint and also remember that 
when this DocumentFragment will be added in the document then reflow and repaint takes palce from 100 to 1 
*/
// DocumentFragments are DOM Node objects which are never part of the main DOM tree. The usual use case is to create the document fragment, append elements to the document fragment and then append the document fragment to the DOM tree. I
// n the DOM tree, the document fragment is replaced by all its children.



//addition of the para  through the document fragmentation 
// const t5=performance.now();
// let fragment=document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let newelement=document.createElement('p');
//     newelement.textContent='this is para'+i;
//  fragment.appendChild(newelement);
//     }
//     document.body.appendChild(fragment);  //here is the case of the single repaint and the single reflow
//     const t6=performance.now();
//     console.log("this took"+(t6-t5)+"ms");


//the call stack in this java script
//single threading it means the one command at a time and the javasscript is the single threading 
//read the differnce between the single threading and the multi threading  

//here in the java script is that there will be the updation of the language in theline wise line 
//unless there will be the envocation of the language there will no running of the fucntion 
//here the function has the run to completion of the function
//javascript doesnot execute the mutliple or multiple fucntion at the ssame time
//as the function will complete then its deletion will be occur from the call stack on calling there will  addition of the functino in the call stack
//in the java script there will be calling of the function one byone in a synchronuous way 
//asyunc 

//event loop  watch the lectures of the philirobert and the loupe
//a> call stack b> event queue c>browser 
//all the function which are  in the browser will given to the evevntqueue and remeber that the function in the event queue will be apply only when thereis the empty call stack 
//so assumne our event listner in the event queueu then it is not necessary on the click our evetlistner will come inaction because it depends whethere the call stack is empty ronot 
//after the completion of the synchronous application our function in the call stack will be uploaded

//async code is  hadle by the browser and the callstack send to the broswer and the broswer send it to the eventqueue

//settimeout means the minimum time for which the we have to wait before its application but itis not essential that utne time me ho jaye it depends on the call stack is empty infact it is theminnimum time in which there will be updation
//f thecode execution time usse jyayday bhi ho sakta hai
//as the timer start then the function will send to the browser and as the timeer ends then the broswer will send to the queue and if the stack is empty then our fucntion will be applied else it will not apply
//setimeout has the 2 parameter one the function in which there will be updation and the othwe will be the time after which we want ki our function is uploaded

//how concurrency is in the javascript and also about the mutli threading 
//we will use the settimeout then whenever you are trying to defer something the stack in the class
// setTimeout(function(){
//     console.log('hello everyone');
// },10000);


// whenever we are going to pass the 0sec in the setTimeout then we might think that it will immediately applied but that is wrrong it will pss 
//in the event loop and the wait for the emptying of the stack if it will then our code will be applied else it 
// by the settimeout ,we mean that whenever we are trying to defer something until the stack is in the class

// async code means the code is applicable to lie-line


asychronous and synchronous
Synchronous programming is a way for computers to do things one step at a time, in the order they are given the instructions.

// about the callback function
a callback function is a function that is passed as an argument to another function, and it is executed after the first function has finished running

//about the promises
A promise represents a way of handling asynchronous operations in a more organized way. I