alert("PLEASE REGISTER") ;

let button1 = document.querySelector(".register") ;

let input1 = document.querySelector("#name") ;
let input2 = document.querySelector("#number") ;
let input3 = document.querySelector("#email") ;
let input4 = document.querySelector("#password") ;

button1.addEventListener("click" , function()
{
    if(input1.value.length==0)
        {
            alert("please fill your name") ; 
        }
    else if(input2.value.length==0)
        {
            alert("please fill your phone number") ;
        }
    else if(input3.value.length==0)
        {
            alert("please fill your email") ;
        }
    else if(input4.value.length==0)
        {
            alert("please fill your password") ;
        }
    else{
    alert("you have successfully registered") ;

    window.location.href = "home.html" ;
    }
})