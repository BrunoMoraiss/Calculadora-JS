const input = document.getElementById("input") //referencia o input no Js 
const inputResult = document.getElementById("result")

function calculate(){
    inputResult.value = "ERROR" //Irá setar o value do input resultado como "Error"
    inputResult.classList.add("error") //Adicionando a class de "Error", objetivo é fazer a fonte ficar branca e o input vermelho 
    const result = eval(input.value) //o result irá receber a resolução dos valores presente no input, caso não possivel fazer o calculo a função irá parar aqui, por isso setei a class e o value acima
    inputResult.value = result //Adicionando ao input resultado o resultado do input principal
    inputResult.classList.remove("error") //Removendo a classe "Error" caso seja possivel resolver o calculo
}

export {calculate}