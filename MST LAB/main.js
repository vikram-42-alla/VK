import { User } from './login.js'; 
document.getElementById("button").addEventListener("click",()=>{

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value; 
    const loginResult = User.validate(username, password);
    console.log(loginResult); 
    document.getElementById('loginResultDisplay').textContent = loginResult; 
})