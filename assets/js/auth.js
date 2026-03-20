const login = document.getElementById("login-form");
if(login){
login.addEventListener("submit", e=>{
e.preventDefault();
alert("Login success");
});
}

const register = document.getElementById("register-form");
if(register){
register.addEventListener("submit", e=>{
e.preventDefault();
alert("Registered");
});
}