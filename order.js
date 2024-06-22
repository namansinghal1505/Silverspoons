document.addEventListener("DOMContentLoaded", function() {
    let buttons = [];
    let counts = [];
    let inputs = [];
    let amounts = [] ; 

    for (let i = 1; i <= 8; i++) {
        buttons.push(document.querySelector(".ADD" + i));
        counts.push(0);
        inputs.push(document.querySelector(".number" + i));
        amounts.push(document.querySelector(".amount" + i)) ;
        
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            counts[i]++;
            inputs[i].value = counts[i];
            amounts[i].innerText = counts[i]*40 ;

        });
    }
});

let confirm = document.querySelector(".btn") ;

confirm.addEventListener("click" , function (){
    alert("ORDER CONFIRMED") ; 
}) ; 











