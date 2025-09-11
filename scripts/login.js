import {user} from '../datas/details.js'

const log = document.querySelector('.login-js');
let username;
let password;

log.addEventListener('click',(e)=>{
    e.preventDefault();
    username = document.querySelector('.username-js').value;
    password = document.querySelector('.password-js').value;
    let isvalid = false;
    for (let index = 0; index <user.length; index++){
        if (username === user[index].username && password === user[index].password){
            isvalid = true;
            break;
        }}
        if(isvalid){
            window.location.href = "bank.html";
        }
        else{
            alert("Invalid username or password!");
        }
});

const login = document.querySelector('.login-container');
const sign = document.querySelector('.sign-container');

document.querySelector('.login-button').addEventListener
('click', ()=>{
    login.classList.add('active');
    sign.classList.remove('active');
});
document.querySelector('.sign-button').addEventListener
('click', ()=>{
    sign.classList.add('active');
    login.classList.remove('active');
});


    document.querySelector('.sign-js').addEventListener
    ('click',(e)=>{
        e.preventDefault();
        username = document.querySelector('.sign-username-js').value;
        password = document.querySelector('.sign-password-js').value;
        user.push({"username": username,"password":password})
        window.alert("YOUR ACCOUNT IS CREATRED YOU CAN LOGIN NOW")
    });