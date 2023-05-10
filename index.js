function encriptar(){
    let texto=document.getElementById("texto").value;
    let titutloMensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let muneco=document.getElementById("muneco");

    let textoCifrado=texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    if(texto.length !=0){
        document.getElementById("texto").value=textoCifrado;
        titutloMensaje.textContent="Texto encriptado con éxito";
        parrafo.textContent="";
        muneco.src="./img/encriptado.jpg";
    } else{
        muneco.src="./img/muneco.png";
        titutloMensaje.textContent="Ningún mensaje fue encontrado";
        parrafo.textContent="ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }  
}


function desencriptar(){
    let texto=document.getElementById("texto").value;
    let titutloMensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let muneco=document.getElementById("muneco");

    let textoCifrado=texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

      if(texto.length !=0){
        document.getElementById("texto").value=textoCifrado;
        titutloMensaje.textContent="Texto desencriptado con éxito";
        parrafo.textContent="";
        muneco.src="./img/desencriptado.jpg";
    } else{
        muneco.src="./img/muneco.png";
        titutloMensaje.textContent="Ningún mensaje fue encontrado";
        parrafo.textContent="ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }   










}