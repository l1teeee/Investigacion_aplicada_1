let edad = prompt("¿Cual es tu edad?", 18);

let mensaje = (edad < 18)?
() => alert("Hola!") :
() => alert("Saludos!, Bienvenido");

mensaje();
