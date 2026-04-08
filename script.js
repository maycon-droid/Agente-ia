const perguntas = ["Fale sobre você",
    "Quais são seus pontos fortes?",
    "Quais são seus pontos fracos?",
    "Descreva uma situação em que você teve que lidar com um desafio e como o superou.",
    "Porque devemos te contratar?"
]
let indexPergunta = 0;
let pontosFortes = [];
let pontosFracos = [];

const campoPergunta = document.getElementById("campo-pergunta");
const campoResposta = document.getElementById("campo-resposta");
const botaoEnviar = document.getElementById("enviar-resposta");

function exibirPergunta() {
    if (indexPergunta < perguntas.length) {
        campoPergunta.textContent = perguntas[indexPergunta];
    } else {
        campoPergunta.textContent = "Obrigado por responder todas as perguntas!";
        campoResposta.style.display = "none";
        botaoEnviar.style.display = "none";
        exibirResultados();
    }
}

function enviarResposta() {
    const resposta = campoResposta.value.trim();
    if (resposta) {
        analisarResposta(resposta);
        campoResposta.value = "";
        indexPergunta++;
        exibirPergunta();
    } else {
        alert("Por favor, digite uma resposta antes de enviar.");
    }
}

botaoEnviar.addEventListener("click", enviarResposta);

function analisarResposta(resposta) {
    if (resposta.length < 3) {
        pontosFracos.push("Resposta muito curta");
    }
    if (resposta.toLowerCase().includes("equipe")) {
        pontosFortes.push("Trabalho em equipe");
    }
    if (resposta.toLowerCase().includes("desafio")) {
        pontosFortes.push("Capacidade de superar desafios");
    }
    if (resposta.toLowerCase().includes("contratar")) {
        pontosFortes.push("Motivação para ser contratado");
    }

}
function exibirResultados() {
    const resultado = document.createElement("div");
    resultado.innerHTML = `<h3>Resultados:</h3>
                           <p><strong>Pontos Fortes:</strong> ${pontosFortes.join(", ") || "Nenhum ponto forte identificado"}</p>
                           <p><strong>Pontos Fracos:</strong> ${pontosFracos.join(", ") || "Nenhum ponto fraco identificado"}</p>`;
    document.getElementById("container").appendChild(resultado);
}
exibirPergunta();
