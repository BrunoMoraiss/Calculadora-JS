
export default function (ev) { //Referenciando o botão copy
    const inputResult = document.getElementById("result")
    const button = ev.currentTarget //Criando uma variavel ao botão copy, ev.currentTarget serve para pegar o valor do botão pois foi com ele que foi acionado o evento
    if (button.innerText === "Copy") { //Caso o botão o texto do botão seja "Copy"
        button.innerText = "Copied" //Irá trocar o texto para "Copied"
        button.classList.add("success") //Irá adicionar a classe "success" ao botão
        navigator.clipboard.writeText(inputResult.value) //Está colocando a area de transferencia (CTRL + V) o valor do input resultado
    } else { //Caso clique no botão novamente
        button.innerText = "Copy" //Irá trocar o texto para "Copied"
        button.classList.remove("success") //Irá remover a classe "success" do botão copy (id=""copyToClipboard"")
    }
}