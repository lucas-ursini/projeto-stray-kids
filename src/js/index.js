const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const botaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");
    

    if (modoEscuroEstaAtivo) {
        botaoTrocaDeTema.setAttribute("src", "./src/imagens/golive.png")

    } else {
        botaoTrocaDeTema.setAttribute("src", "./src/imagens/InLife.png")
    }

});
