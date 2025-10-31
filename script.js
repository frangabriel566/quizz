"use strict";

/* ============================
   QUIZ — 20 perguntas + Cadeado
   ============================ */

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

    // 5 difíceis
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
            { id: 1, text: "3", correct: true }, // 2^2 - 1 = 3
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
const $ = (sel) => document.querySelector(sel);
const loginSection = $("#login-section");
const playerInput = $("#player-name");
const startBtn = $("#start-btn");
const playerBadge = $("#player-badge");
const playerNameBadge = $("#player-name-badge");

const quizSection = $("#quiz-section");
const questionElement = $("#question");
const answerButtons = $("#answer-buttons");
const nextButton = $("#next-btn");
const timerElement = $("#timer");

const resultsBtn = $("#results-btn");
const resultsSection = $("#results-section");
const resultsTableBody = $("#results-table tbody");

const exportBtn = $("#export-btn");
const clearBtn = $("#clear-btn");

const finalSection = $("#final-section");
const finalMessage = $("#final-message");
const finalSubtitle = $("#final-subtitle");

// ----- Estado -----
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timer = null;
let playerName = "";

// ----- Storage -----
const KEY_RESULTS = "quizResults";
const KEY_LOCK = "quizLocked";        // true/false
const KEY_PLAYER = "quizPlayerName";    // último nome usado
const KEY_LAST = "quizLastResult";    // {name, score, total, timestamp}

function sget(key, fallback) {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
    catch { return fallback; }
}
function sset(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch { }
}

// ----- Inicialização -----
document.addEventListener("DOMContentLoaded", () => {
    // Botões
    startBtn?.addEventListener("click", handleStart);
    nextButton?.addEventListener("click", handleNextClick);
    resultsBtn?.addEventListener("click", () => resultsSection?.classList.toggle("hidden"));
    exportBtn?.addEventListener("click", exportCSV);
    clearBtn?.addEventListener("click", clearResults);

    // Se já estiver travado, mostra tela final e bloqueia tudo
    if (sget(KEY_LOCK, false)) {
        renderLockedScreenFromStorage();
        renderResultsTable();
        return;
    }

    // Render inicial (resultados)
    renderResultsTable();
});

// ===== Fluxo do Quiz =====
function handleStart() {
    const name = (playerInput?.value || "").trim();
    if (!name) {
        if (playerInput) {
            playerInput.focus();
            playerInput.style.borderColor = "#ef4444";
        }
        return;
    }
    if (playerInput) playerInput.style.borderColor = "#d1d5db";
    playerName = name;
    sset(KEY_PLAYER, playerName); // garante que ficará salvo

    // UI
    if (playerNameBadge) playerNameBadge.textContent = playerName;
    playerBadge?.classList.remove("hidden");
    loginSection?.classList.add("hidden");
    quizSection?.classList.remove("hidden");

    startQuiz();
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    const q = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${q.question}`;
    startTimer();
    q.answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.textContent = ans.text;
        btn.classList.add("btn");
        btn.dataset.correct = String(ans.correct);
        btn.addEventListener("click", selectAnswer);
        answerButtons.appendChild(btn);
    });
}

function resetState() {
    nextButton.style.display = "none";
    clearInterval(timer);
    timer = null;
    while (answerButtons.firstChild) answerButtons.removeChild(answerButtons.firstChild);
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
    setTimeout(goNextQuestion, 700);
}

function selectAnswer(e) {
    clearInterval(timer);
    timer = null;
    const selectedBtn = e.currentTarget;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) { selectedBtn.classList.add("correct"); score++; }
    else { selectedBtn.classList.add("incorrect"); }
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
    goNextQuestion();
}
function goNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) showQuestion();
    else finishQuiz();
}

// ===== Finalização: salvar, mostrar nota e TRAVAR =====
function finishQuiz() {
    resetState();
    const name = playerName || sget(KEY_PLAYER, ""); // reforço
    if (!name) {
        // Se chegou aqui sem nome (não deveria), evita “Anônimo” e volta ao login
        quizSection?.classList.add("hidden");
        loginSection?.classList.remove("hidden");
        return;
    }

    // Salva resultado com o nome (NUNCA “Anônimo”)
    const entry = {
        name,
        score,
        total: questions.length,
        timestamp: new Date().toISOString(),
    };
    const list = sget(KEY_RESULTS, []);
    list.push(entry);
    sset(KEY_RESULTS, list);
    sset(KEY_LAST, entry);

    // Atualiza tabela de resultados
    renderResultsTable();

    // TRAVA o quiz neste navegador
    sset(KEY_LOCK, true);

    // Mostra tela final com a nota e esconde quiz e login
    showLockedScreen(entry);
}

// ===== Tela travada =====
function showLockedScreen(entry) {
    // Esconde áreas interativas
    quizSection?.classList.add("hidden");
    loginSection?.classList.add("hidden");
    nextButton.style.display = "none";

    // Mostra mensagem final
    finalMessage.textContent = `🎯 ${entry.name}, você acertou ${entry.score} de ${entry.total} perguntas!`;
    finalSubtitle.textContent = `Finalizado em ${formatDateTime(entry.timestamp)}.`;
    finalSection?.classList.remove("hidden");

    // Badge com nome
    if (playerNameBadge) playerNameBadge.textContent = entry.name;
    playerBadge?.classList.remove("hidden");
}

function renderLockedScreenFromStorage() {
    const entry = sget(KEY_LAST, null);
    if (entry && entry.name) {
        showLockedScreen(entry);
    } else {
        // fallback (sem último resultado salvo)
        quizSection?.classList.add("hidden");
        loginSection?.classList.add("hidden");
        finalMessage.textContent = "Quiz finalizado neste navegador.";
        finalSubtitle.textContent = "";
        finalSection?.classList.remove("hidden");
    }
}

// ===== Resultados (criador) =====
function renderResultsTable() {
    const list = sget(KEY_RESULTS, []);
    resultsTableBody.innerHTML = "";
    list.forEach((r, idx) => {
        const pct = ((r.score / r.total) * 100).toFixed(0) + "%";
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${escapeHTML(r.name)}</td>
      <td>${r.score}</td>
      <td>${r.total}</td>
      <td>${pct}</td>
      <td>${formatDateTime(r.timestamp)}</td>
    `;
        resultsTableBody.appendChild(tr);
    });
}

function exportCSV() {
    const list = sget(KEY_RESULTS, []);
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
    downloadCSV([header, ...rows], "resultados_quiz.csv");
}
function clearResults() {
    if (!confirm("Limpar todos os resultados salvos neste navegador?")) return;
    sset(KEY_RESULTS, []);
    renderResultsTable();
}

// ===== Utilidades =====
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
function downloadCSV(rowsArray, filename) {
    const csv = rowsArray.map(cols => cols.map(v => `"${String(v)}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
}




