window.onload=inicio;

function inicio(){
    let cantidad = document.querySelectorAll(".cajas1");
                           //getElemnetsByClassName
    alert(cantidad.length);
    document.querySelector("body").innerHTML += '<div class="cajas1">hola</div>';
    alert(cantidad.length);
    // innerHTML es para hacer algun cambio o agregar algo al html
}