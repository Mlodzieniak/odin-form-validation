const pswd = document.querySelector('#password');
const pswdConfirm = document.querySelector('#confirm-password');
const pswdDiv = document.querySelector('#passwordDiv')
let password = '';
let passwordConfirm = '';

const message = document.createElement('p');
        message.classList.add('error');
        pswd.style.outline = "solid 1px red"
        pswdConfirm.style.outline = "solid 1px red"
        pswdDiv.appendChild(message);

pswd.addEventListener('keyup', ()=>{
    password = pswd.value;
    passwordsAreTheSame()
})
pswdConfirm.addEventListener('keyup', ()=>{
    passwordConfirm = pswdConfirm.value;
    passwordsAreTheSame()
})
function passwordsAreTheSame(){
    if(password!==passwordConfirm){
        message.textContent = 'Passwords do not match';
        pswd.style.outline = "solid 1px red"
        pswdConfirm.style.outline = "solid 1px red"
    }
    if(password===passwordConfirm){
        message.textContent = '';
        pswd.style.outline = "solid 1px rgb(57, 150, 39)"
        pswd.style.backgroundColor = "rgb(232, 240, 254)"
        pswdConfirm.style.outline = "solid 1px rgb(57, 150, 39)"
        pswdConfirm.style.backgroundColor = "rgb(232, 240, 254)"
    }
}