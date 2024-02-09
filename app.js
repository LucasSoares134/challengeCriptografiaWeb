
 
let mensagem = prompt("Digite sua mensagem");

function criptografar() {
    let codificador = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    
   
    mensagem = mensagem.replace(/[aeiou]/g, function(criptografia) {

        switch(criptografia) {
            case 'a':
                return codificador[0];
            case 'e':
                return codificador[1];
            case 'i':
                return codificador[2];
            case 'o':
                return codificador[3];
            case 'u':
                return codificador[4];
            default:
                return criptografia; 
        }
    });

    console.log(mensagem);
}

criptografar();
function decriptografar(){
    let decodificador = ['ai', 'enter' , 'imes', 'ober', 'ufat'];

    mensagem = mensagem.replace(/ai|enter|imes|ober|ufat/g, function(criptografia) {

        switch(criptografia) {
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            default:
                return criptografia;
        }
    });

    console.log(mensagem);
}

decriptografar();

// ta zero bala mais , melhorar esse código ai menorzin!