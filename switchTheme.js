const main = document.querySelector('main')
const root = document.querySelector(":root")

function switchTheme() { //Chamando o evento para cada vez que o botão for clicado
    if (main.dataset.theme === "dark") { //Setando a troca de cores no html caso o data-theme seja igual a "dark"
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
}

export { switchTheme }