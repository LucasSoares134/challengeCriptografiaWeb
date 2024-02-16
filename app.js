//CRIAR UMA VARIAVEL CHAMADA DE MENSAGEMDIGITADA
//function painel(){

        //evento 1 -inicial
//evento 2 -digitando
//evento 3 -bottonSelecionado
//}

//fica no html
function inicial(tag,texto){
    document.getElementById("__imagem-tux").src = imagemAtual;
    imagemAtual = "imagens/Tux.jfif";
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
inicial('h2','Nenhuma mensagem encontrada')
inicial('h3','Digite um texto que você deseja criptografar ou descriptografar.')
}

//2 onclick(ao clicar para escrever)
function digitando(){
    document.getElementById("__imagem-tux").src = imagemAtual;
    imagemAtual ="imagens/processando.jfif";
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    digitando('h2','texto sendo processado...')
    digitando('h3', 'Aguarde!')
}

//3(ao selecionar um dos botões)
function criptografar(){
    document.getElementById("__imagem-tux").src = imagemAtual;
    imagemAtual = "imagens/joinha.jfif";
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    criptografar('h2',mensagemDigitada)
}
function descriptografar(){
        document.getElementById("__imagem-tux").src = imagemAtual;
        imagemAtual = "imagens/joinha.jfif";
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        descriptografar('h3','mensagemDigitada')
    }
//possiveis eventos:
//onmousemove =mudaImagem(inicial) onmouseout=mudaImagem(digitando) onclick=mudaImagem(bottonSelecionado)


