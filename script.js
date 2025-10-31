// =========================
// script.js — 20 PERGUNTAS
// =========================

// ----- PERGUNTAS (20) -----
const questions = [
    // 15 originais
    {
        question: "Qual é o único metal que é líquido em temperatura ambiente?",
        answers: [
            { id: 1, text: "Césio", correct: false },
            { id: 2, text: "Mercúrio", correct: true },
            { id: 3, text: "Gálio", correct: false },
            { id: 4, text: "Bromo", correct: false },
        ]
    },
    {
        question: "Quem formulou a lei da gravitação universal?",
        answers: [
            { id: 1, text: "Galileu Galilei", correct: false },
            { id: 2, text: "Isaac Newton", correct: true },
            { id: 3, text: "Johannes Kepler", correct: false },
            { id: 4, text: "Albert Einstein", correct: false },
        ]
    },
    {
        question: "Qual filósofo escreveu a obra 'O Ser e o Nada'?",
        answers: [
            { id: 1, text: "Jean-Paul Sartre", correct: true },
            { id: 2, text: "Martin Heidegger", correct: false },
            { id: 3, text: "Friedrich Nietzsche", correct: false },
            { id: 4, text: "Karl Marx", correct: false },
        ]
    },
    {
        question: "Qual o país com o maior número de fusos horários?",
        answers: [
            { id: 1, text: "Estados Unidos", correct: false },
            { id: 2, text: "França", correct: true },
            { id: 3, text: "Rússia", correct: false },
            { id: 4, text: "China", correct: false },
        ]
    },
    {
        question: "Qual o nome da partícula responsável por dar massa a outras partículas?",
        answers: [
            { id: 1, text: "Bóson de Higgs", correct: true },
            { id: 2, text: "Nêutron", correct: false },
            { id: 3, text: "Fóton", correct: false },
            { id: 4, text: "Glúon", correct: false },
        ]
    },
    {
        question: "Em que ano teve início a Primeira Guerra Mundial?",
        answers: [
            { id: 1, text: "1914", correct: true },
            { id: 2, text: "1918", correct: false },
            { id: 3, text: "1939", correct: false },
            { id: 4, text: "1905", correct: false },
        ]
    },
    {
        question: "Qual país foi o primeiro a conceder o voto às mulheres?",
        answers: [
            { id: 1, text: "Nova Zelândia", correct: true },
            { id: 2, text: "Estados Unidos", correct: false },
            { id: 3, text: "Suíça", correct: false },
            { id: 4, text: "Reino Unido", correct: false },
        ]
    },
    {
        question: "Quem pintou o famoso quadro 'Guernica'?",
        answers: [
            { id: 1, text: "Pablo Picasso", correct: true },
            { id: 2, text: "Salvador Dalí", correct: false },
            { id: 3, text: "Joan Miró", correct: false },
            { id: 4, text: "Diego Rivera", correct: false },
        ]
    },
    {
        question: "Qual o nome da primeira civilização conhecida da história?",
        answers: [
            { id: 1, text: "Egípcia", correct: false },
            { id: 2, text: "Suméria", correct: true },
            { id: 3, text: "Babilônica", correct: false },
            { id: 4, text: "Persa", correct: false },
        ]
    },
    {
        question: "Qual a capital mais alta do mundo em altitude?",
        answers: [
            { id: 1, text: "La Paz", correct: true },
            { id: 2, text: "Quito", correct: false },
            { id: 3, text: "Katmandu", correct: false },
            { id: 4, text: "Bogotá", correct: false },
        ]
    },
    {
        question: "Qual é o maior oceano do planeta Terra?",
        answers: [
            { id: 1, text: "Atlântico", correct: false },
            { id: 2, text: "Pacífico", correct: true },
            { id: 3, text: "Índico", correct: false },
            { id: 4, text: "Ártico", correct: false },
        ]
    },
    {
        question: "Quem foi o autor da teoria do contrato social?",
        answers: [
            { id: 1, text: "Thomas Hobbes", correct: false },
            { id: 2, text: "Jean-Jacques Rousseau", correct: true },
            { id: 3, text: "John Locke", correct: false },
            { id: 4, text: "Montesquieu", correct: false },
        ]
    },
    {
        question: "Qual cientista descobriu a penicilina?",
        answers: [
            { id: 1, text: "Louis Pasteur", correct: false },
            { id: 2, text: "Alexander Fleming", correct: true },
            { id: 3, text: "Marie Curie", correct: false },
            { id: 4, text: "Gregor Mendel", correct: false },
        ]
    },
    {
        question: "Qual o nome do maior satélite natural de Saturno?",
        answers: [
            { id: 1, text: "Titã", correct: true },
            { id: 2, text: "Europa", correct: false },
            { id: 3, text: "Ganimedes", correct: false },
            { id: 4, text: "Encélado", correct: false },
        ]
    },
    {
        question: "Quem escreveu 'Crime e Castigo'?",
        answers: [
            { id: 1, text: "Liev Tolstói", correct: false },
            { id: 2, text: "Fiódor Dostoiévski", correct: true },
            { id: 3, text: "Anton Tchékhov", correct: false },
            { id: 4, text: "Nikolai Gogol", correct: false },
        ]
    },

    // 5 difíceis (escolhidas)
    {
        question: "Qual é o elemento químico com maior ponto de fusão?",
        answers: [
            { id: 1, text: "Tungstênio", correct: true },
            { id: 2, text: "Carbono", correct: false },
            { id: 3, text: "Molibdênio", correct: false },
            { id: 4, text: "Tântalo", correct: false },
        ]
    },
    {
        question: "Em matemática, qual o menor número primo de Mersenne conhecido gera um número perfeito?",
        answers: [
            { id: 1, text: "3", correct: true }, // 2^2 - 1 = 3 -> perfeito 6
            { id: 2, text: "5", correct: false },
            { id: 3, text: "7", correct: false },
            { id: 4, text: "13", correct: false },
        ]
    },
    {
        question: "Em que século ocorreu a Revolta de Taiping na China?",
        answers: [
            { id: 1, text: "Século XIX", correct: true },
            { id: 2, text: "Século XVIII", correct: false },
            { id: 3, text: "Século XVII", correct: false },
            { id: 4, text: "Século XX", correct: false },
        ]
    },
    {
        question: "Qual molécula é conhecida como 'ATP' e atua como moeda energética celular?",
        answers: [
            { id: 1, text: "Adenosina trifosfato", correct: true },
            { id: 2, text: "Adenina trifosfato", correct: false },
            { id: 3, text: "Ácido tricarboxílico", correct: false },
            { id: 4, text: "Adenosina difosfato", correct: false },
        ]
    },
    {
        question: "Qual é o único país lusófono da Ásia?",
        answers: [
            { id: 1, text: "Timor-Leste", correct: true },
            { id: 2, text: "Macau", correct: false },
            { id: 3, text: "Goa", correct: false },
            { id: 4, text: "Cingapura", correct: false },
        ]
    },
];

