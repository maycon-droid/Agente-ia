const perguntas = ["Fale sobre você",
    "Quais são seus pontos fortes?",
"Quais são seus pontos fracos?",
"Descreva uma situação em que você teve que lidar com um desafio e como o superou.",
"Porque devemos te contratar?",
"Onde você se vê daqui a 5 anos?",
"Conte sobre uma experiência de trabalho em equipe",
"Como você lida com pressão e prazos apertados?",
"Qual foi seu maior erro profissional ou acadêmico?",
"O que você sabe sobre nossa empresa?",
"Por que você quer trabalhar nesta área?"
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
if (resposta.toLowerCase().includes("proativo") || resposta.toLowerCase().includes("iniciativa")) {
pontosFortes.push("Proatividade");
    }
if (resposta.toLowerCase().includes("aprender") || resposta.toLowerCase().includes("aprendizado")) {
pontosFortes.push("Vontade de aprender");
    }
if (resposta.toLowerCase().includes("organizado") || resposta.toLowerCase().includes("organização")) {
pontosFortes.push("Organização");
    }
if (resposta.toLowerCase().includes("comunicação") || resposta.toLowerCase().includes("comunicar")) {
pontosFortes.push("Boa comunicação");
    }
if (resposta.toLowerCase().includes("responsável") || resposta.toLowerCase().includes("responsabilidade")) {
pontosFortes.push("Responsabilidade");
    }
if (resposta.toLowerCase().includes("criativo") || resposta.toLowerCase().includes("criatividade")) {
pontosFortes.push("Criatividade");
    }
if (resposta.toLowerCase().includes("liderança") || resposta.toLowerCase().includes("líder")) {
pontosFortes.push("Liderança");
    }
if (resposta.toLowerCase().includes("objetivo") || resposta.toLowerCase().includes("meta")) {
pontosFortes.push("Foco em objetivos");
    }
if (resposta.toLowerCase().includes("experiência") || resposta.toLowerCase().includes("experiencias")) {
pontosFortes.push("Experiência relevante");
    }
if (resposta.toLowerCase().includes("dedicado") || resposta.toLowerCase().includes("dedicação")) {
pontosFortes.push("Dedicação");
    }
if (resposta.toLowerCase().includes("flexível") || resposta.toLowerCase().includes("flexibilidade")) {
pontosFortes.push("Flexibilidade");
    }
if (resposta.toLowerCase().includes("problema") || resposta.toLowerCase().includes("solução")) {
pontosFortes.push("Resolução de problemas");
    }
if (resposta.toLowerCase().includes("ansioso") || resposta.toLowerCase().includes("ansiedade")) {
pontosFracos.push("Pode ter problemas com ansiedade");
    }
if (resposta.toLowerCase().includes("perfeccionista")) {
pontosFracos.push("Perfeccionismo excessivo");
    }
if (resposta.toLowerCase().includes("inexperiente") || resposta.toLowerCase().includes("experiência pouca")) {
pontosFracos.push("Pouca experiência");
    }
if (resposta.toLowerCase().includes("dificuldade") && resposta.toLowerCase().includes("não")) {
pontosFracos.push("Falta de autoconhecimento");
    }
if (resposta.toLowerCase().includes("impaciência") || resposta.toLowerCase().includes("impaciente")) {
pontosFracos.push("Impaciência");
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