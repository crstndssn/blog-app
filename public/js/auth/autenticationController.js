const auth = new Autentication();

// Sign Up Email And Password
const signUpForm = document.getElementById('form-signup');
signUpForm.addEventListener('submit', (e) => {
    
    e.preventDefault();
    
    const name = signUpForm['signup-name'].value;
    const email = signUpForm['signup-email'].value;
    const password = signUpForm['signup-password'].value;
    
    auth.signUpEmailPassword(name, email, password);

    signUpForm.reset();
    modalSignup.style.display = "none"

})


// Login User
const signInForm = document.getElementById('form-login');
signInForm.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    console.log(email, password)

    auth.authEmailPassword(email, password);
    modalLogin.style.display = 'none';

})


// Login Google
const authGoogleBtn = document.getElementById('login-google');
authGoogleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.authGoogle();
    console.log('logged google')
    modalLogin.style.display = 'none';
})


// Signup
const signUpGoogleBtn = document.getElementById('signup-google');
signUpGoogleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.authGoogle();
    console.log('logged google')
    modalSignup.style.display = 'none';
})