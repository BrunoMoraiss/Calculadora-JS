import { calculate } from "./calculate.js"
import { switchTheme } from "./switchTheme.js"
import copyToClipBoard from "./copyToClipBoard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"

input.focus() //Para ja iniciar o programa focando no input principal

document.querySelectorAll(".charKey").forEach(function (charKeys){ //Referenciando todas as classes "charKey" e verificando objeto por obejto com o forEach
    charKeys.addEventListener('click', handleButtonPress)
})

input.addEventListener('keydown', handleTyping)

document.getElementById("clear").addEventListener('click', handleClearButton)

document.getElementById("equal").addEventListener('click', calculate)

document.getElementById("themeSwitcher").addEventListener("click", switchTheme)

document.getElementById("copyToClipboard").addEventListener("click", copyToClipBoard)