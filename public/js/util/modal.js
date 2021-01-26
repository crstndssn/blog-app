// modal login
var modalLogin = document.getElementById("modal-login");
var btnLogin = document.getElementById("btn-login")
var spanLogin = document.querySelector(".close-login");
var modalSignup = document.getElementById("modal-signup");
var spanSignup = document.querySelector(".close-signup");

btnLogin.onclick = () => {
    modalLogin.style.display = "block";
}

spanLogin.onclick = () => {
    modalLogin.style.display = "none";
}

// modal sign up

var btnSignup = document.getElementById("btn-signup")

btnSignup.onclick = () => {
    modalSignup.style.display = "block";
}

spanSignup.onclick = () => {
    modalSignup.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modalSignup){
        modalSignup.style.display = "none"
    }
    if (event.target == modalLogin){
        modalLogin.style.display = "none"
    }
}

