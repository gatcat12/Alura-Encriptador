document.querySelector("#entrada").focus();
function ocultarMensaje(){
    
    document.getElementById("persona").style.visibility="hidden";
    document.getElementById("mensaje").style.visibility="hidden";
}

function encriptar(){

    var texto = document.querySelector("#entrada").value.toLowerCase();
    let palabra="";

    for(i=0;i<=texto.length-1;i++){
        letra = texto[i];
        if (letra =="a"){
            letra = "ai";
            }
            else if (letra =="e"){
                letra = "enter";
            }
            else if (letra =="i"){
                letra = "imes";
            }
            else if (letra =="o"){
                letra = "ober";
            }
            else if (letra =="u"){
                letra = "ufat";
        }else{
            letra = letra;
        }
        palabra = palabra + letra;          
    }
    ocultarMensaje();
    document.getElementById("salida").innerHTML=palabra;
}

function desencriptar(){
    
    let texto = document.querySelector("#entrada").value.toLowerCase();

        var frase = texto
        .replace(/ai/g,"a")
        .replace(/enter/g,"e")
        .replace(/imes/g,"i")
        .replace(/ober/g,"o")
        .replace(/ufat/g,"u");

        ocultarMensaje();
        document.querySelector("#salida").innerHTML=frase;     
    }

    function copiarTexto(){
        let texto = document.querySelector("#salida");
        texto.select();
        texto = document.execCommand("copy");
        alert("Se ha copiado el texto");

    }

    function limpiar(){
        document.querySelector("#salida").value="";
        document.querySelector("#entrada").value="";
    }
