// Définir les variables qui vont contenir les valeurs des champs du formulaire
// lorsqu'on fait un getElementById la variable devient un objet 

let userName = document.getElementById("name");
let firstname = document.getElementById("firstname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let bio = document.getElementById("bio");


let submit = document.getElementById("submit");
submit.addEventListener("click", function() {
    console.log(userName.value, firstname.value, email.value, password.value, bio.value);
;
});



