var icon = document.getElementById("icon-error");
var error = document.getElementById("error");
var email = document.getElementById("email");
var form = document.querySelector("form");

function onClick(e){ 
    e.preventDefault();
    icon.style.visibility = "visible";
    error.innerHTML = "Please enter a valid email";
    email.style.border = "2px solid hsl(0, 93%, 68%)" ;
}; 

email.addEventListener("invalid", onClick);  

