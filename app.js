
function painel(){
//evento 1 -inicial
//evento 2 -digitando
//evento 3 -bottonSelecionado
}

function inicial(){
    document.getElementById("__imagem-tux").src = imagemAtual;
    imagemAtual = "imagens/Tux.jfif";
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function digitando(){
    document.getElementById("__imagem-tux").src = imagemAtual;
    imagemAtual ="imagens/processando.jfif";
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function bottonSelecionado(){
    document.getElementById("__imagem-tux").src = imagemAtual;
    imagemAtual = "imagens/joinha.jfif";
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


//possiveis eventos:
//onmousemove =mudaImagem(inicial) onmouseout=mudaImagem(digitando) onclick=mudaImagem(bottonSelecionado)


