var titulo= document.getElementById('form-signin-heading');
var email= document.getElementById('inputEmail');
var contrasenha= document.getElementById('inputPassword');
var recuerdame= document.getElementsByTagName('span')[0];
var boton= document.getElementsByClassName('btn')[0];

function translate(){

  titulo.innerHTML= "Por favor inicia sesion";
  email.placeholder= "Correo electronico";
  contrasenha.placeholder= "Contraseña";
  recuerdame.innerHTML= "Recordar Datos";
  boton.innerHTML= "Iniciar Sesion";
};

boton.addEventListener('click', function abc (event){event.preventDefault();
var texto= "El correo electronico es :"+"<br>"+email.value+ "<br>" +"La contraseña es :"+"<br>"+contrasenha.value;
lugarMostrar.innerHTML= texto;
});

translate();