// ----- DOM -----
const loginSection = document.getElementById("login-section");
const playerInput = document.getElementById("player-name");
const startBtn = document.getElementById("start-btn");
const playerBadge = document.getElementById("player-badge");
const playerNameBadge = document.getElementById("player-name-badge");

const quizSection = document.getElementById("quiz-section");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");

const resultsBtn = document.getElementById("results-btn");
const resultsSection = document.getElementById("results-section");
const resultsTableBody = document.querySelector("#results-table tbody");
const exportBtn = document.getElementById("export-btn");
const clearBtn = document.getElementById("clear-btn");

// ----- Estado do Quiz -----
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timer = null;
let isRestartMode = false;
let playerName = "";

// ----- Inicialização -----
document.addEventListener("DOMContentLoaded", () => {
    startBtn.addEventListener("click", handleStart);
    nextButton.addEventListener("click", handleNextClick);
    resultsBtn.addEventListener("click", toggleResults);
    exportBtn.addEventListener("click", exportCSV);
    clearBtn.addEventListener("click", clearResults);
    renderResultsTable();
});

function handleStart() {
    const name = (playerInput.value || "").trim();
    if (!name) {
        playerInput.focus();
        playerInput.style.borderColor = "#ef4444";
        return;
    }
    playerInput.style.borderColor = "#d1d5db";
    playerName = name;

    playerNameBadge.textContent = playerName;
    playerBadge.classList.remove("hidden");
    loginSection.classList.add("hidden");
    quizSection.classList.remove("hidden");

    startQuiz();
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    isRestartMode = false;
    nextButton.textContent = "Próxima";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.textContent = `${questionNo}. ${currentQuestion.question}`;
    startTimer();

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        button.dataset.correct = String(answer.correct);
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    clearInterval(timer);
    timer = null;
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function startTimer() {
    timeLeft = 10;
    updateTimerLabel();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerLabel();
        if (timeLeft <= 0) {
            clearInterval(timer);
            timer = null;
            handleTimeout();
        }
    }, 1000);
}

