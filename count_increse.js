 let add=document.getElementById("add"),
 sub=document.getElementById("sub"),
 value=document.getElementById("value");

let a=0;

add.addEventListener("click", ()=> {
    a++;
    value.innerText = a;
})

sub.addEventListener("click", ()=> {
    a--;
    value.innerText = a;
})