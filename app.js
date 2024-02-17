let imagemAtual = ""; // Defina a variável imagemAtual antes de utilizá-la

function digitando() {
    document.getElementById("__imagem-tux").src = imagemAtual;
    imagemAtual = "imagens/processando.jfif";
    document.getElementById("__mensagem1").innerHTML = 'Texto sendo processado...';
    document.getElementById("__mensagem2").innerHTML = 'Aguarde!';
}

function criptografar() {
    document.getElementById("__imagem-tux").src = imagemAtual;
    imagemAtual = "imagens/joinha.jfif";
    let mensagemDigitada = document.getElementById('__digitar-mensagem').value;
    digitando();
    //-------------------------------------------------------------------------
    let codificador = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };
    mensagemDigitada = mensagemDigitada.replace(/[aeiou]/g, function(criptografia) {
     return codificador[criptografia] || criptografia;
    });
//---------------------------------------------------------------------------

    document.getElementById("__mensagem1").innerHTML = mensagemDigitada;
    document.getElementById("__mensagem2").innerHTML = '';
    //-------------------------------------------------------------------------
}

function descriptografar() {
    document.getElementById("__imagem-tux").src = imagemAtual;
    imagemAtual = "imagens/joinha.jfif";
    let mensagemDigitada = document.getElementById('__digitar-mensagem').value;
    digitando();
     //-------------------------------------------------------------------------

     let decodificador = { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' };
     mensagemDigitada = mensagemDigitada.replace(/ai|enter|imes|ober|ufat/g, function(criptografia) {
         return decodificador[criptografia] || criptografia;

        });
     //---------------------------------------------------------------------------
    document.getElementById("__mensagem1").innerHTML = mensagemDigitada;
    document.getElementById("__mensagem2").innerHTML = '';
    //-------------------------------------------------------------------------
}
