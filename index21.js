// console.log('ejlle')

//the event oject

// function eventfunction(){
//     console.log('I have clicked on the documrent');
// }

// document.addEventListener('click',eventfunction);
//document.removeEventListener('click',eventfunction);

const content=document.querySelector('#wrapper');
content.addEventListener('click',function(event){
    console.log(event);
})

// here at the palce of the "event" we can take the name of the anything 
// when ever on the browser thereis the event then the add event ka function will recieve the eventobject and then it will move 


/*default action here using the preventdefault we can prevent the default function of the given object 
// toget the all the tag prsent on the page we will use the 
let links=document.querySelectorAll('a') using this we can get all the anchor tag

now to get the third link  use the case of the 
let thirdlink=links[3];'



*/


/*default action
let links=document.querySelectorAll('a');
let thirdlink=links[2];
thirdlink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('maaza ayay');
})
*/


//too many event
/*let mydiv=document.createElement('div');
for(let i=1;i<=100;i++){
    let newelement=document.createElement('p');
    newelement.textContent='this is para'+i;
    newelement.addEventListener('click',function(event){
        console.log('I ahvea clicked the para');
    });
    mydiv.appendChild(newelement);
}

document.body.appendChild(mydiv);
*/


/*now we are optimising this above code 
let mydiv=document.createElement('div');

function parastatus(event){
    console.log('I ahvea clicked the para');
}
//earlier we are only directly to each and evcery para nand know we are applying to the div directly and by this 
//way i am loosing the individualtity of the paragraph

mydiv.addEventListener('click',parastatus);
for(let i=1;i<=100;i++){
    let newelement=document.createElement('p');
    newelement.textContent='this is para'+i;
 
    mydiv.appendChild(newelement);
}

document.body.appendChild(mydiv);
*/


//now to get this individuality of this para graph we havea a property called target
let mydiv=document.createElement('div');
function parastatus(event){
    console.log('para'+event.target.textContent);
}
mydiv.addEventListener('click',parastatus);
for(let i=1;i<=100;i++){
    let newelement=document.createElement('p');
    newelement.textContent='this is para'+i;
 
    mydiv.appendChild(newelement);
}

document.body.appendChild(mydiv);


// here using the "event.target.nodeName"  using this we can do the filtering that if we apply the listner to theelemrnt then doing this 
// we can set ki kis element ke liye listner chalega and ksiskeliye nahi chalega

// here we know that script tag is used at the last always but using the 
// <script>
//     document.addEventListener('Domcontentloaded',function(){
// //this domcontent loaded is shoeing that this part of the code is applicable when we have the fucntionn get loded
//     });
// </script>




// ou often need to find specific parts of the page or do things with them. Three methods you might use are 
// matches(), closest(), and contains().
// matches() checks if an element matches a certain style rule. For example, if you have a button and you want to see if it has a class of "active", 
// you could use button.matches('.active'). I
// If you have an element and you want to find its nearest parent with a certain cl
// ass, you can use closest() like this: element.closest('.classname').

//third argument with the event listner
// once: A boolean value that specifies whether the event listener should be removed after it is invoked once.
// capture: A boolean value that specifies whether the event should be captured during the capturing phase. The capturing phase happens before the bubbling phase.



//about the meaning of the capture phase set to  be true 
// When capture is set to true, the event handler will be triggered during the capturing phase. This means that the event will be handled when it's in the process of going down from the root of the document tree to the target element.
// function  handleClick(){
//     console.log('some one is clicling')
// }
// btn.addEventListener('click', handleClick, { once: true, capture: false });

// When capture is set to false (or omitted, as it defaults to false), the event handler will be triggered during the bubbling phase. This means that the event will be handled when it's 

// Handlers attached in this phase are executed when the event is directly t
