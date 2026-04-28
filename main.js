// alert("prisi");
//const dni = "48566403";
//let edad = 18;
//edad = 19;
//console.log(edad);

const DNI = prompt("ingrese DNI");
if (DNI.length > 8) {
  alert("ingresa un DNI valido");
}
const nombreDeUsuario = prompt("ingresa tu nombre");
const apellidoDeUsuario = prompt("ingresa tu apellido");

const email = prompt("ingresa tu email");

const edad = prompt("ingresa tu edad");
if (edad >= 18 && edad <= 100) {
  alert("podes entrar");
} else {
  alert("no podes entrar");
}

alert("hola" + " " + nombreDeUsuario + " " + apellidoDeUsuario);
