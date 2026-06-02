const perguntas = [

    {
        pergunta: "Qual tecnologia principal a EcoSafe utiliza para monitoramento?",
        opcoes: [
            "Satélites",
            "Impressoras",
            "Fogões",
            "Bicicletas"
        ],
        correta: 0
    },

    {
        pergunta: "Qual desastre natural pode ser previsto com monitoramento climático?",
        opcoes: [
            "Enchentes",
            "Queda de energia",
            "Trânsito",
            "Barulho urbano"
        ],
        correta: 0
    },

    {
        pergunta: "O objetivo principal da EcoSafe é:",
        opcoes: [
            "Vender satélites",
            "Prevenir desastres naturais",
            "Criar jogos",
            "Construir carros"
        ],
        correta: 1
    },

    {
        pergunta: "Qual tecnologia auxilia na análise dos dados coletados?",
        opcoes: [
            "Máquina de escrever",
            "Calculadora",
            "Inteligência Artificial",
            "DVD"
        ],
        correta: 2
    },

    {
        pergunta: "Qual destes é um benefício da EcoSafe?",
        opcoes: [
            "Mais enchentes",
            "Mais trânsito",
            "Alertas antecipados",
            "Mais poluição"
        ],
        correta: 2
    },

    {
        pergunta: "Os satélites ajudam a:",
        opcoes: [
            "Monitorar a Terra",
            "Lavar roupas",
            "Produzir energia nuclear",
            "Fabricar celulares"
        ],
        correta: 0
    },

    {
        pergunta: "Eventos extremos podem causar:",
        opcoes: [
            "Desastres naturais",
            "Melhora do sinal Wi-Fi",
            "Mais baterias",
            "Mais satélites"
        ],
        correta: 0
    },

    {
        pergunta: "A EcoSafe contribui para:",
        opcoes: [
            "Proteção de vidas",
            "Aumento de riscos",
            "Mais poluição",
            "Desmatamento"
        ],
        correta: 0
    },

    {
        pergunta: "O monitoramento contínuo permite:",
        opcoes: [
            "Tomar decisões antecipadas",
            "Ignorar riscos",
            "Parar os satélites",
            "Aumentar enchentes"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é o foco da Global Solution EcoSafe?",
        opcoes: [
            "Moda",
            "Jogos",
            "Prevenção de desastres",
            "Cinema"
        ],
        correta: 2
    }

];

let perguntaAtual = 0;
let pontuacao = 0;
let respostaSelecionada = null;

const perguntaElemento =
    document.getElementById("pergunta");

const opcoesElemento =
    document.getElementById("opcoes");

const botaoProxima =
    document.getElementById("btn-proxima");

const resultado =
    document.getElementById("resultado");

const btnReiniciar =
    document.getElementById("btn-reiniciar");

function carregarPergunta(){

    respostaSelecionada = null;

    const pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent =
        `${perguntaAtual + 1}/10 - ${pergunta.pergunta}`;

    opcoesElemento.innerHTML = "";

    pergunta.opcoes.forEach((opcao, indice) => {

        const div = document.createElement("div");

        div.classList.add("opcao");

        div.textContent = opcao;

        div.addEventListener("click", () => {

            document
                .querySelectorAll(".opcao")
                .forEach(item =>
                    item.classList.remove("selecionada")
                );

            div.classList.add("selecionada");

            respostaSelecionada = indice;

        });

        opcoesElemento.appendChild(div);

    });

}

botaoProxima.addEventListener("click", () => {

    if(respostaSelecionada === null){

        alert("Selecione uma alternativa.");

        return;

    }

    if(
        respostaSelecionada ===
        perguntas[perguntaAtual].correta
    ){
        pontuacao++;
    }

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){

        carregarPergunta();

    }else{

        let nivel = "";

        if(pontuacao <= 4){

            nivel = "Iniciante";

        }else if(pontuacao <= 7){

            nivel = "Intermediário";

        }else{

            nivel = "Especialista em Prevenção";
        }

        perguntaElemento.innerHTML = `
            🎉 Quiz Finalizado!
        `;

        opcoesElemento.innerHTML = `
            <div class="resultado-quiz">
                Você acertou <strong>${pontuacao}</strong> de 10 perguntas.
                <br><br>
                Nível: <strong>${nivel}</strong>
            </div>
        `;

        botaoProxima.style.display = "none";

        btnReiniciar.style.display = "inline-block";
    }

});

btnReiniciar.addEventListener("click", () => {

    perguntaAtual = 0;

    pontuacao = 0;

    respostaSelecionada = null;

    resultado.innerHTML = "";

    botaoProxima.style.display = "inline-block";

    btnReiniciar.style.display = "none";

    carregarPergunta();

});

carregarPergunta();