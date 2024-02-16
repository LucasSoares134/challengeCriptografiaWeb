# challengeCriptografiaWeb
Sitema web, onde recebe dados, criptografa e despitografa. 

# semantica correta html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
</head>
<body>
    <header>
        <!-- Conteúdo do cabeçalho -->
    </header>

    <main>
        <section>
            <!-- Descrição do conteúdo principal -->
        </section>

        <aside>
            <!-- Conteúdo complementar à section -->
        </aside>
    </main>

    <footer>
        <!-- Conteúdo do rodapé -->
    </footer>
</body>
</html>
--------------------------------xxx---------------------------------------xxx----------------------------------
Lógica inicial do projeto:
function exibirTextoNaTela(id, texto) {
    let msg = document.getElementById(id);
    msg.innerHTML = texto;
}

function criptografar() {
    let codificador = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };
    let mensagem = document.getElementById('__digitar-mensagem').value;

    mensagem = mensagem.replace(/[aeiou]/g, function(criptografia) {
        return codificador[criptografia] || criptografia;
    });

    // Atualiza o conteúdo da mensagem criptografada no elemento __mensagem1
    exibirTextoNaTela('__mensagem1', mensagem);
}

function descriptografar() {
    let decodificador = { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' };
    let mensagem = document.getElementById('__digitar-mensagem').value;

    mensagem = mensagem.replace(/ai|enter|imes|ober|ufat/g, function(criptografia) {
        return decodificador[criptografia] || criptografia;
    });

    // Atualiza o conteúdo da mensagem descriptografada no elemento __mensagem2
    exibirTextoNaTela('__mensagem2', mensagem);
}




USE O object literals  e o replace, para fazer a criptografia
------------------------------------------xxx---------------------------------------xxx--------------------------------------------

dica:
USA-SE O object literals  e o replace, para fazer a criptografia. (Melhora o switch)
lógica:

Requisitos:
ai iniciar o programa tem a imagem e o texto inicial.
ao clicar para escrever, o campo fica em branco com uma mensagem: "criptografando..."
ao selecionar a opção de botão, executa uma das funções e a mensagem no final da função, deve aparecer no local destacado.
Além disso, habilita um botão chamado "copiar"- onde permite copiar o código que foi criptografado ou descriptografado.


