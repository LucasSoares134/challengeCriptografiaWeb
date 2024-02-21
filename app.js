let imagemAtual = ""; /* Cria a variável imagemAtual e já inicia com o valor de uma string vazia.*/

function digitando() {//Função,acionada, ao começar a digitar...
    document.getElementById("__imagem-tux").src = imagemAtual;
    imagemAtual = "imagens/processando.jfif";/*quando a Função for chamada,altera a imagem,para o novo src.*/
    document.getElementById("__mensagem1").innerHTML = 'Texto sendo processado...';
    document.getElementById("__mensagem2").innerHTML = 'Aguarde!';
}//altera os textos, ao acionar a Função.

function criptografar() {//acionada, quando clica o button...
    document.getElementById("__imagem-tux").src = imagemAtual;/*Busca esse elemento pelo id,lá no html e altera seu src, pelo da variavel, que o valor está abaixo*/
     imagemAtual = "imagens/among us.jpg";
    let mensagemDigitada = document.getElementById('__digitar-mensagem').value;/*cria uma nova variável e atribui o valor que vai ser passado de string, nesse campo do html*/
    digitando();//chama a função...

    let codificador = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };//criando um array com as mensagens,onde cada uma já tem seu valor trocado
    mensagemDigitada = mensagemDigitada.replace(/[aeiou]/g, function(criptografia) {
     return codificador[criptografia] || criptografia;
    });
//percorre os valores na string e troca, confome o array
    document.getElementById("__mensagem1").innerHTML = mensagemDigitada;/*passa o valor armazenado na variável.*/
    document.getElementById("__mensagem2").innerHTML = '';/*altera o valor da string para vazia*/
}

function descriptografar() {
    document.getElementById("__imagem-tux").src = imagemAtual;
    imagemAtual = "imagens/among us2.jpg";
    let mensagemDigitada = document.getElementById('__digitar-mensagem').value;
    digitando();    

     let decodificador = { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' };
     mensagemDigitada = mensagemDigitada.replace(/ai|enter|imes|ober|ufat/g, function(criptografia) {
         return decodificador[criptografia] || criptografia});
     
    document.getElementById("__mensagem1").innerHTML = mensagemDigitada;
    document.getElementById("__mensagem2").innerHTML = '';
   
}//mesma lógica da function criptografia 

function copiarMensagem() {
    var mensagemCopiar = document.getElementById("__mensagem1").innerText;

//cria uma variável, que armazena o valor da primeira mensagem.
    // Utilizando navigator.clipboard.writeText() para copiar o texto
    navigator.clipboard.writeText(mensagemCopiar)}
 