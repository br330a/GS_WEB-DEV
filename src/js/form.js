const formulario =
    document.getElementById("form-alerta");

const mensagem =
    document.getElementById("mensagem");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const cidade =
        document.getElementById("cidade").value.trim();

    if(nome.length < 3){

        mensagem.textContent =
            "Digite um nome válido.";

        mensagem.style.color = "red";

        return;

    }

    const emailValido =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailValido.test(email)){

        mensagem.textContent =
            "Digite um e-mail válido.";

        mensagem.style.color = "red";

        return;

    }

    if(cidade.length < 2){

        mensagem.textContent =
            "Digite uma cidade válida.";

        mensagem.style.color = "red";

        return;

    }

    const cadastro = {

        nome,
        email,
        cidade,
        dataCadastro:
            new Date().toLocaleString()

    };

    const cadastros =
        JSON.parse(
            localStorage.getItem("cadastrosEcoSafe")
        ) || [];

    cadastros.push(cadastro);

    localStorage.setItem(
        "cadastrosEcoSafe",
        JSON.stringify(cadastros)
    );

    mensagem.textContent =
        "✅ Cadastro realizado com sucesso! Você receberá alertas da EcoSafe.";

    mensagem.style.color = "green";

    formulario.reset();

});