const botoesTema =
    document.querySelectorAll(".theme-btn");


function atualizarBotaoAtivo(tema){

    botoesTema.forEach(botao => {

        botao.classList.remove("active-theme");

        if(botao.dataset.theme === tema){

            botao.classList.add("active-theme");

        }

    });

}

const temaSalvo =
    localStorage.getItem("tema");

if(temaSalvo){

    if(temaSalvo !== "eco"){

        document.body.classList.add(
            `theme-${temaSalvo}`
        );

    }

    atualizarBotaoAtivo(temaSalvo);

}else {
    atualizarBotaoAtivo("eco");
}

botoesTema.forEach(botao => {

    botao.addEventListener("click", () => {

        document.body.classList.remove(
            "theme-dark",
            "theme-ocean"
        );

        const tema =
            botao.dataset.theme;

        if(tema !== "eco"){

            document.body.classList.add(
                `theme-${tema}`
            );

        }

        atualizarBotaoAtivo(tema);

        localStorage.setItem(
            "tema",
            tema
        );

    });

});