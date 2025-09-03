import {user} from '../datas/details.js'

const log = document.querySelector('.login-js');
let username;
let password;

log.addEventListener('click',(e)=>{
    e.preventDefault();
    username = document.querySelector('.username-js').value;
    password = document.querySelector('.password-js').value;
    
    if (username === user[0].username && password === user[0].password){
        window.location.href = "bank.html";
    }else {alert("Invalid username or password!");}

})