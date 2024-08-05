const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a religião influencia a percepção do estupro nas sociedades?",
        alternativas: [
            {
                texto: "Em algumas sociedades, a religião pode condenar fortemente o estupro, promovendo normas morais que protegem os indivíduos e incentivam o respeito e a dignidade humana.",
                afirmacao: "Religião, estrupo e superpopulação são temas complexos e interconectaos que afetam profundamente a sociedade. "
            },
            {
                texto: "Em algumas culturas, certas interpretações religiosas podem justificar ou minimizar a gravidade do estupro, especialmente quando se trata de questões de honra ou de controle sobre o corpo feminino.",
                afirmacao: "Religião, estrupo e superpopulação são temas complexos e interconectaos que afetam profundamente a sociedade. "
            }
        ]
    },
    {
        enunciado: "Qual é o papel da educação religiosa na prevenção do estupro?",
        alternativas: [
            {
                texto: "A educação religiosa pode ser utilizada para promover valores de respeito, consentimento e dignidade humana, ajudando a prevenir o estupro e outras formas de violência sexual.",
                afirmacao: "A religião, muitas vezes, oferece um conjunto de valores e normas que orientam comportamentos e atitudes individuais e coltivas. "
            },
            {
                texto: "se a educação religiosa for baseada em dogmas que perpetuam a desigualdade de gênero ou estereótipos negativos, ela pode contribuir para a perpetuação de atitudes permissivas em relação ao estupro.",
                afirmacao: "A religião, muitas vezes, oferece um conjunto de valores e normas que orientam comportamentos e atitudes individuais e coltivas. "
            }
        ]
    },
    {
        enunciado: "De que forma a intersecção entre estupro, religião e superpopulação pode ser abordada para promover mudanças positivas na sociedade?",
        alternativas: [
            {
                texto: "Abordar a intersecção entre esses temas requer a promoção de educação abrangente, que inclua princípios religiosos que valorizam a dignidade humana, juntamente com o ensino de saúde sexual e reprodutiva e planejamento familiar.",
                afirmacao: "Em algumas tradições religiosas, questões como o controle da natalidade e os direitos as mulhres podem ser tratados de maneira restritiva, "
            },
            {
                texto: "políticas públicas que considerem os impactos da superpopulação e trabalhem para fortalecer a proteção e os direitos das pessoas vulneráveis podem ajudar a criar um ambiente mais seguro e equitativo para todos.",
                afirmacao: "Em algumas tradições religiosas, questões como o controle da natalidade e os direitos as mulhres podem ser tratados de maneira restritiva, "
            }
        ]
    },
    {
        enunciado: "De que maneira a superpopulação pode agravar o problema do estupro?",
        alternativas: [
            {
                texto: "A superpopulação pode levar a recursos limitados, aumentando o estresse social e econômico, o que pode, por sua vez, resultar em um aumento na violência, incluindo estupro.",
                afirmacao: "influenciando a dinamica populacional e a percepção de violencia sexual. "
            },
            {
                texto: "Em áreas superpopuladas, a aplicação da lei e a proteção aos indivíduos podem ser mais difíceis de gerenciar, deixando as pessoas mais vulneráveis a crimes como o estupro.",
                afirmacao: "influenciando a dinamica populacional e a percepção de violencia sexual."
            }
        ]
    },
    {
        enunciado: "Como diferentes religiões abordam a questão da superpopulação e suas consequências sociais, como o estupro?",
        alternativas: [
            {
                texto: "Algumas religiões podem encorajar a limitação do número de filhos para evitar problemas de superpopulação e suas consequências, promovendo planejamento familiar responsável.",
                afirmacao: " "
            },
            {
                texto: "Outras religiões podem ter doutrinas que incentivam grandes famílias, potencialmente exacerbando problemas de superpopulação e os desafios sociais que a acompanham, como a violência sexual.",
                afirmacao: " "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre o Tema...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
