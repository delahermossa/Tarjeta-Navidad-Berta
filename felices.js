
window.onload;

setTimeout(mostrar, 3000);
setTimeout(transparentarImagen, 3000);

function mostrar() {
    document.getElementById("felicitacion").style.visibility = "visible";
    document.getElementById("felicitacion").classList.toggle('line-1');
    document.getElementById("felicitacion").classList.toggle('anim-typewriter');
    document.getElementById("divAnimacion").style.visibility = "visible";
    document.getElementById("playPause").style.visibility = "visible";
    document.getElementById("boton").style.visibility="visible";



}

function transparentarImagen() {
    document.getElementById("imagen").style.visibility = "hidden";
}


function showMessage() {
    alert("¡Te deseo una feliz Navidad!");
}

function fadeInText() {
    var text = document.querySelector("felicitacion");
    text.style.opacity = 1;
  }

  
