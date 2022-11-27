import { calculate } from "./calculate.js"

const input = document.querySelector("#input")
const inputResult = document.getElementById("result")

export function handleButtonPress(ev) { //Adicionando a fun'c~ao de click a cada elemento com essa classe
    const value = ev.currentTarget.dataset.value //Pegando o valor do data referenciado ao button clicado
    input.value += value //Colocando o valor recuperado no input principal
}

export function handleClearButton (){ //Referenciando o botão "C" ao evento clique
    input.value = "" //o input irá receer vazio 
    input.focus() //Focar no input principal
}

export function handleTyping (ev){ //Passando uma função ao input principal, para que seja possivel usar acionamento das teclas dentro dele 
    const arrayCharacters = ["(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "%"] //Lista de caracteres para auxiliar na verificação por acionamento das teclas
    ev.preventDefault()
    if(arrayCharacters.includes(ev.key)){//Verificando se a tecla acionada existe dentro do arraycharacters
        input.value += ev.key //Adicionando a tecla acionada ao input principal
    }

    if(ev.key === 'Backspace'){ //Verificando se a tecla pressionada foi o "Backspace"
        input.value = input.value.slice(0, -1) //o input principal recebe o valor atual do input menos a ultima caractere adicionada (Ao colocar -1 começa pela ultima)
    }

    if(ev.key === 'Enter'){ //Caso a tecla enter seja acionada
        calculate() //Chamando a função calculate
    }
}