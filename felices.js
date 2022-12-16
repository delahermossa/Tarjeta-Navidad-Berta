
window.onload;

/**
 * Muestra la felicitación segundos después de recargar la página
 */
setTimeout(mostrar, 3000);

/**
 * Transparenta la imagen principal 3 segundos después de recargar la página 
 */
setTimeout(transparentarImagen, 3000);
/**
 * Función que muestra los elementos llamados en el id  
 */
function mostrar() {
    document.getElementById("felicitacion").style.visibility = "visible";
    document.getElementById("felicitacion").classList.toggle('line-1');
    document.getElementById("felicitacion").classList.toggle('anim-typewriter');
    document.getElementById("divAnimacion").style.visibility = "visible";
    document.getElementById("playPause").style.visibility = "visible";
    document.getElementById("boton").style.visibility="visible";



}
/**
 * Función javascript que hace transparente la imagen
 */
function transparentarImagen() {
    document.getElementById("imagen").style.visibility = "hidden";
}

/**
 * Función javascript que muestra un alert de felicitación al hacer click en un botón
 */
function showMessage() {
    alert("¡Te deseo una feliz Navidad!");
}

// function fadeInText() {
//     var text = document.querySelector("felicitacion");
//     text.style.opacity = 1;
//   }

  
