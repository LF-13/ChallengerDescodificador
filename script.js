/*A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/

function criptografar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();


    var textoCriptografado = texto.replace(/e/igm,"enter");
    var textoCriptografado = textoCriptografado.replace(/o/igm, "ober");
    var textoCriptografado = textoCriptografado.replace(/i/igm, "imes");
    var textoCriptografado = textoCriptografado.replace(/a/igm, "ai");
    var textoCriptografado = textoCriptografado.replace(/u/igm, "ufat");

    document.getElementById("imagemDireito").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCriptografado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "heranca";
}

function descriptografar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var textoCriptografado = texto.replace(/enter/igm, "e");
    var textoCriptografado = textoCriptografado.replace(/ober/igm, "o");
    var textoCriptografado = textoCriptografado.replace(/imes/igm, "i");
    var textoCriptografado = textoCriptografado.replace(/ai/igm, "a");
    var textoCriptografado = textoCriptografado.replace(/ufat/igm, "u");

    document.getElementById("imagemDireito").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCriptografado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "heranca";
}
function copiar() {
    var conteudo = document.querySelector("#texto2");
    conteudo.select();
    document.execCommand("copiar");
    alert("foi copiado!");
}