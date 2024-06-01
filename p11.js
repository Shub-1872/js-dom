

console.log("hello everyone")
let c1=document.getElementById("increment");
let c2=document.getElementById("decrement");
let c3=document.getElementById("value");
let number=parseInt(c3.textContent);
// becuase the c3,textContent will return me the string so convert it to the number 
c1.addEventListener('click',()=>{
number++;
c3.innerHTML=number;
});
console.log(number)


// decrement ka value hoga yaha par
c2.addEventListener('click',()=>{
number--;
c3.innerHTML=number;
})




// in case of the button we can also use the onclick attribute of the button which will apply the function on  the clicking