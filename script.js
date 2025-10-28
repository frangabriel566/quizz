const questions = [
    {
        question: "Qual o elemento representado pela sigla (NA) ?",
        answers: [
            { id: 1, text: "Nitrogênio", correct: false },
            { id: 2, text: "Sódio", correct: true },
            { id: 3, text: "Nióbio", correct: false },
            { id: 4, text: "Níquel", correct: false },
        ]
    },
    {
        question: "Em que continente fica o maior deserto do mundo e qual?",
        answers: [
            { id: 1, text: "Ásia, Kalahari", correct: false },
            { id: 2, text: "América do Sul, Gobi", correct: false },
            { id: 3, text: "África, Saara", correct: true },
            { id: 4, text: "Oceania, Antártica", correct: false },
        ],
    },
    {
        question: "Qual o menor continente do mundo?",
        answers: [
            { id: 1, text: "Ásia", correct: false },
            { id: 2, text: "Austrália", correct: true },
            { id: 3, text: "Ártico", correct: false },
            { id: 4, text: "África", correct: false },
        ],
    },
    {
        question: "Qual o menor país do mundo?",
        answers: [
            { id: 1, text: "Vaticano", correct: true },
            { id: 2, text: "Butão", correct: false },
            { id: 3, text: "Nepal", correct: false },
            { id: 4, text: "Sri Lanka", correct: false },
        ],
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {  // Corrigido: 'firstchild' → 'firstChild'
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button"); // Corrigido: 'CreatElement' → 'createElement'
        button.innerHTML = answer.text;
        button.dataset.correct = answer.correct; // Guardar o valor correto
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer); // Corrigido: 'addEvent.Listener' → 'addEventListener'
        answerButtons.appendChild(button); // Corrigido: 'answer.buttons' → 'answerButtons'
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"; // comparar como string

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Desabilitar todos os botões após selecionar
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
    nextButton.innerHTML = "Jogar novamente";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}

startQuiz(); 
