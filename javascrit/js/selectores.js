window.onload=inicio;
// function inicio(){
//     document.getElementById("cosa").style.color="red";
//     document.getElementById("cosa").style.backgroundColor="black";
// }

function inicio(){
    document.getElementById("cosa").onclick=cambio_color;
  
}

function cambio_color(){
    var x=document.getElementById("cosa").style; 
    x.color="red";
    x.backgroundColor="blue";
    x.border="4px dotted green";
}

