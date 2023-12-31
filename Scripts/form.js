document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".container-login");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");
var ojo_login = document.getElementById('Ojo1');
var ojo_register = document.getElementById('Ojo2');
var input_pass_login = document.getElementById('InputPassLogin');
var input_pass_register = document.getElementById('InputPassRegister');
const btnreg = document.querySelector('#btnreg');


function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{

        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


function iniciarSesion(){
    if (window.innerWidth > 850){
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register(){
    if (window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "420px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}
  
ojo_login.addEventListener("click", function(){
    if(input_pass_login.type == "password"){
        input_pass_login.type = "text"
        ojo_login.style.opacity = 0.8
    }else{
        input_pass_login.type = "password"
        ojo_login.style.opacity = 0.3
    }
})

ojo_register.addEventListener("click", function(){
    if(input_pass_register.type == "password"){
        input_pass_register.type = "text"
        ojo_register.style.opacity = 0.8
    }else{
        input_pass_register.type = "password"
        ojo_register.style.opacity = 0.3
    }
})  
    


btnreg.addEventListener("click", (event) => {    
    const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;    
    var contraseña = document.registro.contrasena;
    if(!(contraseña.value.match(decimal))) {
        alert("La contraseña debe contener al menos 8 caracteres, una minúscula, un número y un carácter especial.");
        event.preventDefault();
    }
})
