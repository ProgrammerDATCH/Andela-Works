let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let loginBtn = document.getElementById('loginBtn');
let loginForm = document.getElementById('loginForm');

usernameInput.addEventListener('keyup', validateData)
passwordInput.addEventListener('keyup', validateData)

loginForm.addEventListener('submit', (e)=>handleSubmit(e))

function validateData(){
    if(usernameInput.value.trim() != "" && passwordInput.value.trim() != ""){
        loginBtn.removeAttribute('disabled');
        loginBtn.classList.add("login-btn-active");
        return;
    }
    loginBtn.setAttribute('disabled', '');
    loginBtn.classList.remove("login-btn-active");
}

function handleSubmit(e){
    e.preventDefault();
    alert(`Logged in successfully! as ${usernameInput.value.trim()}.`);
}