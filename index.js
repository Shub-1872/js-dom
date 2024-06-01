  // function eventfunction(){
//     console.log('i have click on the document');
 // document.addEventListener('click',eventfunction);

// //use the addeventlsitner for the $0 a way to fetch the element from the document
// //here the double equality will try to do the type corroision a nd by this means i means ihave to pass the same function to remove the event listner if we want to remove the added event listner
// document.removeEventListener('click',eventfunction);

// //read about the dispatch event 
 
// //pahases of a aevent 

// const content=document.querySelector('#wrapper');
// content.addEventListener('click',function(babbar){
//     console.log(babbar);

// });

let links=document.querySelectorAll('a');
let thirdlink=links[2];
links[2].addEventListener('click',function(event){
    event.preventDefault();
    console.log('maza ayya');
}
)


//creation of the new element using the div
// let mydiv=document.createElement('div');
// for(let i=1;i<=100;i++){
//     let newelement=document.createElement('p');
//     newelement.textContent='this is is para'+i;
//     newelement.addEventListener('click', function(event) {
//         console.log('i have clicked parea');
//     });
//     mydiv.appendChild(newelement);
// }
// document.body.appendChild(mydiv);


//optimation of this program

//optimisation1
// function  para1(event) {
//     console.log('para' +event.target.textContent);
// }

//earlier every div has the different function and also the different event lsitneer but know all of them has  the 
//same funtion
//now i also atatching the main div to all of these

// let mydiv=document.createElement('div');
// mydiv.addEventListener('click',para1); 
//no we can not access the para graph individually earlier we can do but now we can not do 
//here we are tracking the event but not able to know about the inviduality of the para it is coming earlier it was
//but know we will use the target etc to get teh individuality
//here we are applying the evetnlistner to the div and also we are trying to get the para

//using the event.target property and we are trying to get
// for(let i=1;i<=100;i++){
//     let newelement=document.createElement('p');
//     newelement.textContent='this is is para'+i;
//     mydiv.appendChild(newelement);
// }

// here when we use the document.appendchild direcly then there will be directly 
// document.body.appendChild(mydiv);




//casse2
// let element=document.querySelector('#wrapper');
// element.addEventListener('click',function(event){
//     console.log('span par clcik kiya hia'+ event.target.textCONTENT);
// });


//Here in this we  want that the only on clicling the para we want this event listner to be work buit
//it work for the others too so we use the target node 

//here we are doing the filtering on the basis of teh specific tag
let element=document.querySelector('#wrapper');
element.addEventListener('click',function(event){
    if(event.target.nodeName==='SPAN'){
    console.log('span par clcik kiya hia'+ event.target.textCONTENT);
    }
});

