 /** mostramos los datos personales (correo, telefono, direccion) luego de hacer click donde se indica en la primer pagina */

function datosPersonales() {
  document.getElementById("email").innerHTML = "carolina.obrein@example.com";
  document.getElementById("telefono").innerHTML = "(704) 960-6666";
  document.getElementById("direc").innerHTML = "Madrid, España";

}

/** cambiamos el tamaño de la foto de perfil cuando el mouse pasa sobre ella, en la segunda pagina */

function bigImg(grande) {
    grande.style.height = "500px";
    grande.style.width = "500px";
}
function normalImg(normal) {
    normal.style.height = "150px";
    normal.style.width = "150px";
}

/** mostramos una alerta cuando se carga el body de la tercer pagina */

document.getElementById("home").onload = function(){
    alert(alerta);
} 

var alerta = 'Está es la última página del cv.';