function updateTimerLabel() {
    timerElement.textContent = `⏱️ Tempo: ${Math.max(timeLeft, 0)}s`;
}

function handleTimeout() {
    disableButtons();
    timerElement.textContent = "⏰ Tempo esgotado!";
    setTimeout(() => goNextQuestion(), 700);
}

function selectAnswer(e) {
    clearInterval(timer);
    timer = null;

    const selectedBtn = e.currentTarget;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    disableButtons();
    nextButton.style.display = "block";
}

function disableButtons() {
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") button.classList.add("correct");
        button.disabled = true;
    });
}

function handleNextClick() {
    if (isRestartMode) {
        // Volta ao login para poder mudar o nome
        loginSection.classList.remove("hidden");
        quizSection.classList.add("hidden");
        playerBadge.classList.add("hidden");
        playerInput.value = "";
        playerInput.focus();
        return;
    }
    goNextQuestion();
}

function goNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.textContent = `🎯 ${playerName}, você acertou ${score} de ${questions.length} perguntas!`;
    timerElement.textContent = "";

    saveResult({
        name: playerName,
        score: score,
        total: questions.length,
        timestamp: new Date().toISOString()
    });
    renderResultsTable();

    nextButton.textContent = "Jogar novamente";
    nextButton.style.display = "block";
    isRestartMode = true;
}

// ----- Persistência e Tabela -----
const STORAGE_KEY = "quizResults";

function getResults() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
        return [];
    }
}

function saveResult(entry) {
    const list = getResults();
    list.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function renderResultsTable() {
    const list = getResults();
    resultsTableBody.innerHTML = "";
    list.forEach((r, idx) => {
        const tr = document.createElement("tr");
        const pct = ((r.score / r.total) * 100).toFixed(0) + "%";
        const dt = formatDateTime(r.timestamp);
        tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${escapeHTML(r.name)}</td>
      <td>${r.score}</td>
      <td>${r.total}</td>
      <td>${pct}</td>
      <td>${dt}</td>
    `;
        resultsTableBody.appendChild(tr);
    });
}

function toggleResults() {
    resultsSection.classList.toggle("hidden");
}

function exportCSV() {
    const list = getResults();
    if (!list.length) return;

    const header = ["#", "Nome", "Acertos", "Total", "Percentual", "Data/Hora ISO"];
    const rows = list.map((r, i) => [
        i + 1,
        r.name.replace(/"/g, '""'),
        r.score,
        r.total,
        ((r.score / r.total) * 100).toFixed(0) + "%",
        r.timestamp
    ]);

    const csv = [header, ...rows].map(cols =>
        cols.map(v => `"${String(v)}"`).join(",")
    ).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resultados_quiz.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function clearResults() {
    if (confirm("Tem certeza que deseja limpar todos os resultados salvos neste navegador?")) {
        localStorage.removeItem(STORAGE_KEY);
        renderResultsTable();
    }
}

// ----- Utilidades -----
function escapeHTML(s = "") {
    return s.replace(/[&<>"']/g, (c) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
}

function formatDateTime(iso) {
    const d = new Date(iso);
    return d.toLocaleString("pt-BR", {
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit"
    });
}


