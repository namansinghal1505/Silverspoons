document.addEventListener("DOMContentLoaded" , function() {

let location = document.querySelector(".location") ;

let locationtable = document.querySelector(".locationdropdown") ;

location.addEventListener("mouseover" , function()
{
    locationtable.style.display = "block";
})


location.addEventListener("mouseout" , function()
{
    locationtable.style.display = "none" ;
})

let about = document.querySelector(".ABOUT") ;

about.addEventListener("click" , function()
{
    window.location.href = "about.html" ;

})

}) ;

const button1 = document.querySelectorAll(".img") ;

for(let i = 0 ; i<8 ; i++)
    {
        button1[i].onclick = function1 ; 
    }  

function function1()
{
    window.location.href = "order.html" ;
}



