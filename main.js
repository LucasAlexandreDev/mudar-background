'use strict' // faz o sistema ser mais rigoroso com o código,
            //transformando as sintaxes erradass aceitas anteriormente, agora não são mais

/* 
fn ->   recebe como valor a própria função (especifica somente para funções)
fn = function(){a = 10}
*/

// Seleciona o conjunto pelo ID que possui no HTML (botão)
const botaoTrocaCor = document.getElementById('botao-trocar-cor')

function trocarCorFundo(){

    // Serve para pegar o campo de texto (cor) que o usuário digitar 
    // value -> serve para pegar o conteúdo dentro do conjunto  
    const corUsuario = document.getElementById('cor-usuario').value
    
    // Tradução das cores 
   
    if (corUsuario == 'vermelho'){
        document.documentElement.style.setProperty('--color-bg', 'red')
    }else if (corUsuario == 'verde'){
        document.documentElement.style.setProperty('--color-bg', 'green')
    }else if(corUsuario == 'amarelo'){
        document.documentElement.style.setProperty('--color-bg', 'yellow')
    }else if(corUsuario == 'azul'){
        document.documentElement.style.setProperty('--color-bg', 'blue' )
    }else{
        document.documentElement.style.setProperty('--color-bg', corUsuario)
    }
}

// Serve para escutar eventos (click nesse caso)
botaoTrocaCor.addEventListener('click', trocarCorFundo )


function trocarCorBotaoVerde(){
    const corVerde = document.getElementById('botao-verde')

}





