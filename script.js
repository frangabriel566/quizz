"use strict";

/* =========================================================
   QUIZ — 20 perguntas + Nome do jogador + Resultados + Acessos
   Com verificações de elementos e localStorage à prova de erro
   ========================================================= */

// ---------- PERGUNTAS (20) ----------
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
            { id: 1, text: "3", correct: true },
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

// ---------- DOM (com segurança) ----------
const $ = (sel) => document.querySelector(sel);

// Se algum elemento não existir, o código ignora a parte correspondente
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

const accessTableBody = $("#access-table tbody");
const accessSummary = $("#access-summary");
const exportAccessBtn = $("#export-access-btn");
const clearAccessBtn = $("#clear-access-btn");

// ---------- Estado ----------
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timer = null;
let isRestartMode = false;
let playerName = "";
let currentAccessId = null;

// ---------- Storage seguro ----------
const STORAGE_RESULTS = "quizResults";
const STORAGE_ACCESS = "quizAccessLog";

function safeGet(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
        console.warn("localStorage get falhou:", e);
        return fallback;
    }
}
function safeSet(key, val) {
    try {
        localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
        console.warn("localStorage set falhou:", e);
    }
}

// ---------- Utilidades ----------
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
function generateId() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
function downloadCSV(rowsArray, filename) {
    const csv = rowsArray.map(cols =>
        cols.map(v => `"${String(v)}"`).join(",")
    ).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ---------- Acessos ----------
function getAccessLog() { return safeGet(STORAGE_ACCESS, []); }
function setAccessLog(list) { safeSet(STORAGE_ACCESS, list); }
function logAccess() {
    const list = getAccessLog();
    const entry = { id: generateId(), name: null, timestamp: new Date().toISOString() };
    list.push(entry);
    setAccessLog(list);
    return entry.id;
}
function updateAccessName(id, name) {
    const list = getAccessLog();
    const idx = list.findIndex(x => x.id === id);
    if (idx >= 0) {
        list[idx].name = name;
        setAccessLog(list);
    }
}
function renderAccessTable() {
    if (!accessTableBody || !accessSummary) return; // se HTML não tem a seção, evita erro
    const list = getAccessLog();
    accessTableBody.innerHTML = "";
    list.forEach((r, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${escapeHTML(r.name || "Anônimo")}</td>
      <td>${formatDateTime(r.timestamp)}</td>
    `;
        accessTableBody.appendChild(tr);
    });
    const total = list.length;
    const names = new Set(list.filter(x => x.name && x.name.trim()).map(x => x.name.trim()));
    accessSummary.textContent = `Total de acessos: ${total} • Nomes únicos: ${names.size}`;
}
function exportAccessCSV() {
    const list = getAccessLog();
    if (!list.length) return;
    const header = ["#", "Nome", "Data/Hora ISO"];
    const rows = list.map((r, i) => [i + 1, (r.name || "Anônimo").replace(/"/g, '""'), r.timestamp]);
    downloadCSV([header, ...rows], "acessos_quiz.csv");
}
function clearAccess() {
    if (!confirm("Limpar todos os registros de acessos deste navegador?")) return;
    safeSet(STORAGE_ACCESS, []);
    renderAccessTable();
}

// ---------- Resultados ----------
function getResults() { return safeGet(STORAGE_RESULTS, []); }
function saveResult(entry) {
    const list = getResults();
    list.push(entry);
    safeSet(STORAGE_RESULTS, list);
}
function renderResultsTable() {
    if (!resultsTableBody) return;
    const list = getResults();
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
    downloadCSV([header, ...rows], "resultados_quiz.csv");
}
function clearResults() {
    if (!confirm("Limpar todos os resultados salvos neste navegador?")) return;
    safeSet(STORAGE_RESULTS, []);
    renderResultsTable();
}

// ---------- Quiz ----------
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    isRestartMode = false;
    if (nextButton) {
        nextButton.textContent = "Próxima";
        nextButton.style.display = "none";
    }
    showQuestion();
}
function showQuestion() {
    if (!questionElement || !answerButtons) return;
    resetState();
    const current = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${current.question}`;
    startTimer();
    current.answers.forEach((answer) => {
        const btn = document.createElement("button");
        btn.textContent = answer.text;
        btn.classList.add("btn");
        btn.dataset.correct = String(answer.correct);
        btn.addEventListener("click", selectAnswer);
        answerButtons.appendChild(btn);
    });
}
function resetState() {
    if (nextButton) nextButton.style.display = "none";
    if (timer) clearInterval(timer);
    timer = null;
    if (answerButtons) {
        while (answerButtons.firstChild) answerButtons.removeChild(answerButtons.firstChild);
    }
}
function startTimer() {
    if (!timerElement) return;
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
    if (timerElement) timerElement.textContent = `⏱️ Tempo: ${Math.max(timeLeft, 0)}s`;
}
function handleTimeout() {
    disableButtons();
    if (timerElement) timerElement.textContent = "⏰ Tempo esgotado!";
    setTimeout(() => goNextQuestion(), 700);
}
function selectAnswer(e) {
    if (timer) clearInterval(timer);
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
    if (nextButton) nextButton.style.display = "block";
}
function disableButtons() {
    if (!answerButtons) return;
    Array.from(answerButtons.children).forEach((button) => {
        const btn = /** @type {HTMLButtonElement} */ (button);
        if (btn.dataset.correct === "true") btn.classList.add("correct");
        btn.disabled = true;
    });
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
    if (questionElement) {
        questionElement.textContent = `🎯 ${playerName || "Jogador"}, você acertou ${score} de ${questions.length} perguntas!`;
    }
    if (timerElement) timerElement.textContent = "";
    saveResult({
        name: playerName || "Anônimo",
        score,
        total: questions.length,
        timestamp: new Date().toISOString()
    });
    renderResultsTable();
    if (nextButton) {
        nextButton.textContent = "Jogar novamente";
        nextButton.style.display = "block";
        isRestartMode = true;
    }
}

// ---------- Inicialização & Listeners (só se existirem) ----------
document.addEventListener("DOMContentLoaded", () => {
    // Log de acesso
    currentAccessId = logAccess();
    renderAccessTable();
    renderResultsTable();

    if (startBtn) {
        startBtn.addEventListener("click", () => {
            const name = (playerInput && playerInput.value || "").trim();
            if (!name) {
                if (playerInput) {
                    playerInput.focus();
                    playerInput.style.borderColor = "#ef4444";
                }
                return;
            }
            if (playerInput) playerInput.style.borderColor = "#d1d5db";
            playerName = name;

            // Atualiza acesso com o nome informado
            if (currentAccessId) updateAccessName(currentAccessId, playerName);
            renderAccessTable();

            if (playerNameBadge) playerNameBadge.textContent = playerName;
            if (playerBadge) playerBadge.classList.remove("hidden");
            if (loginSection) loginSection.classList.add("hidden");
            if (quizSection) quizSection.classList.remove("hidden");

            startQuiz();
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            if (isRestartMode) {
                // volta ao login para trocar nome, se quiser
                if (loginSection) loginSection.classList.remove("hidden");
                if (quizSection) quizSection.classList.add("hidden");
                if (playerBadge) playerBadge.classList.add("hidden");
                if (playerInput) {
                    playerInput.value = "";
                    playerInput.focus();
                }
                isRestartMode = false;
                return;
            }
            goNextQuestion();
        });
    }

    if (resultsBtn && resultsSection) {
        resultsBtn.addEventListener("click", () => {
            resultsSection.classList.toggle("hidden");
        });
    }

    if (exportBtn) exportBtn.addEventListener("click", exportCSV);
    if (clearBtn) clearBtn.addEventListener("click", clearResults);

    if (exportAccessBtn) exportAccessBtn.addEventListener("click", exportAccessCSV);
    if (clearAccessBtn) clearAccessBtn.addEventListener("click", clearAccess);
});




