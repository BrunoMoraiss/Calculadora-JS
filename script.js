const input = document.getElementById("input") //referencia o input no Js 
const inputResult = document.getElementById("result")
const main = document.querySelector('main')
const root = document.querySelector(":root")

const arraycharacters = ["(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "%"] //Lista de caracteres para auxiliar na verifica'c~ao por acionamento das teclas

input.focus() //Para ja iniciar o programa focando no input principal

document.querySelectorAll(".charKey").forEach(function (charKeys){ //Referenciando todas as classes "charKey" e verificando objeto por obejto com o forEach
    charKeys.addEventListener('click', function (){ //Adicionando a fun'c~ao de click a cada elemento com essa classe
        const value = charKeys.dataset.value //Pegando o valor do data referenciado ao button clicado
        input.value += value //Colocando o valor recuperado no input principal
    })
})

input.addEventListener('keydown', function (ev){ //Passando uma função ao input principal, para que seja possivel usar acionamento das teclas dentro dele 
    ev.preventDefault()
    if(arrayValue.includes(ev.key)){//Verificando se a tecla acionada existe dentro do arraycharacters
        input.value += ev.key //Adicionando a tecla acionada ao input principal
    }

    if(ev.key === 'Backspace'){ //Verificando se a tecla pressionada foi o "Backspace"
        input.value = input.value.slice(0, -1) //o input principal recebe o valor atual do input menos a ultima caractere adicionada (Ao colocar -1 começa pela ultima)
    }

    if(ev.key === 'Enter'){ //Caso a tecla enter seja acionada
        calculate() //Chamando a função calculate
    }
})

document.getElementById("clear").addEventListener('click', function(){ //Referenciando o botão "C" ao evento clique
    input.value = "" //o input irá receer vazio 
    input.focus() //Focar no input principal
})

document.getElementById("equal").addEventListener('click', function(){ //Referenciando o botão "=" ao evento clique
    calculate() //Chamando a função calculate
})

function calculate(){
    inputResult.value = "ERROR" //Irá setar o value do input resultado como "Error"
    inputResult.classList.add("error") //Adicionando a class de "Error", objetivo é fazer a fonte ficar branca e o input vermelho 
    const result = eval(input.value) //o result irá receber a resolução dos valores presente no input, caso não possivel fazer o calculo a função irá parar aqui, por isso setei a class e o value acima
    inputResult.value = result //Adicionando ao input resultado o resultado do input principal
    inputResult.classList.remove("error") //Removendo a classe "Error" caso seja possivel resolver o calculo
}

document.getElementById("themeSwitcher").addEventListener("click", function(){ //Chamando o evento para cada vez que o botão for clicado
    if(main.dataset.theme === "dark"){ //Setando a troca de cores no html caso o data-theme seja igual a "dark"
        root.style.setProperty("--bg-color", "#f1f5f9") 
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#3e864d")
        main.dataset.theme = "light" //Definindo o data-theme como "light"
    } else {
        root.style.setProperty("--bg-color", "#212529") //Setando a troca de cores no html caso o data-theme seja igual a "light"
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark" //Definindo o data-theme como "dark"
    }
})

document.getElementById("copyToClipboard").addEventListener("click", function (ev){ //Referenciando o botão copy
    const button = ev.currentTarget //Criando uma variavel ao botão copy, ev.currentTarget serve para pegar o valor do botão pois foi com ele que foi acionado o evento
    if(button.innerText === "Copy"){ //Caso o botão o texto do botão seja "Copy"
        button.innerText = "Copied" //Irá trocar o texto para "Copied"
        button.classList.add("success") //Irá adicionar a classe "success" ao botão
        navigator.clipboard.writeText(inputResult.value) //Está colocando a area de transferencia (CTRL + V) o valor do input resultado
    } else { //Caso clique no botão novamente
        button.innerText = "Copy" //Irá trocar o texto para "Copied"
        button.classList.remove("success") //Irá remover a classe "success" do botão copy (id=""copyToClipboard"")
    }
})