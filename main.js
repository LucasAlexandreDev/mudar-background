    // faz o sistema ser mais rigoroso com o código,
    // corrigindo sintaxes erradas que antes eram aceitas, mas agora não são mais
    'use strict';   

    /* 

    fn = function(){a = 10}
    fn ->   recebe como valor a própria função (especifica somente para funções)

    */

    // Seleção dos elementos por ID
    const botaoTrocaCor = document.getElementById('botao-trocar-cor')
    const corVerde = document.getElementById('botao-verde')
    const corVermelho = document.getElementById('botao-vermelho')

    // função pra validar e aplicar as cores do input 
    function trocarCorFundo(){
        
        // value -> serve para pegar o valor atual de um elemento
        const corUsuario = document.getElementById('cor-usuario').value   

        // Validação das cores em pt-br 
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

    // Cada função muda a variável do css '--color-bg' para o nome da sua respectiva cor 
    function trocarCorVerde(){
        document.documentElement.style.setProperty('--color-bg', 'green')
    }

    function trocarCorVermelho(){
        document.documentElement.style.setProperty('--color-bg', 'red')
    }

    // Serve para escutar eventos e verificar o 'click' nessa instância  
    botaoTrocaCor.addEventListener('click', trocarCorFundo)
    corVerde.addEventListener('click', trocarCorVerde)
    corVermelho.addEventListener('click', trocarCorVermelho)

 
